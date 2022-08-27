const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    // title is a variable into the index.pug
    res.render('index', { title: 'TITOLO INJECTED' });
});

module.exports = router;
