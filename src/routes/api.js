// src/routes/api.js
const express = require('express');
const rateLimit = require('express-rate-limit');
const claudeService = require('../services/claudeService');
const spatialService = require('../services/arcgisService');

const router = express.Router();

// Rate limiting middleware
const generalLimiter = rateLimit({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
    max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100,
    message: {
        error: 'Too many requests from this IP, please try again later.',
        retryAfter: '15 minutes'
    }
});

const claudeLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: parseInt(process.env.CLAUDE_RATE_LIMIT_MAX) || 10,
    message: {
        error: 'AI assistant rate limit exceeded. Please wait before asking another question.',
        retryAfter: '1 minute'
    }
});

router.use(generalLimiter);

// Health check endpoint
router.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        service: 'TerraNebular Backend'
    });
});

// Get zoning information for a specific location
router.get('/zoning/location', async (req, res) => {
    try {
        const { lat, lng } = req.query;
        
        if (!lat || !lng) {
            return res.status(400).json({
                error: 'Missing required parameters: lat and lng'
            });
        }
        
        const latitude = parseFloat(lat);
        const longitude = parseFloat(lng);
        
        if (isNaN(latitude) || isNaN(longitude)) {
            return res.status(400).json({
                error: 'Invalid coordinates: lat and lng must be numbers'
            });
        }
        
        if (latitude < -3 || latitude > -1 || longitude < 28 || longitude > 31) {
            return res.status(400).json({
                error: 'Coordinates appear to be outside Rwanda'
            });
        }
        
        const spatialData = await spatialService.getLocationSpatialData(latitude, longitude);
        
        res.json({
            success: true,
            data: spatialData
        });
        
    } catch (error) {
        console.error('Error getting zoning location:', error);
        res.status(500).json({
            error: 'Failed to get zoning information',
            message: error.message
        });
    }
});

// AI assistant endpoint - NOW WITH LANGUAGE SUPPORT
router.post('/ai/question', claudeLimiter, async (req, res) => {
    try {
        // ✅ FIXED: Extract language from request body
        const { question, lat, lng, sessionId, language } = req.body;
        
        // Log the language for debugging
        console.log(`🌍 AI Request - Language: ${language || 'en'}, Question: ${question.substring(0, 50)}...`);
        
        if (!question || !lat || !lng) {
            return res.status(400).json({
                error: 'Missing required fields: question, lat, lng'
            });
        }
        
        const latitude = parseFloat(lat);
        const longitude = parseFloat(lng);
        
        if (isNaN(latitude) || isNaN(longitude)) {
            return res.status(400).json({
                error: 'Invalid coordinates: lat and lng must be numbers'
            });
        }
        
        const spatialData = await spatialService.getLocationSpatialData(latitude, longitude);
        
        // Handle coordinates outside mapped zones with multi-language support
        if (!spatialData.zoneData) {
            // Multi-language fallback messages
            const noDataMessages = {
                en: `No zoning data found for this location.

This coordinate appears to be outside the mapped zoning areas of Kigali.

Please try:
• Selecting a location within Kigali city center
• Using the "Use My Location" button if you're in Kigali

Tel: +250 789 448 873  ·  onestopcenter@kigalicity.gov.rw
Web: kubaka.gov.rw  ·  kigalicity.gov.rw

Location: ${latitude.toFixed(6)}°, ${longitude.toFixed(6)}°`,

                rw: `Nta makuru y'imiyoborere y'ubutaka yabonetse aha hantu.

Aha hantu bigaragara ko hari hanze y'akarere ka Kigali kagenzurwa.

Gerageza:
• Guhitamo ahantu mu mujyi wa Kigali
• Gukoresha buto "Koresha Aho Ndi" niba uri i Kigali

Tel: +250 789 448 873  ·  onestopcenter@kigalicity.gov.rw
Web: kubaka.gov.rw  ·  kigalicity.gov.rw

Location: ${latitude.toFixed(6)}°, ${longitude.toFixed(6)}°`,

                fr: `Aucune donnée de zonage trouvée pour cet emplacement.

Ces coordonnées semblent être en dehors des zones cartographiées de Kigali.

Veuillez essayer:
• Sélectionner un emplacement dans le centre-ville de Kigali
• Utiliser le bouton "Utiliser Ma Position" si vous êtes à Kigali

Tel: +250 789 448 873  ·  onestopcenter@kigalicity.gov.rw
Web: kubaka.gov.rw  ·  kigalicity.gov.rw

Location: ${latitude.toFixed(6)}°, ${longitude.toFixed(6)}°`
            };
            
            const selectedLanguage = language || 'en';
            const message = noDataMessages[selectedLanguage] || noDataMessages.en;
            
            return res.status(200).json({
                success: true,
                data: {
                    response: message,
                    metadata: { 
                        fallback: true, 
                        error: 'location_outside_zones',
                        language: selectedLanguage,
                        coordinates: { lat: latitude, lng: longitude }
                    },
                    cached: false
                }
            });
        }
        
        // ✅ FIXED: Pass language to Claude service
        const aiResult = await claudeService.generateSpatialResponse(
            question, 
            spatialData,
            language || 'en'  // Default to English if not specified
        );
        
        await claudeService.logAnalytics(
            sessionId || 'anonymous',
            question,
            { lat: latitude, lng: longitude },
            spatialData.zoneData.new_zoning,
            aiResult.cached ? 'cached' : 'generated',
            aiResult.response.length,
            req.get('User-Agent'),
            req.ip,
            language || 'en'  // Also log the language used
        );
        
        res.json({
            success: true,
            data: {
                response: aiResult.response,
                zoneName: spatialData.zoneData.new_zoning,
                cached: aiResult.cached,
                language: language || 'en',  // Return language in response
                metadata: aiResult.metadata
            }
        });
        
    } catch (error) {
        console.error('Error processing AI question:', error);
        res.status(500).json({
            error: 'Failed to process your question',
            message: 'AI assistant is temporarily unavailable. Please try again later.'
        });
    }
});

