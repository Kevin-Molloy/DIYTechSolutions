var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

router.get('/', ctrlMain.home);
router.get('/login', ctrlMain.login);
router.get('/register', ctrlMain.register);

module.exports = router;
