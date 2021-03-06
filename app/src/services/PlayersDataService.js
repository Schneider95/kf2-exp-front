
module = angular.module('kf2App');
module.factory('PlayersDataService', ['SecondsBeforeUpdatePlayer', 'BackEndRequestService', 'BackEndUrlService', function (SecondsBeforeUpdatePlayer, BackEndRequestService, BackEndUrlService) {

    var service = {
      addPlayer: function (id) {

        service.players[id] = {
          steam_name: 'Player number ' + id,
          update_state: 'Not retrieved for the moment.',
          updating: false
        };
        service.rebuildPlayerIdsString();
      },
      checkPlayersFromUrl: function (playersIdsFromUrlString) {

        if (playersIdsFromUrlString !== undefined) {

          var playersIdsFromUrlArray = playersIdsFromUrlString.split(",");
          for (var i = 0; i < playersIdsFromUrlArray.length; i++) {

            if (isNaN(playersIdsFromUrlArray[i])) {
              return 'IDs provided in URL must be separated by a comma.';
            }
          }

          return true;
        } else {

          return 'No player selected for display. Search existing player with the top search bar, or add new player with the link in the left menu.';
        }
      },
      getReadableTimePlayed: function (totalMinutes) {

        if (isNaN(totalMinutes)) {
          return '';
        }

        return Math.floor(totalMinutes / 60) + 'h' + totalMinutes % 60 + 'm';
      },
      getPlayersNameList: function() {
        BackEndRequestService.getPlayersList().then(
          function (success) {
            service.playersNameList = success.data;
          },
          function (error) {
          }
        );
      },
      loadPlayersFromUrl: function (playersIdsFromUrlString) {

        var playersIdsFromUrlArray = playersIdsFromUrlString.split(",");
        var playerIdToRemove = [];
        // for each players in array, check if it exist in url 
        angular.forEach(service.players, function (player, playerId) {

          // if a player in array dont exist in URL
          if (playersIdsFromUrlArray.indexOf(playerId) === -1) {
            // add this player to this the array of player to remove
            playerIdToRemove.push(playerId);
          }
        });
        angular.forEach(playerIdToRemove, function (playerId, key) {
          service.removePlayer(playerId);
        });
        // for each players in url, check if it exist in array 
        angular.forEach(playersIdsFromUrlArray, function (playerId) {
          // if a player in url dont exist in array
          if (service.players[playerId] === undefined) {
            // add this player to the array
            service.addPlayer(playerId);
          }
        });
      },
      players: {},
      playersIdsString: '',
      playersIdsArray: [],
      playersNameList: [],
      removePlayer: function (id) {

        delete service.players[id];
        service.rebuildPlayerIdsString();
      },
      registerPlayer: function (profileUrl) {

        service.registeringPlayer.state = true;
        var steamId;
        var checkIfPlayerExistInDatabasePromise = function () {
          BackEndRequestService.checkIfPlayerExistInDatabase(profileUrl)
                  .then(function (success) {
                    if (isNaN(success)) {
                      service.registeringPlayer.message = 'Player not found in database. Check if it exist on Steam...';
                      return checkIfPlayerExistOnSteamPromise();
                    } else {
                      service.addPlayer(success);
                      service.registeringPlayer.message = 'This player is already registered in database. It has been added to the stats page. Check it by clicking on the link in left menu.';
                      service.registeringPlayer.state = false;
                    }
                  }, function (error) {
                    service.registeringPlayer.message = error;
                    service.registeringPlayer.state = false;
                  });
        };
        var checkIfPlayerExistOnSteamPromise = function () {
          BackEndRequestService.checkIfPlayerExistOnSteam(profileUrl).then(
                  function (success) {

                    if (isNaN(success)) {
                      service.registeringPlayer.message = success;
                      service.registeringPlayer.state = false;
                    } else {
                      steamId = success;
                      service.registeringPlayer.message = 'Player found on Steam with ID ' + steamId + '. Check if the player have a public profile...';
                      return checkIfPlayerHasAPublicProfilePromise(steamId);
                    }
                  }, function (error) {
            service.registeringPlayer.message = error;
            service.registeringPlayer.state = false;
          });
        };
        var checkIfPlayerHasAPublicProfilePromise = function () {
          BackEndRequestService.getProfileDataFromSteamAPI(steamId).then(
                  function (success) {
                    if (success.communityvisibilitystate === 3) {
                      service.registeringPlayer.message = 'Player have a public profile. Checking if the player got Killing Floor 2...';
                      return checkIfPlayerHaveGamePromise();
                    } else {
                      service.registeringPlayer.message = 'Player don\'t have a public profile. Unable to retrieve stats.';
                      service.registeringPlayer.state = false;
                    }
                  }, function (error) {
            service.registeringPlayer.message = error;
            service.registeringPlayer.state = false;
          });
        };
        var checkIfPlayerHaveGamePromise = function () {
          BackEndRequestService.checkIfPlayerHaveGame(steamId).then(
                  function (success) {
                    if (success) {
                      service.registeringPlayer.message = 'Player have Killing Floor 2. Retrieve profile data...';
                      return updateProfileDataPromise();
                    } else {
		      service.registeringPlayer.message = 'Player don\'t have Killing Floor 2.';
		      service.registeringPlayer.state = false;
	            }
                  }, function (error) {
            service.registeringPlayer.message = error;
            service.registeringPlayer.state = false;
          });
        };
        var updateProfileDataPromise = function () {

          BackEndRequestService.updateProfileDataWithSteamAPI(steamId)
                  .then(function (success) {
                    service.addPlayer(success);
                    service.registeringPlayer.message = 'Player profile data retrieved. Check it on stats page by clicking on the link in the left menu.';
                    service.registeringPlayer.state = false;
                  }, function (error) {
                    service.registeringPlayer.message = error;
                    service.registeringPlayer.state = false;
                  });
        };
        if (/^http:\/\/steamcommunity.com\/(profiles\/[0-9]*|id\/[a-zA-Z0-9-_]*)[\/]?$/.test(profileUrl)) {
          return checkIfPlayerExistInDatabasePromise();
        } else {
          service.registeringPlayer.message = 'The URL provided has NOT the correct form.';
          service.registeringPlayer.state = false;
        }
      },
      registeringPlayer: {
        state: false,
        message: ''
      },
      rebuildPlayerIdsString: function () {

        service.playersIdsArray = [];
        angular.forEach(service.players, function (player, playerId) {
          service.playersIdsArray.push(playerId);
        });
        service.playersIdsString = service.playersIdsArray.join(',');
      },
      refactorStatsAchievemementsArray: function (id) {

        var statsArray = [];
        var achievementsArray = [];
        service.players[id].level = [];
        service.players[id].nb_achievements = 0;
        service.players[id].nb_achievements_classic = 0;
        service.players[id].nb_achievements_maps_difficulty = 0;
        service.players[id].nb_achievements_perks_difficulty = 0;

        // Stats
        angular.forEach(service.players[id].player_stats, function (playerStat) { 

          statsArray[playerStat.stat.stat_name] = playerStat;
  
          if ('undefined' !== typeof playerStat.stat.perk && true === playerStat.stat.is_xp) {

              var level =  parseInt(playerStat.value / 262000);
              
              if (25 < level) {
                service.players[id].level[playerStat.stat.perk.name] = 25;
              } else {
                service.players[id].level[playerStat.stat.perk.name] = level;
              }

          } 
        });

        // Achievements
        angular.forEach(service.players[id].player_achievements, function (playerAchievement) {
          
          if ('undefined' !== typeof playerAchievement.achievement.map && 
              'undefined' !== typeof playerAchievement.achievement.difficulty) {
            service.players[id].nb_achievements_maps_difficulty++;
          }
          
          if ('undefined' !== typeof playerAchievement.achievement.perk && 
              'undefined' !== typeof playerAchievement.achievement.difficulty) {
            service.players[id].nb_achievements_perks_difficulty++;
          }

          if (playerAchievement.achievement.classic) {
            service.players[id].nb_achievements_classic++;
          }
          
          service.players[id].nb_achievements++;
          achievementsArray[playerAchievement.achievement.name] = playerAchievement;
        });

        service.players[id].player_stats = statsArray;
        service.players[id].player_achievements = achievementsArray;
      },
      updatePlayer: function (id) {

        service.players[id].updating = true;
        service.players[id].update_state = 'Check if player need to be updated...';
        var getPlayerByIdPromise = function () {
          BackEndRequestService.getPlayerById(id)
                  .then(function (success) {

                    service.players[id] = success;
                    service.refactorStatsAchievemementsArray(id);
                    
                    var lastUpdateDate = new Date(success.last_update_time);
                    var lastUpdateTime = lastUpdateDate.getTime() / 1000;
                    var actualTime = new Date().getTime() / 1000;

                    if (lastUpdateTime + SecondsBeforeUpdatePlayer < actualTime)
                    {
                      service.players[id].updating = true;
                      service.players[id].update_state = 'Retrieve player profile data from Steam...';
                      return getProfileDataPromise(success.steam_id);
                    } else {
                      service.players[id].updating = false;
                      service.players[id].update_state = 'Player updated.';
                    }
                  }, function (error) {

                    service.players[id].updating = false;
                    service.players[id].update_state = error;
                  });
        };
        var getProfileDataPromise = function (steamId) {
          BackEndRequestService.getProfileDataFromSteamAPI(steamId).then(
                  function (success) { 
                    if (success.communityvisibilitystate === 3) {
                      return updateProfileDataPromise();
                    } else {
                      service.players[id].updating = false;
                      service.players[id].update_state = 'Unfortunately, the player profile is now private.';
                    }
                  }, function (error) {
            service.players[id].updating = false;
            service.players[id].update_state = 'Failed to retrieve player profile data from Steam.';
          }
          );
        };
        var updateProfileDataPromise = function () {

          BackEndRequestService.updateProfileDataWithSteamAPI(service.players[id].steam_id)
                  .then(function (success) {

                    service.players[id].update_state = 'Retrieving player stats data...';
                    return updateStatsDataPromise();
                  }, function (error) {
                    service.players[id].updating = false;
                    service.players[id].update_state = 'Failed to retrieve player profile data from Steam.';
                  });
        };
        var updateStatsDataPromise = function () {
          BackEndRequestService.updateStatsDataWithSteamAPI(service.players[id].steam_id)
                  .then(function (success) {

                    service.players[id].update_state = 'Retrieving player stats data...';
                    return updateTimePlayedPromise();
                  }, function (error) {

                    service.players[id].updating = false;
                    service.players[id].update_state = error;
                  });
        };
        var updateTimePlayedPromise = function () {
          BackEndRequestService.updateTimePlayedWithSteamAPI(service.players[id].steam_id)
                  .then(function (success) {

                    service.players[id].update_state = 'Retrieving player from database...';
                    return getPlayerByIdPromise();
                  }, function (error) {

                    service.players[id].updating = false;
                    service.players[id].update_state = error;
                  });
        };
        return getPlayerByIdPromise();
      },
      updatePlayers: function () {

        angular.forEach(service.players, function (player, playerId) {
          service.updatePlayer(playerId);
        });
      }
    };
    return service;
  }]);
