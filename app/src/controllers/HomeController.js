module.controller('HomeController', ['BackEndRequestService', 'PlayersDataService', '$q', '$log', '$location', function (BackEndRequestService, PlayersDataService, $q, $log, $location) {

    var self = this;

    self.addPlayerToStatPage = function(id) {
      PlayersDataService.addPlayer(id);
      $location.path("/stats/" + PlayersDataService.playersIdsString, true);
    };

    self.getPlayersNameList = function() {
      return PlayersDataService.playersNameList;
    };

    self.loadLastUpdatedPlayers = function() {
      BackEndRequestService.getLastUpdatedPlayers().then(
        function (success) {
          self.loadLastUpdatedPlayers = success.data;
        },
        function (error) {

        }
      );
    };

    self.loadNews = function() {
      BackEndRequestService.getLatestNews().then(
        function (success) {
          self.news = success.data;
        },
        function (error) {

        }
      );
    };

    self.loadPlayersNameList = function() {
      if (0 === PlayersDataService.playersNameList.length) {
        PlayersDataService.getPlayersNameList();
      }
    };

    self.selectedItemChange = function(item) {
      PlayersDataService.addPlayer(item.playerId);
      $location.path("/stats/" + PlayersDataService.playersIdsString, true);
    };

    self.querySearch = function(query) {
      var filter = function(query) {
        var lowercaseQuery = angular.lowercase(query);
        
        return function filterFn(player) {
          return (player.steamNameLowercase.indexOf(lowercaseQuery) !== -1);
        };
      };
      
      return self.getPlayersNameList().filter(filter(query));
    };

    self.loadNews();
    self.loadPlayersNameList();
    self.loadLastUpdatedPlayers();

    self.selectedItem = null;
    self.searchText = null;
    self.simulateQuery = false;
    self.isDisabled = false;      
  }]);