module = angular.module('kf2App');

module.factory('AchievementsDataService', ['BackEndRequestService', function (BackEndRequestService) {


    var service = {
      getAchievementsClassicList: function () {
        var getAchievementsClassicListPromise = function () {
          BackEndRequestService.getAchievementsClassicList()
                  .then(function (success) {
                   
                    service.achievementsClassic = success;

                  }, function (error) {
                    console.log(error);
                  });
        };

        return getAchievementsClassicListPromise();
      },
      getAchievementsMapsList: function () {
        var getAchievementsMapsListPromise = function () {
          BackEndRequestService.getAchievementsMapsList()
                  .then(function (success) {
                   
                    service.achievementsMaps = success;

                  }, function (error) {
                    console.log(error);
                  });
        };

        return getAchievementsMapsListPromise();
      },
      achievementsClassic: [],
      achievementsMaps: []
    };


    return service;
  }]);