var express = require('express');
var router = express.Router();
var requestify = require('requestify');

router.get('/version', function(req, res, next) {
    res.json({ version: "1.0.0" });
});

router.get('/sw/news', function(req, res, next) {
    res.json({});
});

router.get('/player/info/:uid', function(req, res, next) {
  var resp;
  //requestify.get("https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2?key=X&steamids=" + req.params.uid)
  requestify.get('https://api.steampowered.com/ISteamNews/GetNewsForApp/v2?appid=2000')
    .then(function(response) {
      // Get the response body (JSON parsed or jQuery object for XMLs)
      resp = response.getBody();
      res.json(resp);
    }
  );
});

module.exports = router;