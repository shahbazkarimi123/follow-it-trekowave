const express = require('express');

const router = express.Router();
const mapController = require('../../controllers/map');

router.get('/map',mapController.postMap);
module.exports = router;