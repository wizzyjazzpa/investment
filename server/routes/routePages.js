const express = require('express');
const router = express.Router();
 const controllpages = require('../controller/controlpages');

router.get('/',controllpages.home)


module.exports =router;