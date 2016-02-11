var express = require('express');
var router  = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with stackexchange resource');
});

module.exports = router;
