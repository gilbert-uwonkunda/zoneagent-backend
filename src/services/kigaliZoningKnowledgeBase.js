// =============================================================================
// KIGALI MASTER PLAN ZONING REGULATIONS - AUTHORITATIVE KNOWLEDGE BASE
// Source: Kigali City Zoning Regulations (Effective August 28, 2020)
// Document: 2019 Kigali Master Plan Review - Zoning Regulations FINAL
// =============================================================================

const ZONING_KNOWLEDGE_BASE = {
    metadata: {
        documentTitle: "Kigali City Zoning Regulations",
        effectiveDate: "August 28, 2020",
        authority: "City of Kigali City Council",
        legalBasis: "Rwanda Urban Planning Code",
        source: "Consultancy Services for 2013 Kigali Master Plan Update (Project Ref: C-RW-000011)"
    },

    // =============================================================================
    // RESIDENTIAL ZONES
    // =============================================================================
    
    "R1": {
        fullName: "Low Density Residential Zone",
        code: "R1",
        article: "Article 6.1",
        table: "Table 6.1",
        description: "Intended for villa and bungalow typology and complementary public facilities. R1 Zones are limited in the City of Kigali to existing consolidated areas with the objective of limiting low-density urban development and encouraging compact development.",
        
        uses: {
            permitted: [
                "Single family houses",
                "Home Occupation"
            ],
            conditional: [
                "Uses as per R1A regulations",
                "Apartments exceeding G+2",
                "Semi-Detached",
                "Multifamily Houses",
                "Restaurants, Guest houses, B&B, Hotels (including ancillary commercial uses)",
                "Public facilities when suggested by Public Facilities Overlay (Section 7.1)",
                "Commercial Retail Facilities when allowed by O-C2 Overlay (Section 6.2.2)",
                "Accessory Residential Units"
            ],
            prohibited: [
                "Industrial uses",
                "Major infrastructure"
            ],
            ancillary: [
                "Car parking garage",
                "Store and Service rooms",
                "Guard House"
            ]
        },

        development: {
            lotSize: {
                max: "500 m²",
                note: "As per Urban Planning Code (UPC). Plots less than 300 m² shall follow R1A regulations. Existing developments on plots larger than 500 m² can retain their use."
            },
            coverage: {
                maxBuilding: "40%",
                minLandscaping: "20%"
            },
            far: {
                max: 0.5
            },
            density: {
                singleUse: "10-15 Du/Ha",
                mixedUse: "7-10 Du/Ha (when building is partially occupied by other uses as per O-C2 overlay)"
            }
        },

        building: {
            maxFloors: "G+1+P (Penthouse)",
            ancillaryMaxFloors: "G",
            roof: {
                maxPitch: "30%",
                restrictions: "No reflective metal roofing allowed. Roof colours should blend with surrounding landscape."
            },
            form: ["Detached", "Semi Detached"]
        },

        developmentStrategy: [
            "Individual plot development",
            "Land subdivision",
            "Estate (No gated estates allowed on developments of more than 1 ha)"
        ],

        signage: {
            permitted: "One sign located on the fencing wall along the front setback",
            maxSize: "35cm height x 35cm width",
            restrictions: "Protrusion of signage must be contained within plot boundary"
        }
    },

    "R1A": {
        fullName: "Low Density Residential Densification Zone",
        code: "R1A",
        article: "Article 6.1",
        table: "Table 6.2",
        description: "A residential zone for semidetached houses, single family townhouses, multifamily houses, and low-rise developments. Intended to offer low and medium-rise housing and complementary commercial and public facilities. Lot sizes are smaller than R1 to promote more efficient use of lands in prime areas.",

        uses: {
            permitted: [
                "Single family houses (all types)",
                "Semi-detached houses",
                "Multifamily Houses",
                "Townhouses",
                "Row houses",
                "Home Occupation",
                "Accessory Residential Units"
            ],
            conditional: [
                "Restaurants, Hotels, Guest houses, B&B",
                "Public facilities as per Public Facilities overlay (Section 7.1)",
                "Commercial retail, office facilities when allowed by O-C2 Overlay (Section 6.2.2)"
            ],
            prohibited: [
                "Residential exceeding G+2",
                "Industrial uses",
                "Major infrastructure"
            ],
            ancillary: [
                "Car parking garage",
                "Store and Service rooms",
                "Guard House"
            ]
        },

        development: {
            lotSize: {
                max: "300 m²"
            },
            coverage: {
                maxBuilding: "50%",
                minLandscaping: "20%"
            },
            far: {
                max: 1.0
            },
            density: {
                singleUse: "20-30 Du/Ha",
                mixedUse: "15-20 Du/Ha"
            }
        },

        building: {
            maxFloors: "G+2",
            ancillaryMaxFloors: "G",
            roof: {
                maxPitch: "30%",
                restrictions: "No reflective metal roofing allowed. Roof colours should blend with surrounding landscape."
            },
            form: ["Detached", "Semi Detached", "Attached"]
        },

        developmentStrategy: [
            "Individual plot development",
            "Land Pooling (see Land Assembly Overlay Plan Section 7.3)",
            "Land Subdivision",
            "Estate Development (No gated estates allowed on developments of more than 1 ha)"
        ]
    },

    "R1B": {
        fullName: "Rural Residential Zone",
        code: "R1B",
        article: "Article 6.1",
        table: "Table 6.3",
        description: "A residential zone offering compact developments in rural areas. Intended to offer low-rise, medium-density housing as part of the farming community. Purpose is to create sustainable and compact residential settlement in rural areas, limiting encroachment towards fertile agricultural land.",

        uses: {
            permitted: [
                "Single family Houses",
                "Row housing",
                "Multifamily residential (4 in 1, 8 in 1, etc as per IDP model Villages)",
                "Low-rise apartments",
                "Home Occupation",
                "Accessory Residential Units"
            ],
            conditional: [
                "Restaurants",
                "Hotels/Guest houses",
                "Public facilities when allowed by Public Facilities Overlay",
                "Commercial retail when allowed by O-C2 Overlay",
                "Micro Enterprise"
            ],
            prohibited: [
                "Industrial uses",
                "Major infrastructure"
            ]
        },

        development: {
            lotSize: {
                max: "150 m² (for single family)",
                note: "N/A for Multifamily houses or Apartment development including additional rooms for rental, provided it meets minimum density requirement"
            },
            coverage: {
                maxBuilding: "60%",
                minLandscaping: "20%"
            },
            far: {
                max: 1.0
            },
            density: {
                singleUse: "40-60 Du/Ha",
                mixedUse: "30-50 Du/Ha"
            }
        },

        building: {
            maxFloors: "G+2 (One extra floor may be allowed due to topographic conditions)",
            ancillaryMaxFloors: "G",
            form: ["Attached for rowhouses", "Attached/semi-detached/detached Apartments and Multifamily houses"]
        }
    },

    "R2": {
        fullName: "Medium Density Residential - Improvement Zone",
        code: "R2",
        article: "Article 6.1",
        table: "Table 6.4",
        description: "Established for urban improvement zones (existing informal settlements). Offers opportunities for multi-family rental development or mixed-use options without extensive relocation. Regularization of tenure is expected and prioritized.",

        uses: {
            permitted: [
                "Single family Residential",
                "Rowhouses",
                "Low-rise apartments",
                "Multifamily Houses",
                "Home Occupation",
                "Accessory Residential Units"
            ],
            conditional: [
                "Restaurants",
                "Hotels/Guest houses (including ancillary uses)",
                "Public facilities when allowed by Public Facilities Overlay (Section 7.1)",
                "Commercial retail, office when allowed by O-C2 Overlay (Section 6.2.2)",
                "Micro Enterprise"
            ],
            prohibited: [
                "Industrial uses",
                "Major infrastructure"
            ]
        },

        development: {
            lotSize: {
                max: "100 m² for incremental Single-Family Housing in new Subdivision Plans",
                rowhousing: "150 m² for Row housing",
                multifamily: "N/A (provided minimum density is met)"
            },
            coverage: {
                maxBuilding: "60%",
                minLandscaping: "20%"
            },
            far: {
                max: 1.2
            },
            density: {
                singleUse: "50-90 Du/Ha",
                mixedUse: "40-70 Du/Ha"
            }
        },

        building: {
            maxFloors: "G+2 (One extra floor may be allowed due to topographic conditions, to achieve required density or technical/economic feasibility)",
            ancillaryMaxFloors: "G",
            roof: {
                maxPitch: "30%",
                restrictions: "No reflective metal roofing allowed"
            },
            form: ["Attached for rowhouses", "Attached/semi-detached/detached Apartments and Multifamily houses"]
        }
    },

    "R3": {
        fullName: "Medium Density Residential - Expansion Zone",
        code: "R3",
        article: "Article 6.1",
        table: "Table 6.5",
        description: "Established to allow intensification and redevelopment of peri-urban and greenfield areas. Expected to stimulate development of low-cost incremental housing. Purpose is to facilitate housing for low-income segment by providing low-rise, higher-intensity developments in greenfield sites.",

        uses: {
            permitted: [
                "Single family Residential",
                "Rowhouses",
                "Low-rise apartments",
                "Multifamily Houses",
                "Accessory Residential units",
                "Home Occupation"
            ],
            conditional: [
                "Restaurants",
                "Hotels/Guest houses (including ancillary uses)",
                "Public facilities when allowed by Public Facilities Overlay (Section 7.1)",
                "Commercial retail, office when allowed by O-C2 Overlay (Section 6.2.2)",
                "Micro Enterprise"
            ],
            prohibited: [
                "Industrial uses",
                "Major infrastructure",
                "Any development that does not meet affordability criteria suggested in these regulations"
            ]
        },

        development: {
            lotSize: {
                singleFamily: "Max 100 m² for incremental Single-Family Housing in new Subdivision Plans",
                rowhousing: "Max 150 m² for Row housing",
                multifamily: "N/A (provided minimum density is met)"
            },
            coverage: {
                maxBuilding: "60%",
                minLandscaping: "20%"
            },
            far: {
                max: 1.2
            },
            density: {
                singleUse: "50-90 Du/Ha",
                mixedUse: "40-70 Du/Ha"
            }
        },

        building: {
            maxFloors: "G+2 (One extra floor may be allowed due to topographic conditions, to achieve required density or technical/economic feasibility)",
            ancillaryMaxFloors: "G",
            form: ["Attached for rowhouses", "Attached/semi-detached/detached Apartments and Multifamily houses"]
        },

        developmentStrategy: [
            "Individual private development",
            "Land Pooling (see Land Assembly Overlay Plan Section 7.3)",
            "Sites and Services",
            "Larger plots owned by individuals shall be developed following minimum required densities in an optic of incremental development"
        ]
    },

    "R4": {
        fullName: "High Density Residential Zone",
        code: "R4",
        article: "Article 6.1",
        table: "Table 6.6",
        description: "Established to create well planned medium-rise housing and apartment complexes with integrated commercial and public facilities, open spaces. Minimum lot sizes are higher than R3 to facilitate creation of a well-planned high-density residential mixed-use neighbourhood with green character.",

        uses: {
            permitted: [
                "High density residential",
                "Home Occupation",
                "R2 typologies (in case plot size is less than 750 m²)"
            ],
            conditional: [
                "Restaurants",
                "Hotels (including ancillary uses), Guest house, B&B",
                "Public facilities when allowed by Public Facilities Overlay (Section 7.1)",
                "Commercial retail, office, Micro-Enterprise when allowed by O-C2 Overlay (Section 6.2.2)",
                "Micro Enterprise"
            ],
            prohibited: [
                "Industrial uses",
                "Major infrastructure"
            ],
            ancillary: [
                "Car parking garage",
                "Guard house",
                "Store and services rooms"
            ]
        },

        development: {
            lotSize: {
                min: "750 m²",
                note: "Plots smaller than 750 m² can be developed following R2 regulations. Plots larger than 750 m² can be developed following R2 regulations if plot subdivision allows."
            },
            coverage: {
                maxBuilding: "50%",
                minLandscaping: "20%"
            },
            far: {
                max: 1.8
            },
            density: {
                singleUse: "80-120 Du/Ha",
                mixedUse: "60-80 Du/Ha"
            }
        },

        building: {
            maxFloors: "G+4 (apartments) maximum. One extra floor may be allowed due to topographic conditions, to achieve required density or technical/economic feasibility.",
            ancillaryMaxFloors: "G",
            floorToFloorHeight: "4m maximum",
            form: ["Attached Buildings", "Detached Buildings", "R2 typologies for plots less than 750 m²"]
        },

        developmentStrategy: [
            "Individual development (provided all parcels in the block have proper minimum accessibility)",
            "Land Pooling (see Land Assembly Overlay Plan Section 7.3)",
            "Plots smaller than 750 m² can be developed following R2 or R3 regulations",
            "Plots larger than 750 m² shall not be subdivided if result produces plots smaller than 750 m²"
        ]
    },

    // =============================================================================
    // COMMERCIAL & MIXED-USE ZONES
    // =============================================================================

    "C1": {
        fullName: "Mixed Use Zone",
        code: "C1",
        article: "Article 6.2",
        table: "Table 6.7",
        description: "Established to create high flexibility in the mix of uses and ensure continuity in ground level commercial activities as well as provide employment opportunities in other floors such as offices or accommodation. Offers spaces for goods and services as well as living quarters and rental units to create a vibrant mixed-use commercial zone.",

        uses: {
            permitted: [
                "Commercial / Retail",
                "Restaurants and Recreational activities",
                "Office use above the 1st floor",
                "Co-working spaces",
                "Residential",
                "Home Occupation"
            ],
            conditional: [
                "Public Facilities (see Public Facilities overlay)",
                "Transportation Terminals",
                "Hotels",
                "Petrol stations",
                "Garages and Car Repair - Grade E as per RBS and CoK requirements",
                "Car Wash Services"
            ],
            prohibited: [
                "Large scale commercial complex",
                "Industrial Uses",
                "Major Infrastructure Installations"
            ],
            ancillary: [
                "Electrical substation (ESS)",
                "Refuse area"
            ]
        },

        development: {
            lotSize: {
                min: "500 m²",
                exception: "Plots with size below 500 m² in existing consolidated commercial nodes can implement construction, renewal and refurbishment works provided size is not less than 200 m², following OSC approval"
            },
            coverage: {
                maxBuilding: "60%",
                minLandscaping: "10%"
            },
            far: {
                max: 1.6
            }
        },

        building: {
            maxFloors: "G+4 maximum. Additional floors may be authorised by OSC along BRT, Wetland Front, and Green Connectors as per UD Plan.",
            ancillaryMaxFloors: "G",
            form: ["Attached Buildings", "Detached Buildings"]
        },

        circulation: {
            pedestrian: "All buildings facing main commercial road/BRT/wetland front/green corridors shall provide a continuous well designed and universally accessible arcade of no less than 3m. No parking allowed in front setback.",
            publicTransit: "Public Transport Network shall have bus stops spacing at a range of 300-500m"
        },

        signage: {
            buildingIdentification: "One sign permitted on the tower",
            commercial: {
                wall: "15% of Building Face up to 9 m²",
                window: "Transparent, 15% of Building Face up to 2.5 m²",
                awning: "Min 2.5m clearance from ground, 25% of building face up to 2.5 m²"
            },
            prohibited: ["Roof mounted signs", "String lights, flashing, excessively bright lights", "Offsite signage"]
        }
    },

    "O-C2": {
        fullName: "Neighbourhood Commercial Overlay Zone",
        code: "O-C2",
        article: "Article 6.2",
        table: "Table 6.8",
        description: "Neighbourhood Commercial Overlay Zone (O-C2) is a special overlay applicable to existing commercial nodes within residential areas (R1B, R2, R3). It allows small-scale retail commercial activities at ground floor level of residential buildings, subject to OSC approval. It does not create a new zone but modifies the permitted uses of the base zone.",

        uses: {
            permitted: [
                "Small-scale retail shops",
                "Kiosks",
                "Home-based businesses",
                "Local service providers (tailors, barbers, etc.)"
            ],
            conditional: [
                "Restaurants and cafés (limited scale)",
                "Medical clinics (small scale)",
                "Offices (ground floor only)"
            ],
            prohibited: [
                "Industrial uses",
                "Large-scale commercial complexes",
                "Major infrastructure"
            ]
        },

        development: {
            note: "O-C2 is an overlay — base zone (R1B, R2, R3) regulations apply. One additional floor (+1) may be authorised by OSC for commercial ground floor development.",
            far: { max: "As per base zone + 1 additional floor for commercial use" },
            lotSize: { min: "N/A — as per base zone" }
        },

        building: {
            maxFloors: "+1 floor above base zone limit (e.g. R3 allows G+2; with O-C2 commercial ground floor, G+3 possible with OSC approval)",
            setbacks: {
                front: "0.0 m min along commercial street",
                arcade: "2.0 m min arcade/gallery required along commercial frontage"
            },
            notes: "No fencing allowed along commercial streets in O-C2 without CoK-OSC approval."
        }
    },

    "C3": {
        fullName: "City Commercial Zone",
        code: "C3",
        article: "Article 6.2",
        table: "Table 6.9",
        description: "Established for high intensity commercial areas with offices, retail, and potentially mixed residential uses. Targets prime commercial locations in the city center and along major corridors.",

        uses: {
            permitted: [
                "Commercial / Retail",
                "Office",
                "Hotels",
                "Restaurants and Recreational activities",
                "Co-working spaces"
            ],
            conditional: [
                "Residential (above 2nd floor)",
                "Public Facilities",
                "Transportation Terminals",
                "Petrol stations",
                "Garages and Car Repair"
            ],
            prohibited: [
                "Industrial Uses",
                "Major Infrastructure Installations"
            ]
        },

        development: {
            lotSize: {
                min: "1000 m²"
            },
            coverage: {
                maxBuilding: "70%",
                minLandscaping: "10%"
            },
            far: {
                max: 2.4
            }
        },

        building: {
            maxFloors: "G+10 maximum. Additional floors may be authorised along BRT corridors.",
            form: ["Attached Buildings", "Detached Buildings", "Semi-Detached Buildings"]
        }
    },

    // =============================================================================
    // INDUSTRIAL ZONES
    // =============================================================================

    "I1": {
        fullName: "Light Industrial Zone",
        code: "I1",
        article: "Article 6.5",
        table: "Table 6.16",
        description: "For light manufacturing, assembly, warehousing and distribution activities that have minimal environmental impacts.",

        uses: {
            permitted: [
                "Light manufacturing",
                "Assembly operations",
                "Warehousing",
                "Distribution centers",
                "Research and development facilities"
            ],
            conditional: [
                "Office use (accessory)",
                "Retail showrooms (accessory)",
                "Commercial services"
            ],
            prohibited: [
                "Residential uses",
                "Heavy industrial uses",
                "Polluting industries"
            ]
        },

        development: {
            lotSize: {
                min: "1000 m²"
            },
            coverage: {
                maxBuilding: "60%",
                minLandscaping: "15%"
            },
            far: {
                max: 1.2
            }
        },

        building: {
            maxFloors: "G+2",
            form: ["Detached Buildings", "Attached Buildings"]
        }
    },

    "I2": {
        fullName: "General Industrial Zone",
        code: "I2",
        article: "Article 6.5",
        table: "Table 6.17",
        description: "For general manufacturing and industrial activities that may have moderate environmental impacts requiring buffering from residential areas.",

        uses: {
            permitted: [
                "General manufacturing",
                "Processing industries",
                "Heavy warehousing",
                "Industrial services"
            ],
            conditional: [
                "Hazardous materials storage (with proper permits)",
                "Waste processing"
            ],
            prohibited: [
                "Residential uses",
                "Hotels",
                "Schools and hospitals"
            ]
        },

        development: {
            lotSize: {
                min: "2000 m²"
            },
            coverage: {
                maxBuilding: "50%",
                minLandscaping: "20%"
            },
            far: {
                max: 1.0
            }
        },

        building: {
            maxFloors: "G+2"
        }
    },

    "I3": {
        fullName: "Mining and Quarrying Industrial Zone",
        code: "I3",
        article: "Article 6.5",
        table: "Table 6.18",
        description: "For mining, extraction and quarrying activities with strict environmental controls.",

        uses: {
            permitted: [
                "Mining operations",
                "Quarrying",
                "Extraction activities",
                "Related processing"
            ],
            prohibited: [
                "Residential uses",
                "Commercial retail",
                "Public facilities"
            ]
        }
    },

    // =============================================================================
    // NATURE & OPEN SPACE ZONES
    // =============================================================================

    "P1": {
        fullName: "Parks and Open Spaces Zone",
        code: "P1",
        article: "Article 6.6",
        table: "Table 6.19",
        description: "Parks and Open Spaces Zone (P1) provides recreational and leisure facilities in areas with unique features including visual corridors, environmentally sensitive areas, buffer areas, or along significant routes.",

        uses: {
            permitted: [
                "Botanical gardens, arboretums, and conservatories",
                "Outdoor recreational facilities (hiking/bicycle trails, greens, commons, sitting areas, picnic areas)",
                "Park-related public facilities (public toilets, changing rooms)"
            ],
            conditional: [
                "Restaurants, kiosks, art and souvenir shops — not exceeding 0.05 FAR up to 150 m²"
            ],
            prohibited: [
                "All types of industrial uses",
                "All types of residential uses",
                "Commercial uses exceeding 0.05 FAR / 150 m²",
                "Major public facilities",
                "Major infrastructure installations"
            ]
        },

        development: {
            far: { max: "0.05 (up to 150 m²)" },
            coverage: { maxBuilding: "N/A" }
        },

        building: {
            maxFloors: "G+1 (G for ancillary buildings)",
            form: ["N/A — park character must be maintained"]
        }
    },

    "P2": {
        fullName: "Sports and Eco-Tourism Zone",
        code: "P2",
        article: "Article 6.6",
        table: "Table 6.20",
        description: "Sports and Eco-Tourism Zone (P2) provides parks with active recreational uses, sporting facilities, forests with eco-tourism activities. Cultural facilities such as museums, art centres and concert halls are also allowed. All buildings must adhere to Green Building Minimum Compliance Guidelines (Article 8.2).",

        uses: {
            permitted: [
                "Sports complexes",
                "Theme parks",
                "Resort hotels",
                "Camping sites",
                "Golf courses",
                "Recreational clubs",
                "Zoo",
                "Small commercial establishments"
            ],
            conditional: [
                "Residential estates",
                "Complementary commercial uses",
                "Minor public facilities",
                "Supporting infrastructure",
                "Public swimming pools",
                "Nightclubs",
                "Stadiums",
                "Cultural centres",
                "Museums",
                "Concert halls"
            ],
            prohibited: [
                "All types of industrial uses",
                "Major public facilities",
                "Major infrastructure installations"
            ]
        },

        development: {
            far: { max: "Subject to CoK OSC evaluation and approval" },
            coverage: { maxBuilding: "N/A" }
        },

        building: {
            maxFloors: "G+2 (G for ancillary buildings)",
            form: ["N/A"],
            notes: "Architecture and organic materials compatible with natural landscape required. EIA clearance required."
        }
    },

    "P3A": {
        fullName: "National Parks Zone",
        code: "P3-A",
        article: "Article 6.6",
        table: "Table 6.21",
        description: "National Parks Zone (P3-A) protects national parks within the city and their biodiversity for sustainability, health, and well-being. These parks bring economic benefits through recreational, educational, and eco-tourism activities.",

        uses: {
            permitted: [
                "Outdoor recreational facilities (sitting areas, picnic areas)",
                "Hiking trails for environmental education and tourism",
                "Park-related public facilities (public toilets, changing rooms)"
            ],
            conditional: [
                "Resorts / Hotels",
                "Campsites",
                "Restaurants / Kiosks",
                "Small souvenir and grocery shops",
                "Accommodation for workers"
            ],
            prohibited: [
                "All types of industrial uses",
                "Major residential uses",
                "Major commercial uses",
                "Major infrastructure installations"
            ]
        },

        development: {
            far: { max: "Per implementing authority standards" },
            coverage: { maxBuilding: "N/A" }
        },

        building: {
            maxFloors: "N/A — per implementing authority",
            form: ["Organic materials compatible with natural landscape required"]
        }
    },

    "P3B": {
        fullName: "Forest Zone",
        code: "P3-B",
        article: "Article 6.6",
        table: "Table 6.22",
        description: "Forest Zone (P3-B) ensures sustainable land and resource management of forests within the city. Intent is to conserve biodiversity and protect ecological integrity. Forest Zone regulations supersede other regulations where in conflict. Requires Ministry of Environment approval.",

        uses: {
            permitted: [
                "Existing forest retention",
                "Forestry / Eco-forestry"
            ],
            conditional: [
                "Infrastructure",
                "Botanical gardens, arboretums, and conservatories",
                "Hiking trails and bird watching platforms for environmental education and tourism",
                "Outdoor recreational facilities (bicycle trails, sitting areas, picnic areas)",
                "Camping sites",
                "Park-related public facilities (public toilets, changing rooms)",
                "Restaurants",
                "Kiosks",
                "Construction material production"
            ],
            prohibited: [
                "All types of industrial uses",
                "All types of residential uses",
                "All types of commercial uses",
                "All types of major public facilities",
                "Major infrastructure installations"
            ]
        },

        development: {
            far: { max: "0.05 (up to 250 m²) — any exception requires CoK OSC and REMA approval" },
            coverage: { maxBuilding: "N/A" }
        },

        building: {
            maxFloors: "N/A",
            notes: "Ministry of Environment approval required for all developments"
        }
    },

    "P3C": {
        fullName: "Steep Slopes Zone (>30%)",
        code: "P3-C",
        article: "Article 6.6",
        table: "Table 6.23",
        description: "Steep Slopes Zone (P3-C) protects slopes above 30% (greenfield) or 50% (brownfield) from unsustainable encroachment. Unregulated development on steep slopes creates natural hazards and diminishes natural features.",

        uses: {
            permitted: [
                "Forests",
                "Agro-forestry",
                "Bee keeping",
                "Silviculture"
            ],
            conditional: [
                "Uses as per the Steep Slope (30-50%) Overlay in Section 7.8"
            ],
            prohibited: [
                "All types of development except those conditionally allowed by Slope Overlay"
            ]
        },

        building: {
            maxFloors: "N/A",
            notes: "Applies to slopes >30% (greenfield) or >50% (brownfield). Refer to Steep Slope Overlay Section 7.8."
        }
    },

    "P3D": {
        fullName: "Natural Conservation Zone",
        code: "P3-D",
        article: "Article 6.6",
        table: "Table 6.24",
        description: "Natural Conservation Zone (P3-D) preserves identified undeveloped land and open spaces in their natural state, including protected cultural areas and wildlife habitats. Promotes peace, health, biodiversity, and protects against flooding.",

        uses: {
            permitted: [
                "Conservation use",
                "Recreational trails"
            ],
            conditional: [
                "Accessory structures for conservation use, servicing, trail, viewing platform"
            ],
            prohibited: [
                "All types of industrial uses",
                "All types of residential uses",
                "All types of commercial uses",
                "All types of major public facilities",
                "Major infrastructure installations"
            ]
        },

        development: {
            far: { max: "N/A" },
            coverage: { maxBuilding: "N/A" }
        }
    },

    // =============================================================================
    // AGRICULTURE ZONE
    // =============================================================================

    "A1": {
        fullName: "Agricultural Zone",
        code: "A",
        article: "Article 6.6",
        table: "Table 6.25",
        description: "Agricultural Zone (A) protects the viability of agriculture in the City. Prevents farmland from being converted to non-farm uses, prevents fragmentation of farms, and protects agricultural producers from non-farm intrusion. Rural development allowed only after land pooling processes.",

        uses: {
            permitted: [
                "Crop farming",
                "Agro-forestry",
                "Livestock farming",
                "Green houses",
                "Bee keeping",
                "Fish farming"
            ],
            conditional: [
                "Supporting agricultural uses",
                "Temporary farm store",
                "Infrastructure",
                "Rural villages (for plots larger than 5 ha after land assembly)",
                "Single family houses (on plots larger than 1 ha, linked to farming activities)",
                "Small scale agro-processing facilities (on plots not less than 0.5 ha)"
            ],
            prohibited: [
                "All types of industrial uses not linked to agro-processing",
                "All types of residential uses not linked to farming",
                "All types of commercial uses not linked to temporary farm store",
                "All types of public facilities"
            ],
            ancillary: [
                "Storage barns",
                "Parking",
                "Store for agricultural equipment",
                "Cattle sheds"
            ]
        },

        development: {
            far: {
                max: "Single family houses: 0.01 (up to 150 m²) for plots above 1 ha. Agro-processing: 0.02 (up to 200 m²) for plots above 0.5 ha."
            },
            coverage: { maxBuilding: "N/A" }
        },

        building: {
            maxFloors: "G (Ground floor only)",
            form: ["N/A"]
        }
    },

    // A is the official PDF zone code; A1 kept as legacy key above
    "A": {
        fullName: "Agricultural Zone",
        code: "A",
        article: "Article 6",
        table: "Table 6.25",
        description: "Agricultural Zone (A) protects the viability of agriculture in Kigali. Prevents farmland from being converted to non-farm uses, prevents fragmentation of farms, and protects agricultural producers from non-farm intrusion. Rural development is only allowed after land pooling processes.",

        uses: {
            permitted: [
                "Crop farming",
                "Agro-forestry",
                "Livestock farming",
                "Green houses",
                "Bee keeping",
                "Fish farming"
            ],
            conditional: [
                "Supporting agricultural uses",
                "Temporary farm store",
                "Infrastructure",
                "Rural villages (for plots larger than 5 ha after land assembly)",
                "Single family houses (on plots larger than 1 ha, linked to farming activities)",
                "Small scale agro-processing facilities (on plots not less than 0.5 ha)"
            ],
            prohibited: [
                "All types of industrial uses not linked to agro-processing",
                "All types of residential uses not linked to farming",
                "All types of commercial uses not linked to temporary farm store",
                "All types of public facilities"
            ],
            ancillary: [
                "Storage barns",
                "Parking",
                "Store for agricultural equipment",
                "Cattle sheds"
            ]
        },

        development: {
            far: {
                max: "0.01 for single family houses (up to 150 m²) on plots above 1 ha; 0.02 for agro-processing (up to 200 m²) on plots above 0.5 ha"
            },
            coverage: { maxBuilding: "N/A" }
        },

        building: {
            maxFloors: "G (Ground floor only)",
            setbacks: { front: "1.0 m min", side: "1.0 m min", rear: "1.0 m min" },
            form: ["Detached farm structures only"]
        }
    },

    // =============================================================================
    // PUBLIC ADMINISTRATIVE & PUBLIC FACILITIES ZONES
    // =============================================================================

    "PA": {
        fullName: "Public Administrative and Services Zone",
        code: "PA",
        article: "Article 6.3",
        table: "Table 6.10",
        description: "Public Administrative and Services Zone (PA) is designated only for lands owned by governmental agencies for public use or benefit. When a PA zone is sold to private individuals, it may be developed following zoning regulations of neighbouring areas without applying for zoning variation.",

        uses: {
            permitted: [
                "Government offices",
                "Correctional and rehabilitation facilities",
                "Defence and security uses",
                "Fire station",
                "Police station",
                "Transport interchange",
                "Other public uses"
            ],
            conditional: [
                "Micro-enterprise",
                "Commercial and retail use"
            ],
            prohibited: [
                "Major industrial uses and warehouses",
                "Major commercial uses",
                "Public utility maintenance facilities with outdoor storage"
            ],
            ancillary: [
                "Electrical substation (ESS)",
                "Refuse area",
                "Storage"
            ]
        },

        development: {
            coverage: { minLandscaping: "20% minimum" },
            far: { max: "N/A — massing, height, and setbacks should be consistent with the neighbourhood" }
        },

        building: {
            maxFloors: "N/A — consistent with neighbourhood character",
            form: ["Free standing", "Attached"]
        },

        signage: {
            permitted: "One building identification sign on frontage wall. Free-standing signage max 1.5m height.",
            prohibited: "Roof-mounted signs, string lights, flashing or excessively bright lights, off-site signage",
            maxSize: "1.5m height (free-standing)"
        }
    },

    "PF1": {
        fullName: "Public Facilities Zone — Education and Research",
        code: "PF1",
        article: "Article 6.4",
        table: "Table 6.11",
        description: "Public Facilities Zone for all types of educational institutes and research facilities. Design standards follow Ministry of Education guidelines. Massing, height, and setbacks should be consistent with the neighbourhood.",

        uses: {
            permitted: [
                "All types of educational institutes",
                "Research facilities"
            ],
            conditional: [
                "Canteens",
                "Small commercial and retail use",
                "Health centres and pharmacy",
                "Accommodations for teachers and workers",
                "Hostels / Dormitories / Residences"
            ],
            prohibited: [
                "Industrial uses and warehouses",
                "Major commercial uses",
                "Public utility maintenance facilities with outdoor storage",
                "Cemeteries / crematoriums"
            ]
        },

        development: {
            coverage: { minLandscaping: "20% minimum" },
            far: { max: "Per Ministry of Education design standards" }
        },

        building: {
            maxFloors: "N/A — per Ministry of Education guidelines",
            form: ["Free standing", "Attached"]
        },

        signage: {
            permitted: "One building identification sign on frontage wall. Free-standing signage max 1.5m height.",
            prohibited: "Roof-mounted signs, flashing lights, off-site signage",
            maxSize: "1.5m height (free-standing)"
        }
    },

    "PF2": {
        fullName: "Public Facilities Zone — Health",
        code: "PF2",
        article: "Article 6.4",
        table: "Table 6.12",
        description: "Public Facilities Zone for all types of health facilities including hospitals, clinics, and pharmacies. Design standards follow Ministry of Health guidelines.",

        uses: {
            permitted: [
                "All types of health facilities",
                "Pharmacy"
            ],
            conditional: [
                "Restaurants",
                "Small commercial and retail use",
                "Accommodations for health workers"
            ],
            prohibited: [
                "Industrial uses and warehouses",
                "Major commercial uses",
                "Public utility maintenance facilities with outdoor storage",
                "Cemeteries / crematoriums"
            ]
        },

        development: {
            coverage: { minLandscaping: "20% minimum" },
            far: { max: "Per Ministry of Health design standards" }
        },

        building: {
            maxFloors: "N/A — per Ministry of Health guidelines",
            form: ["Free standing", "Attached"]
        },

        signage: {
            permitted: "One building identification sign on frontage wall. Free-standing signage max 1.5m height.",
            prohibited: "Roof-mounted signs, flashing lights, off-site signage",
            maxSize: "1.5m height (free-standing)"
        }
    },

    "PF3": {
        fullName: "Public Facilities Zone — Religious",
        code: "PF3",
        article: "Article 6.4",
        table: "Table 6.13",
        description: "Public Facilities Zone for all types of religious facilities including churches, mosques, and temples. Design standards follow Rwanda Governance Board guidelines.",

        uses: {
            permitted: [
                "All types of religious facilities"
            ],
            conditional: [
                "Accommodations for priests",
                "Accommodations for visitors and workers",
                "Public facilities such as washrooms / changing rooms",
                "Small commercial and retail use",
                "Dining halls"
            ],
            prohibited: [
                "Industrial uses and warehouses",
                "Major commercial uses",
                "Public utility maintenance facilities with outdoor storage",
                "Cemeteries / crematoriums"
            ]
        },

        development: {
            coverage: { minLandscaping: "20% minimum" },
            far: { max: "Per Rwanda Governance Board design standards" }
        },

        building: {
            maxFloors: "N/A — per Rwanda Governance Board guidelines",
            form: ["Free standing", "Attached"]
        },

        signage: {
            permitted: "Free-standing signage max 1.5m height within front setback.",
            prohibited: "Roof-mounted signs, flashing lights, off-site signage",
            maxSize: "1.5m height (free-standing)"
        }
    },

    "PF4": {
        fullName: "Public Facilities Zone — Cultural / Memorial",
        code: "PF4",
        article: "Article 6.4",
        table: "Table 6.14",
        description: "Public Facilities Zone for cultural centres, neighbourhood centres, museums, community halls, libraries, and memorial sites. Massing, height, and setbacks should be consistent with the neighbourhood.",

        uses: {
            permitted: [
                "Cultural centres and sites",
                "Neighbourhood centres",
                "Neighbourhood parks",
                "Museums",
                "Community halls",
                "Libraries",
                "Memorial sites"
            ],
            conditional: [
                "Accommodations",
                "Public facilities such as washrooms",
                "Small commercial and retail use",
                "Function halls"
            ],
            prohibited: [
                "Industrial uses and warehouses",
                "Major commercial uses",
                "Public utility maintenance facilities with outdoor storage",
                "Cemeteries / crematoriums"
            ]
        },

        development: {
            coverage: { minLandscaping: "N/A" },
            far: { max: "Per implementing authority standards" }
        },

        building: {
            maxFloors: "N/A — consistent with neighbourhood",
            form: ["Free standing", "Attached"]
        },

        signage: {
            permitted: "One building identification sign on frontage wall. Free-standing signage max 1.5m height.",
            prohibited: "Roof-mounted signs, flashing lights, off-site signage",
            maxSize: "1.5m height (free-standing)"
        }
    },

    "PF5": {
        fullName: "Public Facilities Zone — Cemetery / Crematoria",
        code: "PF5",
        article: "Article 6.4",
        table: "Table 6.15",
        description: "Public Facilities Zone for cemetery and crematoria sites. If near wetland, an EIA must be conducted and a buffer distance of 200-300m maintained with uses limited to open spaces and parks.",

        uses: {
            permitted: [
                "Cemetery",
                "Crematoria",
                "Other facilities such as pavilions and service rooms"
            ],
            conditional: [
                "Accommodations for caretakers",
                "Public facilities such as washrooms",
                "Prayer hall in crematoria"
            ],
            prohibited: [
                "All industrial uses",
                "All commercial uses",
                "All residential uses",
                "Public utility maintenance facilities with outdoor storage"
            ]
        },

        development: {
            buffer: "200-300m buffer if near wetland. Buffer uses limited to open spaces and parks.",
            far: { max: "N/A" }
        },

        building: {
            maxFloors: "N/A",
            form: ["N/A"]
        }
    },

    // =============================================================================
    // UTILITY & TRANSPORT ZONES
    // =============================================================================

    "T": {
        fullName: "Transport Zone",
        code: "T",
        article: "Article 6.6",
        table: "Table 6.29",
        description: "Transport Zone (T) identifies and locates major transport-related areas including BRT, airports, railway and depots, transport terminus, and cable car stations. All developments reviewed jointly by CoK OSC and Department of Infrastructure. A separate Review Panel (MININFRA and RTDA) oversees and approves transport infrastructure.",

        uses: {
            permitted: [
                "All transport infrastructure",
                "BRT stations and terminals",
                "Parking areas",
                "Holding depots"
            ],
            conditional: [
                "Motor repair garage",
                "Commercial uses if developed in conjunction with transport terminals and interchanges",
                "Service station",
                "Commercial and office spaces",
                "Hotels and restaurants",
                "Workers' accommodation"
            ],
            prohibited: [
                "Major industrial uses",
                "Major residential uses"
            ]
        },

        development: {
            far: { max: "N/A — per government agency safety requirements" },
            coverage: { maxBuilding: "N/A" }
        },

        building: {
            maxFloors: "N/A — per transport authority standards",
            notes: "All proposals require Review Panel approval (MININFRA and RTDA)"
        }
    },

    "U": {
        fullName: "Utility Zone",
        code: "U",
        article: "Article 6.6",
        table: "Table 6.30",
        description: "Utility Zone (U) includes major utility infrastructure sites such as electrical substations, water reservoirs, water and sanitation treatment plants, and data centres. Developments are by government agencies already subject to specific safety requirements.",

        uses: {
            permitted: [
                "Electrical substations",
                "Water reservoirs",
                "Water treatment plants",
                "Sanitation treatment plants",
                "Data centres",
                "All major public utility infrastructure"
            ],
            conditional: [
                "Ancillary commercial uses in conjunction with utility operations"
            ],
            prohibited: [
                "Residential uses",
                "Major commercial uses",
                "Industrial uses unrelated to utility operations"
            ]
        },

        development: {
            far: { max: "N/A — per government agency safety requirements" },
            coverage: { maxBuilding: "N/A" }
        },

        building: {
            maxFloors: "N/A — per utility authority standards",
            notes: "No major zoning regulations stipulated — government agencies subject to specific safety requirements including setbacks"
        }
    },

    // =============================================================================
    // WETLAND ZONES (Article 6.6, Tables 6.26-6.27)
    // Regulated by 6 parameters: wise use, structures, fencing, road access, stormwater, waste
    // Land-use matrix: C = Conditional (ESIA required), P = Prohibited
    // =============================================================================

    "W1": {
        fullName: "Wetland Buffer Zone",
        code: "W1",
        article: "Article 6.6",
        table: "Table 6.26",
        description: "Buffer Zone (W1) establishes a minimum 20m distance between developed areas and protected wetland sites. All areas within the official wetland boundary are Public Domain. Buffer zones can be on private property — wetland buffer regulations supersede any other zoning regulations on that portion.",

        uses: {
            permitted: [
                "Buffer zone passive use",
                "Public toilets (ancillary)",
                "Pavilions (ancillary)"
            ],
            conditional: [
                "Roads and utility lines crossing and running parallel to wetlands",
                "Farming or horticulture (ESIA required)",
                "Fish farming (ESIA required)",
                "Grazing (ESIA required)",
                "Plantation or nursery (ESIA required)",
                "Park, garden or playground (ESIA required)",
                "Amphitheatre, boardwalk, botanical garden (ESIA required)",
                "Ecotourism, cycling/hiking trails (ESIA required)",
                "Restaurants (ESIA required)"
            ],
            prohibited: [
                "Commercial activity",
                "Permanent structures (only temporary structures permitted)",
                "Residential uses",
                "Industrial uses",
                "Warehouses",
                "Offices, retail shops, markets",
                "Hotels (except with ESIA for W3)",
                "Petrol / gas stations, garages"
            ]
        },

        development: {
            structures: "Only temporary structures. Only organic building materials (wood, bamboo). Minimum 6m spacing between structures.",
            fencing: "Fenceless. If inevitable, ≥2/3 of fence height must remain visually accessible.",
            buffer: "20m minimum from wetland boundary"
        },

        building: {
            maxFloors: "Temporary only",
            notes: "Permeable materials required for paved access roads/walkways. Superstructures over wetland must use organic materials."
        }
    },

    "W2": {
        fullName: "Wetland Rehabilitation Zone",
        code: "W2",
        article: "Article 6.6",
        table: "Table 6.26",
        description: "Rehabilitation Zone (W2) covers areas showing signs of a previously diverse wetland ecosystem now under different uses. Planning intent is to re-establish the wetland ecosystem. Agriculture use and clay extraction must be phased out. Existing structures must be removed.",

        uses: {
            permitted: [
                "Wetland rehabilitation and restoration activities",
                "Pump sheds, wells, storage of agricultural produce (ancillary, transitional)"
            ],
            conditional: [
                "Plantation or nursery (ESIA required)",
                "Roads and utility lines (with no obstruction to natural drainage flow)",
                "R&D centre / biotechnology research institution (ESIA required)",
                "Park, garden or playground (ESIA required)",
                "Amphitheatre, boardwalk, botanical garden, ecotourism (ESIA required)",
                "Cycling / hiking trails (ESIA required)"
            ],
            prohibited: [
                "All residential uses",
                "All commercial uses",
                "All industrial uses",
                "Fish farming, grazing, livestock farming",
                "Clay, peat and sand extraction",
                "Mining",
                "Groundwater extraction",
                "Garage, petrol / gas station",
                "Transport terminal, railway station",
                "Hotels, schools, colleges",
                "Government offices, hospitals",
                "All retail, market, shopping uses",
                "Cemeteries, slaughterhouses"
            ]
        },

        development: {
            structures: "Any structure must use organic building materials. Existing structures including foundations must be removed.",
            fencing: "Fenceless.",
            stormwater: "Prohibit direct discharge of stormwater from industrial/agricultural areas. Fill drainage channels to wetland surface level. Construct berms to redistribute water.",
            waste: "Prohibit direct wastewater discharge. Sewage Treatment Plants must include phosphorus removal. No solid waste disposal in wetland."
        },

        building: {
            maxFloors: "N/A — organic materials only",
            notes: "Priority is wetland ecosystem re-establishment. Agriculture and clay extraction must be phased out."
        }
    },

    "W3": {
        fullName: "Wetland Sustainable Exploitation Zone",
        code: "W3",
        article: "Article 6.6",
        table: "Table 6.26",
        description: "Sustainable Exploitation Zone (W3) covers wetlands to be rehabilitated while retaining existing economic, utilitarian, and recreational value. Agriculture may continue subject to EIA compliance. Existing structures must be removed.",

        uses: {
            permitted: [
                "Agriculture (subject to EIA compliance)",
                "Pavilions, security post, watch towers (ancillary)"
            ],
            conditional: [
                "All uses that are conditional (ESIA required) in W1, including roads, infrastructure",
                "Farming, fish farming, grazing, livestock farming (ESIA required)",
                "Hotels, schools (ESIA required)",
                "Civic centre, art gallery, community hall, library (ESIA required)",
                "Indoor games, outdoor sports, gymnasium, swimming pool (ESIA required)",
                "Sewage treatment plant and network (ESIA required)",
                "Entertainment / amusement park (ESIA required)"
            ],
            prohibited: [
                "All residential uses",
                "All commercial uses (retail, offices, markets, supermarkets)",
                "All industrial uses and warehouses",
                "Garage, petrol / gas stations",
                "Government offices, hospitals, colleges",
                "Mining, groundwater extraction",
                "Cemeteries, slaughterhouses, landfills",
                "Oil storage or refinery"
            ]
        },

        development: {
            structures: "Any structure must use organic building materials. Existing structures including foundations must be removed.",
            fencing: "Fenceless. If inevitable, 100% of fence height must remain visually accessible and must not obstruct stormwater drainage.",
            stormwater: "Fill drainage channels to wetland surface level. Construct berms to redistribute water and prevent erosion."
        },

        building: {
            maxFloors: "N/A — organic materials only",
            notes: "Agriculture may continue provided it complies with EIA provisions."
        }
    },

    "W4": {
        fullName: "Wetland Conservation Zone",
        code: "W4",
        article: "Article 6.6",
        table: "Table 6.26",
        description: "Conservation Zone (W4) protects wetlands supporting significant areas of natural vegetation where water is permanently present. These represent valuable ecosystems to be fully conserved. Existing structures including foundations must be removed.",

        uses: {
            permitted: [
                "Full conservation",
                "Pavilions, security post, watch towers (ancillary)"
            ],
            conditional: [
                "Roads and utility lines running parallel to wetlands",
                "Plantation or nursery (ESIA required)",
                "Afforestation (ESIA required)",
                "Forest (ESIA required)",
                "Amphitheatre, boardwalk, botanical garden, biodiversity park (ESIA required)",
                "Waterfront promenade, picnic/camping site (ESIA required)",
                "Ecotourism, cycling/hiking trails (ESIA required)",
                "Water treatment / distribution / filtration (ESIA required)",
                "Dams, dykes, electric substation (ESIA required)"
            ],
            prohibited: [
                "All residential, commercial, industrial uses",
                "All farming (including fish farming, grazing, livestock)",
                "Mining, clay/peat/sand extraction",
                "Groundwater extraction",
                "Garage, petrol / gas stations",
                "All transport terminals, airports, railway stations",
                "Government offices, hospitals, schools, hotels",
                "All retail, market, office uses",
                "Cemeteries, slaughterhouses, landfills",
                "Outdoor sports, swimming pools"
            ]
        },

        development: {
            structures: "Any structure must use organic building materials. Existing structures including foundations must be removed.",
            fencing: "Fence without affecting natural stormwater drainage flow.",
            stormwater: "Prohibit direct discharge from industrial/agricultural areas. Mandatory waste and effluent treatment. Prohibit use of pesticides in surrounding areas.",
            waste: "Prohibit direct wastewater discharge. Relocate existing sewage treatment plants outside wetland. No solid waste disposal."
        },

        building: {
            maxFloors: "N/A — strict conservation",
            notes: "Most restrictive wetland zone. All existing structures must be fully removed."
        }
    },

    "W5": {
        fullName: "Wetland Recreational Zone",
        code: "W5",
        article: "Article 6.6",
        table: "Table 6.26",
        description: "Recreational Zone (W5) identifies wetlands with potential to be developed as recreational spaces due to proximity to strategic areas in the Kigali Master Plan. Focus is on public open spaces, passive and active recreational uses.",

        uses: {
            permitted: [
                "Passive and active recreation",
                "Pavilions, security post, watch towers (ancillary)"
            ],
            conditional: [
                "Roads and utility lines (ESIA required where obstruction possible)",
                "Farming and horticulture, plantation and nursery (ESIA required)",
                "Afforestation, forest (ESIA required)",
                "Transport terminal (ESIA required)",
                "Park, garden, playground, amphitheatre (ESIA required)",
                "Boardwalk, botanical garden, ecotourism, cycling/hiking trails (ESIA required)",
                "Retail shop, restaurant (ESIA required)",
                "Hotel, school (ESIA required)",
                "Civic centre, art gallery, community hall, library (ESIA required)",
                "Golf course, outdoor sports, swimming pool (ESIA required)",
                "Sewage and water treatment (ESIA required)"
            ],
            prohibited: [
                "All residential uses",
                "All commercial uses (offices, supermarkets, markets)",
                "All industrial uses and warehouses",
                "Garage, petrol / gas stations",
                "Colleges, universities, government offices, hospitals",
                "Cemeteries, slaughterhouses, landfills",
                "Oil storage or refinery"
            ]
        },

        development: {
            structures: "Any non-habitable structure constructed with organic building materials is permissible.",
            fencing: "Fence without affecting natural stormwater drainage flow permissible.",
            stormwater: "Bio-swales are permissible.",
            waste: "In-situ treatment of organic waste permissible."
        },

        building: {
            maxFloors: "N/A — non-habitable structures only",
            notes: "Focus on public open spaces and recreational uses. Non-habitable structures only."
        }
    },

    "WB": {
        fullName: "Waterbody Zone",
        code: "WB",
        article: "Article 6.6",
        table: "Table 6.28",
        description: "Waterbody Zone (WB) conserves and protects rivers, lakes, and streams and sustainably manages them. Intent is to protect ecological balance, prevent environmental destruction and water pollution, and preserve the scenic beauty of the City.",

        uses: {
            permitted: [
                "Rivers, lakes, streams (natural water bodies)"
            ],
            conditional: [
                "Fish farming",
                "Boating / Kayaking",
                "Rafting"
            ],
            prohibited: [
                "All types of industrial waste discharge",
                "All types of residential waste discharge",
                "All types of commercial waste discharge",
                "Encroachment beyond buffer zones"
            ]
        },

        development: {
            buffer: "Rivers: 20m buffer. Lakes: 50m buffer. Streams: 10m buffer.",
            far: { max: "N/A" }
        },

        building: {
            maxFloors: "N/A — water body only",
            notes: "Commercial activities in WB zone require approval by review panel."
        }
    },

    // =============================================================================
    // BUFFER ZONE
    // =============================================================================

    "B": {
        fullName: "Buffer Zone",
        code: "B",
        article: "Article 6",
        table: "Table 6.31",
        description: "The Buffer Zone (B) transposes all overlay buffer areas into the Zoning Plan. It does not contain explicit regulations but references relevant overlay layers (Article 7). It does NOT affect the main use and development quantum of the parcel — the underlying zone regulations still apply. The B zone simply provides limitations on specific uses within the buffer area.",

        uses: {
            permitted: ["As per relevant buffer overlay (Article 7)"],
            conditional: ["As per relevant buffer overlay (Article 7)"],
            prohibited: ["As per relevant buffer overlay (Article 7)"]
        },

        keyPrinciples: [
            "Buffer Zone does NOT impact ownership, main zoning designation, or permitted use of the parcel",
            "Development potential within buffer area is transferred to the developable (non-buffered) part of the parcel",
            "If a parcel is entirely affected by a buffer, development potential may be transferred to an adjacent parcel (with OSC approval)",
            "If two or more buffer overlays affect the same area, the stricter constraints prevail",
            "All developments in B zone require approval by review panel",
            "Refer to Article 7 — Zoning Overlay Regulations for specific constraints"
        ],

        development: {
            note: "Main zone FAR and coverage apply to the non-buffered developable area. No additional construction rights in the buffer area itself.",
            approvalRequired: "OSC review panel approval required for all developments within buffer areas"
        },

        building: {
            maxFloors: "As per underlying base zone",
            notes: "Buffer zone overlays may include: waterbody buffers (rivers 20m, lakes 50m, streams 10m), steep slope buffers (>30%), wetland buffers, road buffers, and infrastructure protection buffers."
        }
    },

    // WR kept as alias for backward compatibility
    "WR": {
        fullName: "Waterbody Zone",
        code: "WB",
        article: "Article 6.6",
        table: "Table 6.28",
        description: "See WB — Waterbody Zone. Rivers: 20m buffer. Lakes: 50m buffer. Streams: 10m buffer."
    },

    // =============================================================================
    // GENERAL PROVISIONS (Article 4)
    // =============================================================================

    generalProvisions: {
        incrementalDevelopment: {
            article: "Article 4.6, Table 4.4",
            description: "Incremental development is allowed and encouraged to shape urban areas as per priorities and reduce urban sprawl in favour of densification.",
            requirements: [
                "Submit conceptual final design of building with expected GFA",
                "Show fulfilment of parking requirements and minimum density prescriptions",
                "Provide tentative Phasing Plan showing planned stages of construction and timeframe",
                "Intermediate building shall not appear incomplete or under construction"
            ]
        },

        homeOccupation: {
            article: "Article 4.10, Table 4.6",
            description: "All Residential Zones allow residents to engage in uses other than residences so long as principal use remains as dwelling.",
            requirements: [
                "No exterior physical changes for business purposes",
                "Maximum 25% of total floor area for business use",
                "Maximum one non-resident worker allowed",
                "Additional off-street parking for every 100 m² of floor area used"
            ],
            permittedActivities: [
                "General Medicine, Dentistry (if allowed by Ministry of Health)",
                "Offices for architecture, engineering, law",
                "Music studios (with sound proofing)",
                "IT consultancy, web design, data entry",
                "Accountancy services",
                "Teaching (not extending to classes or school-like establishments)"
            ],
            prohibited: [
                "Contractors Business",
                "Car-Trading Business",
                "Commercial schools",
                "Employment Agency",
                "Businesses involving large gatherings",
                "Courier Businesses",
                "Funeral chapels or homes"
            ]
        },

        microEnterprise: {
            article: "Article 4.9, Table 4.5",
            description: "Selected Residential zones allow residents to engage in business with no more than five (5) non-resident employees.",
            requirements: [
                "No exterior physical changes not residential in character",
                "Maximum 30% of total floor area for business use",
                "Ground floor only",
                "Additional off-street parking for every 200 m² used"
            ],
            permittedActivities: [
                "Processing/preserving of fruit and vegetables",
                "Manufacture of bakery products",
                "Weaving/finishing of textiles",
                "Manufacture of wearing apparel",
                "Manufacture of footwear",
                "Printing services",
                "Manufacture of jewellery",
                "Manufacture of games and toys",
                "Creative, arts and entertainment activities"
            ]
        },

        gatedCommunities: {
            article: "Article 4.5, Table 4.3",
            description: "CoK shall not allow gated communities in any new development larger than 1 ha to ensure clear linkages and social mix.",
            requirements: [
                "Opaque walls shall not exceed 1.5m height",
                "Only transparent fencing allowed beyond wall height",
                "Existing gated developments larger than 1 ha shall remove barriers within 1 year"
            ]
        },

        accessoryResidentialUnits: {
            article: "Article 4.11",
            description: "Allowed in R1, R1A, R2 and R3 zones to further affordable housing goals.",
            requirements: [
                "Maximum three (3) accessory units per permitted dwelling",
                "Minimum 9 m² for single occupancy, 15 m² for double occupancy",
                "Maximum 50% of gross liveable floor area",
                "Separate external door access required",
                "Separate kitchen, full bath and electric panel required"
            ]
        },

        carWashAutoRepair: {
            article: "Article 4.12",
            description: "Conditionally allowed in all Commercial and Mixed-Use Zones.",
            requirements: [
                "Comply with RS 402 Garages Construction and RS 368 Waste Management guidelines",
                "Noise and air pollution must be limited/mitigated",
                "Hazardous waste must be safely contained in hermetic containers",
                "No activities on public road or sidewalks"
            ]
        }
    },

    // =============================================================================
    // PARKING REQUIREMENTS (Article 6.7)
    // =============================================================================

    parkingRequirements: {
        article: "Article 6.7, Tables 6.31-6.34",
        residential: {
            "Single family": "1 space per unit",
            "Apartment (< 100 m²)": "1 space per unit",
            "Apartment (> 100 m²)": "1.5 spaces per unit",
            "Visitor": "0.25 spaces per unit"
        },
        nonResidential: {
            "Office": "1 space per 50 m² GFA",
            "Retail": "1 space per 30 m² GFA",
            "Restaurant": "1 space per 15 m² dining area",
            "Hotel": "1 space per 2 rooms",
            "Hospital": "1 space per 4 beds",
            "School": "1 space per classroom"
        },
        permeablePaving: "Required for parking lots to manage stormwater",
        derogations: "May be granted in congested areas with shared parking facilities"
    },

    // =============================================================================
    // SETBACK REGULATIONS (Article 6.8)
    // =============================================================================

    setbackRegulations: {
        article: "Article 6.8",
        principles: [
            "Setbacks ensure privacy, light, air and fire safety",
            "Front setback measured from plot boundary fronting road",
            "Rear setback directly opposite to front plot line",
            "Side setback measured horizontally from plot boundary"
        ],
        skyExposurePlane: "Required to ensure adequate light and air to adjacent properties"
    },

    // =============================================================================
    // CONTACT INFORMATION
    // =============================================================================

    contacts: {
        primary: {
            name: "City of Kigali One Stop Centre (OSC)",
            role: "Construction permits, zoning inquiries, variance requests",
            phone: "+250 788 000 000",
            website: "kigalicity.gov.rw"
        },
        permits: {
            name: "Irembo Platform",
            role: "Online permit applications",
            website: "new.irembo.gov.rw"
        },
        districts: {
            Gasabo: "Gasabo District OSC",
            Nyarugenge: "Nyarugenge District OSC",
            Kicukiro: "Kicukiro District OSC"
        }
    }
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get comprehensive zone information by zone code
 */
function getZoneInfo(zoneCode) {
    // Normalize zone name to code
    const normalized = normalizeZoneName(zoneCode);
    return ZONING_KNOWLEDGE_BASE[normalized] || null;
}

/**
 * Normalize various zone name formats to standard code
 */
function normalizeZoneName(zoneName) {
    if (!zoneName) return null;
    
    const normalizations = {
        // Residential
        'R1-Low density residential zone': 'R1',
        'Low Density Residential Zone': 'R1',
        'R1A-Low density residential densification zone': 'R1A',
        'Low Density Residential Densification Zone': 'R1A',
        'R1B-Rural residential zone': 'R1B',
        'Rural Residential Zone': 'R1B',
        'R2-Medium density residential - Improvement zone': 'R2',
        'Medium Density Residential - Improvement Zone': 'R2',
        'R3-Medium density residential - Expansion zone': 'R3',
        'Medium Density Residential - Expansion Zone': 'R3',
        'R4-High density residential zone': 'R4',
        'High Density Residential Zone': 'R4',
        
        // Commercial
        'C1-Mixed use zone': 'C1',
        'Mixed Use Zone': 'C1',
        'C3-City commercial zone': 'C3',
        'City Commercial Zone': 'C3',
        
        // Industrial
        'I1-Light industrial zone': 'I1',
        'Light Industrial Zone': 'I1',
        'I2-General industrial zone': 'I2',
        'General Industrial Zone': 'I2',
        'I3-Mining/ Extraction/Quarry': 'I3',
        
        // Public & Nature
        'P1-Parks and open spaces zone': 'P1',
        'Parks and Open Spaces Zone': 'P1',
        'P2-Sport and Eco tourism zone': 'P2',
        'Sports and Eco-Tourism Zone': 'P2',
        'P3A-National Parks zone': 'P3A',
        'P3-A-National parks zone': 'P3A',
        'National Parks Zone': 'P3A',
        'P3B-Forest zone': 'P3B',
        'P3-B-Forest zone': 'P3B',
        'Forest Zone': 'P3B',
        'P3C-Steep slopes (> 30%) zone': 'P3C',
        'P3-C-Steep slopes (> 30%) zone': 'P3C',
        'Steep Slopes Zone': 'P3C',
        'P3D-Natural Conservation zone': 'P3D',
        'P3-D-Natural conservation zone': 'P3D',
        'Natural Conservation Zone': 'P3D',
        'PA-Public Administration zone': 'PA',
        'Public Administrative and Services Zone': 'PA',
        'PF1-Education and research facilities': 'PF1',
        'Education and Research Facilities Zone': 'PF1',
        'PF2-Health facilities': 'PF2',
        'Health Facilities Zone': 'PF2',
        'PF3-Religious facilities': 'PF3',
        'Religious Facilities Zone': 'PF3',
        'PF4-Cultural/ memorial sites': 'PF4',
        'Cultural/Memorial Sites Zone': 'PF4',
        'PF5-Cemetery/ crematoria': 'PF5',
        'Cemetery/Crematoria Zone': 'PF5',

        // Commercial overlay
        'O-C2-Neighbourhood commercial overlay zone': 'O-C2',
        'O-C2': 'O-C2',
        'OC2': 'O-C2',
        'Neighbourhood Commercial Overlay Zone': 'O-C2',

        // Agriculture
        'A-Agricultural zone': 'A',
        'A1-Agriculture zone': 'A',
        'Agriculture Zone': 'A',
        'Agricultural Zone': 'A',

        // Buffer Zone
        'B-Buffer zone': 'B',
        'Buffer Zone': 'B',
        'B': 'B',

        // Transport & Utility
        'T-Transportation zone': 'T',
        'Transportation Zone': 'T',
        'Transport Zone': 'T',
        'U-Utility zone': 'U',
        'Utility Zone': 'U',

        // Wetlands & Water
        'W1 - Buffer': 'W1',
        'W1-Buffer zone': 'W1',
        'Wetland Buffer Zone': 'W1',
        'W2 - Rehabilitation': 'W2',
        'W2-Rehabilitation zone': 'W2',
        'Wetland Rehabilitation Zone': 'W2',
        'W3 - Sustainable Exploitation': 'W3',
        'W3-Sustainable Exploitation zone': 'W3',
        'Wetland Sustainable Exploitation Zone': 'W3',
        'W4 - Conservation': 'W4',
        'W4-Conservation zone': 'W4',
        'Wetland Conservation Zone': 'W4',
        'W5 - Recreational': 'W5',
        'W5-Recreational zone': 'W5',
        'Wetland Recreational Zone': 'W5',
        'WB-Waterbody zone': 'WB',
        'Waterbody Zone': 'WB',
        'WR-Waterbody zone': 'WB'
    };
    
    // Try direct match first
    if (normalizations[zoneName]) {
        return normalizations[zoneName];
    }
    
    // Try to extract code from zone name
    const codeMatch = zoneName.match(/^([A-Z]+[0-9]*[A-Z]?)/);
    if (codeMatch) {
        const code = codeMatch[1];
        if (ZONING_KNOWLEDGE_BASE[code]) {
            return code;
        }
    }
    
    return zoneName;
}

/**
 * Check if a specific use is permitted in a zone
 */
function isUsePermitted(zoneCode, useType) {
    const zone = getZoneInfo(zoneCode);
    if (!zone || !zone.uses) return { status: 'unknown', zone: zoneCode };
    
    const useLower = useType.toLowerCase();
    
    // Check permitted
    if (zone.uses.permitted) {
        for (const use of zone.uses.permitted) {
            if (use.toLowerCase().includes(useLower)) {
                return { status: 'permitted', use, zone: zone.fullName, article: zone.article };
            }
        }
    }
    
    // Check conditional
    if (zone.uses.conditional) {
        for (const use of zone.uses.conditional) {
            if (use.toLowerCase().includes(useLower)) {
                return { status: 'conditional', use, zone: zone.fullName, article: zone.article, note: 'Requires OSC approval' };
            }
        }
    }
    
    // Check prohibited
    if (zone.uses.prohibited) {
        for (const use of zone.uses.prohibited) {
            if (use.toLowerCase().includes(useLower)) {
                return { status: 'prohibited', use, zone: zone.fullName, article: zone.article };
            }
        }
    }
    
    return { status: 'not_specified', zone: zone.fullName };
}

/**
 * Get development parameters for a zone
 */
function getDevelopmentParams(zoneCode) {
    const zone = getZoneInfo(zoneCode);
    if (!zone) return null;
    
    return {
        zoneName: zone.fullName,
        code: zone.code,
        article: zone.article,
        table: zone.table,
        lotSize: zone.development?.lotSize,
        coverage: zone.development?.coverage,
        far: zone.development?.far,
        density: zone.development?.density,
        maxFloors: zone.building?.maxFloors,
        buildingForm: zone.building?.form
    };
}

module.exports = {
    ZONING_KNOWLEDGE_BASE,
    getZoneInfo,
    normalizeZoneName,
    isUsePermitted,
    getDevelopmentParams
};

