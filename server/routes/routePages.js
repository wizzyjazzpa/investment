const express = require('express');
const router = express.Router();
 const controllpages = require('../controller/controlpages');
 const authController = require('../controller/auth_controller')

router.get('/',controllpages.home)
 router.get('/register',authController.register);
router.get('/login',authController.login);



module.exports =router;