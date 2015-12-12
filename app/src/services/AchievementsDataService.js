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

              angular.forEach(achievements, function (achievement) {
                
                service.nbAchievements++;
                
                if (achievement.hasOwnProperty('map') && achievement.hasOwnProperty('difficulty')) {
                  
                  service.nbAchievementsMapsDifficulty++;
                  
                  if (undefined === achievementsMapsDifficultyUnsorted[achievement.map]) {
                    achievementsMapsDifficultyUnsorted[achievement.map] = {};
                  }
                  
                  if (undefined === achievementsMapsDifficultyUnsorted[achievement.map][achievement.difficulty]) {
                    achievementsMapsDifficultyUnsorted[achievement.map][achievement.difficulty] = {
                      difficulty: achievement.difficulty,
                      map: achievement.map,
                      name: achievement.name
                    };
                  }
                }

                if (achievement.hasOwnProperty('perk') && achievement.hasOwnProperty('difficulty')) {
                  
                  service.nbAchievementsPerksDifficulty++;
                  
                  if (undefined === achievementsPerksDifficultyUnsorted[achievement.perk]) {
                    achievementsPerksDifficultyUnsorted[achievement.perk] = {};
                  }
                  
                  if (undefined === achievementsPerksDifficultyUnsorted[achievement.perk][achievement.difficulty]) {
                    achievementsPerksDifficultyUnsorted[achievement.perk][achievement.difficulty] = {
                      difficulty: achievement.difficulty,
                      perk: achievement.perk,
                      name: achievement.name
                    };
                  }
                } 

                if (achievement.hasOwnProperty('collectible')) {
                  if (undefined === achievementsClassicUnsorted[achievement.name]) {
                    achievementsClassicUnsorted[achievement.visible_name] = achievement;
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