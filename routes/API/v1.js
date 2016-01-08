var express = require('express');
var router = express.Router();
var unirest = require('unirest');

router.get('/version', function(req, res, next) {
    res.json({ version: "1.0.0" });
});

router.get('/sw/news', function(req, res, next) {
    res.json({});
});

router.get('/player/info/:uid', function(req, res, next) {
  /* Blocked out until we get an API key.
  =======================================
  var request = unirest.get("https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2?key=X&steamids=" + req.params.uid);
  request.end(function (response) {
      res.json(response.body);
  });*/
  var result = {
      me : {
          username : "SampleGamer",
          status : "Online",
          lastgame : {
              title : "SampleGame",
              date : "Yesterday",
              playTime : "42"
          }
      },
      friends : [
          {
              username : "Friend0",
              statImg : "icons/offline.png"
          },
          {
              username : "Friend1",
              statImg : "icons/offline.png"
          },
          {
              username : "Friend2",
              statImg : "icons/offline.png"
          }
      ],
      notify : {
          online : {
              hasChanged : false
          },
          ingame : {
              hasChanged : false
          }
      },
      friendsStat : {
          online : {
              count : "4",
              list : "Friend0, Friend1, Friend2, Friend3"
          },
          ingame : {
              count : "2",
              list : "Friend1, Friend2"
          }
      }
  }
  res.json(result);
});

module.exports = router;