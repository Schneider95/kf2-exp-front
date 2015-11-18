module.controller('StatsController', ['$location', '$routeParams', 'BackEndRequestService', 'AchievementsDataService', 'PlayersDataService', 'MapsDataService', 'StatsDataService','BuildsList', function ($location, $routeParams, BackEndRequestService, AchievementsDataService, PlayersDataService, MapsDataService, StatsDataService, BuildsList) {

    var self = this;
    self.achievements = [];
    self.stats = [];
    self.maps = [];

    self.getAchievementsMapsList = function () {
      return AchievementsDataService.achievementsMaps;
    };
    
    self.getAchievementsClassicList = function () {
      return AchievementsDataService.achievementsClassic;
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
    
    self.getNumberOfAchievementsClassic = function () {
      return Object.keys(AchievementsDataService.achievementsClassic).length;
    };
     
    self.getNumberOfAchievementsMaps = function () {      
      return Object.keys(AchievementsDataService.achievementsMaps).length * 4;
    };
    
    self.getNumberOfAchievementsTotal = function () {      
      return self.getNumberOfAchievementsMaps() + self.getNumberOfAchievementsClassic();
    };
    
    self.getNumberOfMaps = function () {      
      return Object.keys(AchievementsDataService.achievementsMaps).length;
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
    };

    self.loadPlayersNameList();

    // check if params in URL is correctly constrcuted
    var ids = PlayersDataService.checkPlayersFromUrl($routeParams.ids);

    if (ids === true) {
      // Parameter correct, update players
      self.errorBoolean = false;
      PlayersDataService.loadPlayersFromUrl($routeParams.ids);
      PlayersDataService.updatePlayers();
      StatsDataService.getStatsList(); 
      AchievementsDataService.getAchievementsMapsList(); 
      AchievementsDataService.getAchievementsClassicList(); 
    } else {
      // An error occured, bad URL parameter
      self.errorMessage = ids;
      self.errorBoolean = true;
    }
    
  }]);