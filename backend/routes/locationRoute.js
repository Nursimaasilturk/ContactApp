const express = require('express');
const locationController = require('../controllers/locationController');

const router = express.Router();

router.get('/',locationController.getAllLocations);

module.exports = router;