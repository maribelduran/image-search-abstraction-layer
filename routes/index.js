const router = require('express').Router();
const path = require('path');
const apiRoutes = require('../api/routes');

// API Routes
router.use('/api', apiRoutes);

module.exports = router;