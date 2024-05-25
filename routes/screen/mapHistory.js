const express = require('express');

const router = express.Router();
const mapHistoryController = require('../../controllers/mapHistory');

router.get('/history',mapHistoryController.getMapHistoryController);
module.exports = router;