const router = require('express').Router();
const path = require('path');
const apiRoutes = require('../api/routes');

// API Routes
router.use('/api', apiRoutes);

router.route('/new/')
.get((req, res) => {
   let response = { response: "Wondering if this shoud be outside of the api folder!"}
  res.json(response);
});

module.exports = router;