// Get zone boundaries (GeoJSON)
router.get('/zoning/boundaries', async (req, res) => {
    try {
        const { zones, north, south, east, west } = req.query;
        
        let zoneNames = null;
        if (zones) {
            zoneNames = zones.split(',').map(name => name.trim());
        }
        
        let bounds = null;
        if (north && south && east && west) {
            bounds = {
                north: parseFloat(north),
                south: parseFloat(south),
                east: parseFloat(east),
                west: parseFloat(west)
            };
        }
        
        const geoJsonData = await spatialService.getZoneBoundaries(zoneNames, bounds);
        
        res.json({
            success: true,
            data: geoJsonData
        });
        
    } catch (error) {
        console.error('Error getting zone boundaries:', error);
        res.status(500).json({
            error: 'Failed to get zone boundaries',
            message: error.message
        });
    }
});

// Search zones
router.get('/zoning/search', async (req, res) => {
    try {
        const { q } = req.query;
        
        if (!q || q.trim().length < 2) {
            return res.status(400).json({
                error: 'Search query must be at least 2 characters long'
            });
        }
        
        const results = await spatialService.searchZones(q.trim());
        
        res.json({
            success: true,
            data: results
        });
        
    } catch (error) {
        console.error('Error searching zones:', error);
        res.status(500).json({
            error: 'Search failed',
            message: error.message
        });
    }
});

// Get all zones summary
router.get('/zoning/zones', async (req, res) => {
    try {
        const zones = await spatialService.getAllZones();
        
        res.json({
            success: true,
            data: zones
        });
        
    } catch (error) {
        console.error('Error getting zones:', error);
        res.status(500).json({
            error: 'Failed to get zones',
            message: error.message
        });
    }
});

// Get database statistics
router.get('/stats', async (req, res) => {
    try {
        const stats = await spatialService.getDatabaseStats();
        
        res.json({
            success: true,
            data: stats
        });
        
    } catch (error) {
        console.error('Error getting stats:', error);
        res.status(500).json({
            error: 'Failed to get statistics',
            message: error.message
        });
    }
});

// Nearby zones endpoint
router.get('/zoning/nearby', async (req, res) => {
    try {
        const { lat, lng, radius = 1000, limit = 5 } = req.query;
        
        if (!lat || !lng) {
            return res.status(400).json({
                error: 'Missing required parameters: lat and lng'
            });
        }
        
        const latitude = parseFloat(lat);
        const longitude = parseFloat(lng);
        const radiusMeters = parseFloat(radius);
        const limitNum = parseInt(limit);
        
        if (isNaN(latitude) || isNaN(longitude)) {
            return res.status(400).json({
                error: 'Invalid coordinates'
            });
        }
        
        const nearbyZones = await spatialService.findNearbyZones(
            latitude,
            longitude,
            radiusMeters,
            limitNum
        );
        
        res.json({
            success: true,
            data: nearbyZones
        });
        
    } catch (error) {
        console.error('Error getting nearby zones:', error);
        res.status(500).json({
            error: 'Failed to get nearby zones',
            message: error.message
        });
    }
});

module.exports = router;
