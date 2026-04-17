const express = require('express');
const router = express.Router();
const apiController = require('../controller/api_controller');

router.post('/registration',apiController.Register);

module.exports = router;