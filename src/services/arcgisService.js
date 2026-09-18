// src/services/arcgisService.js
// Replaces spatialService.js - queries Kigali City ArcGIS Enterprise Feature Service directly
// No PostGIS or local zone data hosting required

const fetch = require('node-fetch');

const BASE_URL =
    'https://masterplan.kigalicity.gov.rw/server/rest/services/Masterplan2020/' +
    'Zoning_Phases_18March2026/FeatureServer/0';

const OUT_FIELDS = 'zone_code,new_zoning,level_1,level_2,level_3,lu_code,area_ha,area_sqkm,name,year,wet_name';

// Map raw ArcGIS feature attributes to a consistent shape for the rest of the app
function mapFeature(attributes) {
    return {
        zone_name:   attributes.new_zoning,   // alias used by claudeService
        new_zoning:  attributes.new_zoning,   // used directly in api.js
        zone_code:   attributes.zone_code,
        level_1:     attributes.level_1,
        level_2:     attributes.level_2,
        level_3:     attributes.level_3   || null,
        lu_code:     attributes.lu_code,
        area_ha:     attributes.area_ha,
        area_sqkm:   attributes.area_sqkm,
        phase:       attributes.name,         // ArcGIS "name" field holds the phase label
        year:        attributes.year,
        wet_name:    attributes.wet_name  || null,
        source:      'arcgis_feature_service'
    };
}

async function queryFeatureService(params) {
    const url = new URL(`${BASE_URL}/query`);
    const defaults = { f: 'json', returnGeometry: 'false' };
    Object.assign(defaults, params);
    Object.entries(defaults).forEach(([k, v]) => url.searchParams.set(k, v));

    const response = await fetch(url.toString());
    if (!response.ok) {
        throw new Error(`ArcGIS request failed: ${response.status} ${response.statusText}`);
    }
    const json = await response.json();
    if (json.error) {
        throw new Error(`ArcGIS error ${json.error.code}: ${json.error.message}`);
    }
    return json;
}

class ArcGISService {

    // Find the zone at a specific WGS84 coordinate
    async findZoneAtLocation(lat, lng) {
        try {
            // resultRecordCount here made the service apply it BEFORE the
            // spatial filter, so it would cap/paginate the raw table scan
            // and could return exceededTransferLimit with zero features
            // even when the point's zone genuinely exists — omit it and
            // just take the first (and only expected) match.
            const data = await queryFeatureService({
                geometry:     JSON.stringify({ x: lng, y: lat }),
                geometryType: 'esriGeometryPoint',
                inSR:         '4326',
                spatialRel:   'esriSpatialRelIntersects',
                outFields:    OUT_FIELDS
            });

            if (!data.features || data.features.length === 0) {
                return null;
            }

            return mapFeature(data.features[0].attributes);

        } catch (error) {
            console.error('Error finding zone at location:', error);
            throw error;
        }
    }

    // Wrapper used by api.js and claudeService
    async getLocationSpatialData(lat, lng) {
        try {
            const zoneData = await this.findZoneAtLocation(lat, lng);

            if (!zoneData) {
                return {
                    location: { lat, lng },
                    zoneData: null,
                    nearbyFeatures: [],
                    error: 'No zoning data found for this location'
                };
            }

            return {
                location: { lat, lng },
                zoneData,
                nearbyFeatures: []
            };

        } catch (error) {
            console.error('Error getting spatial data:', error);
            throw error;
        }
    }

    // Return distinct zone types with feature counts (replaces getAllZones DB query)
    async getAllZones() {
        try {
            const data = await queryFeatureService({
                where: '1=1',
                outFields: 'new_zoning,name,level_1,level_2',
                outStatistics: JSON.stringify([
                    { statisticType: 'count', onStatisticField: 'objectid', outStatisticFieldName: 'feature_count' }
                ]),
                groupByFieldsForStatistics: 'new_zoning,name,level_1,level_2',
                orderByFields: 'new_zoning ASC'
            });

            if (!data.features) return [];

            return data.features.map(f => ({
                zone_name:     f.attributes.new_zoning,
                phase:         f.attributes.name,
                level_1:       f.attributes.level_1,
                level_2:       f.attributes.level_2,
                feature_count: f.attributes.feature_count
            }));

        } catch (error) {
            console.error('Error getting all zones:', error);
            throw error;
        }
    }

    // Return zone boundaries as GeoJSON, optionally filtered by zone names or a bounding box
    async getZoneBoundaries(zoneNames = null, bounds = null) {
        try {
            const params = {
                outFields:      OUT_FIELDS,
                outSR:          '4326',
                returnGeometry: 'true'
            };

            const conditions = [];

            if (zoneNames && zoneNames.length > 0) {
                const escaped = zoneNames.map(n => `'${n.replace(/'/g, "''")}'`).join(',');
                conditions.push(`new_zoning IN (${escaped})`);
            }

            params.where = conditions.length > 0 ? conditions.join(' AND ') : '1=1';

            if (bounds) {
                const { north, south, east, west } = bounds;
                params.geometry     = JSON.stringify({ xmin: west, ymin: south, xmax: east, ymax: north });
                params.geometryType = 'esriGeometryEnvelope';
                params.inSR         = '4326';
                params.spatialRel   = 'esriSpatialRelIntersects';
            }

            const data = await queryFeatureService(params);

            if (!data.features) return { type: 'FeatureCollection', features: [] };

            const features = data.features.map(f => ({
                type: 'Feature',
                properties: mapFeature(f.attributes),
                geometry: f.geometry ? {
                    type: 'Polygon',
                    coordinates: f.geometry.rings
                } : null
            }));

            return { type: 'FeatureCollection', features };

        } catch (error) {
            console.error('Error getting zone boundaries:', error);
            throw error;
        }
    }

