const express = require('express');

const router = express.Router();
const mapController = require('../../controllers/map');

router.post('/map',mapController.postMap);
module.exports = router;