// Admin routes removed — zoning data is served live from Kigali City ArcGIS Enterprise.
// No data upload or database management required.
const express = require('express');
const router = express.Router();

router.get('/status', (req, res) => {
    res.json({
        status: 'ok',
        spatial: 'Kigali City ArcGIS Enterprise (live)',
        note: 'Data upload endpoints removed — using live ArcGIS Feature Service.'
    });
});

module.exports = router;
