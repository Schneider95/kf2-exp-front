module = angular.module('kf2App');


module.factory('RankingService', ['BackEndRequestService', function (BackEndRequestService) {

    var service = {
      statsRetrieved: [],
      statToRetrieve: '',
      changeStat: function (statToRetrieve) {
        service.statsRetrieved = [];
        service.statToRetrieve = statToRetrieve;
        service.getRankingByStat();
      },
      getRankingByStat: function () {
        BackEndRequestService
          .getRankingByStat(service.statToRetrieve)
          .then(
            function (success) {
              angular.forEach(success.data, function (stat) {
                service.statsRetrieved.push(stat);
              });
            },
            function (error) {

            }
          );
      }
    };

    return service;
  }]);