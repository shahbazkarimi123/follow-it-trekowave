const path = require('path');

const express = require('express');
// const rootDir = require('../../util/path');
const loginController = require('../../controllers/login');
const router = express.Router();


router.get('/login',loginController.getLogin);

router.post('/login',loginController.postLogin);

module.exports = router;