    // Full-text search across zone fields
    async searchZones(searchTerm) {
        try {
            const term = searchTerm.replace(/'/g, "''");
            const where =
                `new_zoning LIKE '%${term}%' OR ` +
                `zone_code  LIKE '%${term}%' OR ` +
                `level_1    LIKE '%${term}%' OR ` +
                `level_2    LIKE '%${term}%'`;

            const data = await queryFeatureService({
                where,
                outFields: 'new_zoning,zone_code,name,level_1,level_2',
                outStatistics: JSON.stringify([
                    { statisticType: 'count', onStatisticField: 'objectid', outStatisticFieldName: 'feature_count' }
                ]),
                groupByFieldsForStatistics: 'new_zoning,zone_code,name,level_1,level_2',
                orderByFields: 'new_zoning ASC',
                resultRecordCount: '20'
            });

            if (!data.features) return [];

            return data.features.map(f => ({
                zone_name:     f.attributes.new_zoning,
                zone_code:     f.attributes.zone_code,
                phase:         f.attributes.name,
                level_1:       f.attributes.level_1,
                level_2:       f.attributes.level_2,
                feature_count: f.attributes.feature_count
            }));

        } catch (error) {
            console.error('Error searching zones:', error);
            throw error;
        }
    }

    // Service statistics (replaces getDatabaseStats DB query)
    async getDatabaseStats() {
        try {
            const [totalData, uniqueData, topData] = await Promise.all([
                // Total features
                queryFeatureService({
                    where: '1=1',
                    outStatistics: JSON.stringify([
                        { statisticType: 'count', onStatisticField: 'objectid', outStatisticFieldName: 'total' }
                    ])
                }),
                // Unique zone count
                queryFeatureService({
                    where: '1=1',
                    outFields: 'new_zoning',
                    returnDistinctValues: 'true',
                    returnGeometry: 'false'
                }),
                // Top zones by feature count
                queryFeatureService({
                    where: '1=1',
                    outStatistics: JSON.stringify([
                        { statisticType: 'count', onStatisticField: 'objectid', outStatisticFieldName: 'count' }
                    ]),
                    groupByFieldsForStatistics: 'new_zoning',
                    orderByFields: 'count DESC',
                    resultRecordCount: '10'
                })
            ]);

            return {
                totalFeatures: totalData.features?.[0]?.attributes?.total || 0,
                uniqueZones:   uniqueData.features?.length || 0,
                topZones:      (topData.features || []).map(f => ({
                    zone_name: f.attributes.new_zoning,
                    count:     f.attributes.count
                })),
                source: 'arcgis_feature_service'
            };

        } catch (error) {
            console.error('Error getting stats:', error);
            throw error;
        }
    }

    // Zones grouped by implementation phase
    async getZonesByPhase(phase = null) {
        try {
            const where = phase ? `name = '${phase.replace(/'/g, "''")}'` : '1=1';

            const data = await queryFeatureService({
                where,
                outStatistics: JSON.stringify([
                    { statisticType: 'count', onStatisticField: 'objectid', outStatisticFieldName: 'feature_count' },
                    { statisticType: 'sum',   onStatisticField: 'area_sqkm', outStatisticFieldName: 'total_area' }
                ]),
                groupByFieldsForStatistics: 'name,year,new_zoning',
                orderByFields: 'name ASC, new_zoning ASC'
            });

            if (!data.features) return [];

            return data.features.map(f => ({
                phase:                 f.attributes.name,
                year_of_implementation: f.attributes.year,
                zone_name:             f.attributes.new_zoning,
                feature_count:         f.attributes.feature_count,
                total_area:            f.attributes.total_area
            }));

        } catch (error) {
            console.error('Error getting zones by phase:', error);
            throw error;
        }
    }

    // Zones within a radius of a point (replaces missing findNearbyZones)
    async findNearbyZones(lat, lng, radiusMeters = 500, limit = 5) {
        try {
            const data = await queryFeatureService({
                geometry:     JSON.stringify({ x: lng, y: lat }),
                geometryType: 'esriGeometryPoint',
                inSR:         '4326',
                spatialRel:   'esriSpatialRelIntersects',
                distance:     String(radiusMeters),
                units:        'esriSRUnit_Meter',
                outFields:    OUT_FIELDS,
                resultRecordCount: String(limit)
            });

            if (!data.features) return [];

            return data.features.map(f => mapFeature(f.attributes));

        } catch (error) {
            console.error('Error finding nearby zones:', error);
            throw error;
        }
    }
}

module.exports = new ArcGISService();
