module.controller('StatsController', ['$routeParams', 'BackEndRequestService', 'AchievementsDataService', 'PlayersDataService', 'MapsDataService', 'StatsDataService','BuildsList', function ($routeParams, BackEndRequestService, AchievementsDataService, PlayersDataService, MapsDataService, StatsDataService, BuildsList) {

    var self = this;
    self.achievements = [];
    self.stats = [];
    self.maps = [];

    self.getAchievementsMapsList = function () {
      return AchievementsDataService.achievementsMaps;
    };
    
    self.getAchievementsClassicList = function () {
      console.log(AchievementsDataService.achievementsClassic);
      return AchievementsDataService.achievementsClassic;
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

    
    self.removePlayer = function (id) {
      return PlayersDataService.removePlayer(id);
    };
    
    self.getStatsList = function () {
      return StatsDataService.stats;
    };
    
    self.getMapsList = function () {
      return MapsDataService.maps;
    };
   

    self.getBuildsList = function() {
      return BuildsList;
    };

    self.getReadableTimePlayed = function(timePlayed) {
	return parseInt(timePlayed / 60) + 'h';
    };

    // check if params in URL is correctly constrcuted
    var ids = PlayersDataService.checkPlayersFromUrl($routeParams.ids);

    if (ids === true) {
      // Parameter correct, update players
      self.errorBoolean = false;
      PlayersDataService.loadPlayersFromUrl($routeParams.ids);
      PlayersDataService.updatePlayers();
      StatsDataService.getStatsList(); 
      //MapsDataService.getMapsList(); 
      AchievementsDataService.getAchievementsMapsList(); 
      AchievementsDataService.getAchievementsClassicList(); 
    } else {
      // An error occured, bad URL parameter
      self.errorMessage = ids;
      self.errorBoolean = true;
    }
    
  }]);