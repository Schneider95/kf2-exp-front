module = angular.module('kf2App');

module.factory('AchievementsDataService', ['BackEndRequestService', function (BackEndRequestService) {

    var service = {
      getAchievementsList: function () {
        
        var getAchievementsListPromise = function () {
          BackEndRequestService.getAchievementsList()
            .then(function (achievements) {

              var achievementsMapsDifficultyUnsorted = {};
              var achievementsPerksDifficultyUnsorted = {};
              var achievementsClassicUnsorted = {};

              service.nbAchievements = 0;
              service.nbAchievementsMapsDifficulty = 0;
              service.nbAchievementsPerksDifficulty = 0;
              service.nbAchievementsClassic = 0;
              
              angular.forEach(achievements, function (achievement) {

                service.nbAchievements++;
                
                if (achievement.hasOwnProperty('map') && achievement.hasOwnProperty('difficulty')) {
                  
                  service.nbAchievementsMapsDifficulty++;
                  
                  if (undefined === achievementsMapsDifficultyUnsorted[achievement.map.name]) {
                    achievementsMapsDifficultyUnsorted[achievement.map.name] = {};
                  }
                  
                  if (undefined === achievementsMapsDifficultyUnsorted[achievement.map.name][achievement.difficulty.name]) {
                    achievementsMapsDifficultyUnsorted[achievement.map.name][achievement.difficulty.name] = {
                      name: achievement.name
                    };
                  }
                }

                if (achievement.hasOwnProperty('perk') && achievement.hasOwnProperty('difficulty')) {
                  
                  service.nbAchievementsPerksDifficulty++;
                  
                  if (undefined === achievementsPerksDifficultyUnsorted[achievement.perk.name]) {
                    achievementsPerksDifficultyUnsorted[achievement.perk.name] = {};
                  }

                  if (undefined === achievementsPerksDifficultyUnsorted[achievement.perk.name][achievement.difficulty.name]) {
                    achievementsPerksDifficultyUnsorted[achievement.perk.name][achievement.difficulty.name] = {
                      difficulty: achievement.difficulty.name,
                      perk: achievement.perk.name,
                      name: achievement.name
                    };
                  }
                } 

                if (achievement.hasOwnProperty('classic')) {
                  if (undefined === achievementsClassicUnsorted[achievement.name]) {
                    achievementsClassicUnsorted[achievement.name] = achievement;
                    service.nbAchievementsClassic++;
                  }
                } 
              });

              Object.keys(achievementsPerksDifficultyUnsorted).sort().forEach(function(key) {
                service.achievementsPerksDifficulty[key] = achievementsPerksDifficultyUnsorted[key];
              });
              
              Object.keys(achievementsMapsDifficultyUnsorted).sort().forEach(function(key) {
                service.achievementsMapsDifficulty[key] = achievementsMapsDifficultyUnsorted[key];
              });
              
              Object.keys(achievementsClassicUnsorted).sort().forEach(function(key) {
                service.achievementsClassic[key] = achievementsClassicUnsorted[key];
              });
            }, function (error) {
              console.log(error);
            });
        };

        return getAchievementsListPromise();
      },
      
      achievementsClassic: {},
      achievementsMapsDifficulty: {},
      achievementsPerksDifficulty: {},
      nbAchievements: 0,
      nbAchievementsMapsDifficulty: 0,
      nbAchievementsPerksDifficulty: 0,
      nbAchievementsClassic: 0
    };
    
    return service;
  }]);