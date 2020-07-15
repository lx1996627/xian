var express = require('express');
var router = express.Router();
var userCtrl = require("../controllers/userCtrl");

router.post('/getUserId', userCtrl.getUserId);

module.exports = router;