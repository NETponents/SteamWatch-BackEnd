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
  var data_username = "";
  var data_userstatus = "";
  var data_lastlogoff = "";
  var request = unirest.get("https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2?key=" + process.env.STEAMKEY + "&steamids=" + req.params.uid);
  request.end(function (response) {
      data_username = response.body.personaname;
      if(response.body.personastate == 0)
      {
          data_userstatus = "Offline";
      }
      else if(response.body.personastate == 1)
      {
          data_userstatus = "Online";
      }
      else if(response.body.personastate == 2)
      {
          data_userstatus = "Busy";
      }
      else if(response.body.personastate == 3)
      {
          data_userstatus = "Away";
      }
      else if(response.body.personastate == 4)
      {
          data_userstatus = "Snooze";
      }
      else if(response.body.personastate == 5)
      {
          data_userstatus = "Looking to Trade";
      }
      else if(response.body.personastate == 6)
      {
          data_userstatus = "Looking to Play";
      }
      else
      {
          data_username = "Unknown";
      }
      data_lastlogoff = response.body.lastlogoff;
  });
  var result = {
      me : {
          username : data_username,
          status : data_userstatus,
          lastGame : {
              title : "SampleGame",
              date : data_lastlogoff,
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
