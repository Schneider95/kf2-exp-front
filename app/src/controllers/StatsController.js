module.controller('StatsController', ['$location', '$routeParams', 'BackEndRequestService', 'AchievementsDataService', 'PlayersDataService', 'MapsDataService', 'StatsDataService','BuildsList', function ($location, $routeParams, BackEndRequestService, AchievementsDataService, PlayersDataService, MapsDataService, StatsDataService, BuildsList) {

  var self = this;
  self.achievements = [];
  self.stats = [];
  self.maps = [];

  self.getAchievementsMapsList = function () {
    return AchievementsDataService.achievementsMapsDifficulty;
  };

  self.getAchievementsClassicList = function () {
    return AchievementsDataService.achievementsClassic;
  };
  
  self.getAchievementsPerksDifficultyList = function () { 
    return AchievementsDataService.achievementsPerksDifficulty;
  };
  
  self.getBuildsList = function() {
    return BuildsList;
  };

  self.getMapsList = function () {
    return MapsDataService.maps;
  };

  self.getNbPlayers = function () {
    return Object.keys(self.getPlayers()).length;
  };

  self.getNbAchievementsClassic = function () {
    return AchievementsDataService.nbAchievementsClassic;
  };

  self.getNbAchievementsMapsDifficulty = function () {    
    return AchievementsDataService.nbAchievementsMapsDifficulty;
  };
  
  self.getNbAchievementsPerksDifficulty = function () {    
    return AchievementsDataService.nbAchievementsPerksDifficulty;
  };

  self.getNumberOfAchievementsTotal = function () {      
    return AchievementsDataService.nbAchievements;
  };

  self.getPlayers = function () { 
    return PlayersDataService.players;
  };

  self.getPlayersNameList = function() {
    return PlayersDataService.playersNameList;
  };

  self.getReadableTimePlayed = function(timePlayed) {
      return parseInt(timePlayed / 60) + 'h';
  };

  self.getStatsList = function () {
    return StatsDataService.stats;
  };

  self.loadPlayersNameList = function() {
    if (0 === PlayersDataService.playersNameList.length) {
      PlayersDataService.getPlayersNameList();
    }
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

  self.removePlayer = function (id) {
    PlayersDataService.removePlayer(id);
    $location.path("/stats/" + PlayersDataService.playersIdsString, false);
  };

  self.selectedItemChange = function(item) {
    PlayersDataService.addPlayer(item.playerId);
    PlayersDataService.updatePlayer(item.playerId);
    $location.path("/stats/" + PlayersDataService.playersIdsString, false);
    self.clear();
  };
  
  self.clear = function() {
    self.selectedItem = null;
    self.searchText = "";
  }

  self.loadPlayersNameList();

  // check if params in URL is correctly constrcuted
  var ids = PlayersDataService.checkPlayersFromUrl($routeParams.ids);

  if (ids === true) {
    // Parameter correct, update players
    self.errorBoolean = false;
    PlayersDataService.loadPlayersFromUrl($routeParams.ids);
    PlayersDataService.updatePlayers();
    StatsDataService.getStatsList(); 
    AchievementsDataService.getAchievementsList(); 
  } else {
    // An error occured, bad URL parameter
    self.errorMessage = ids;
    self.errorBoolean = true;
  }
}]);