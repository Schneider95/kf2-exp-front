module.controller('RankingController', ['BackEndRequestService', 'StatsDataService', 'RankingService', 'PlayersDataService', '$location', function (BackEndRequestService, StatsDataService, RankingService, PlayersDataService, $location) {

  var self = this;

  self.selectedStat = '';

  self.getStatsList = function() {
    return StatsDataService.stats;
  };

  self.changeStat = function() {
    RankingService.changeStat(self.selectedStat);
  };

  self.getRankingByStat = function() {
    RankingService.getRankingByStat();
  };

  self.getStatsRetrieved = function() {
    return RankingService.statsRetrieved;
  };

  self.addPlayerToStatPage = function(id) {
    PlayersDataService.addPlayer(id);
    $location.path( "/stats/"+ PlayersDataService.playersIdsString);
  };  
  
  StatsDataService.getStatsList(); 
}]);