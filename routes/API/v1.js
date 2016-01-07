var express = require('express');
var router = express.Router();

router.get('/version', function(req, res, next) {
    res.json({ version: "1.0.0" });
});

router.get('/sw/news', function(req, res, next) {
    res.json({});
});

router.get('/player/info/:uid', function(req, res, next) {
  res.send(req.params.uid);
});

module.exports = router;