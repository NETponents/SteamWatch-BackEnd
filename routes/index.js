var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/faq', function(req, res, next) {
    res.render('faq', {title: 'FAQ'});
});
router.get('/download', function(req, res, next) {
    res.render('download', {title: 'Download'});
});
router.get('/about', function(req, res, next) {
    res.render('about', {title: 'About'});
});

module.exports = router;
