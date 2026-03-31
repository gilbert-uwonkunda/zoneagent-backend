// src/server.js
require('dotenv').config();
console.log('Starting TerraNebular server...');

const app = require('./app');

const PORT = process.env.PORT || 3001;

let server;

// Graceful shutdown handler
function gracefulShutdown(signal) {
    console.log(`Received ${signal}. Starting graceful shutdown...`);
    if (server) {
        server.close(() => {
            console.log('HTTP server closed');
            process.exit(0);
        });
        setTimeout(() => { console.log('Force shutdown'); process.exit(1); }, 10000);
    } else {
        process.exit(0);
    }
}

// Start server
async function startServer() {
    try {
        console.log('Environment variables loaded:');
        console.log(`- PORT: ${PORT}`);
        console.log(`- CLAUDE_API_KEY: ${process.env.CLAUDE_API_KEY ? 'Configured' : 'Not configured'}`);
        console.log('- Spatial data: Kigali City ArcGIS Enterprise (live)');

        server = app.listen(PORT, () => {
            console.log(`
TerraNebular Backend Server Started
==================================

Server:    http://localhost:${PORT}
Spatial:   Kigali City ArcGIS Enterprise (live)
Claude API: ${process.env.CLAUDE_API_KEY ? 'Configured' : 'Not configured'}
Environment: ${process.env.NODE_ENV || 'development'}

API Endpoints:
   • Health:      GET  /api/health
   • Stats:       GET  /api/stats
   • Zoning:      GET  /api/zoning/location?lat={lat}&lng={lng}
   • AI Chat:     POST /api/ai/question
   • Boundaries:  GET  /api/zoning/boundaries
   • Search:      GET  /api/zoning/search?q={query}
   • Nearby:      GET  /api/zoning/nearby?lat={lat}&lng={lng}&radius={m}

Ready to serve spatial intelligence!
            `);
        });

        process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
        process.on('SIGINT',  () => gracefulShutdown('SIGINT'));

        return server;

    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Don't exit immediately in development
    if (process.env.NODE_ENV === 'production') {
        process.exit(1);
    }
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    if (process.env.NODE_ENV === 'production') {
        process.exit(1);
    }
});

// Start the server
startServer().catch(error => {
    console.error('Server startup failed:', error);
    process.exit(1);
});

module.exports = { startServer };