var express = require('express');
var router  = express.Router();

var stackexchange = require('../middlewares/stackexchange');

router.get('/', function (request, response, next) {
    stackexchange.setFilters({pagesize: 1});
    stackexchange.getAll(function (err, result) {
        if (err) next(err);
        response.send(result);
    });
});

module.exports = router;