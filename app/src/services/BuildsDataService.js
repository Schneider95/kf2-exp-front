module = angular.module('kf2App');
module.factory('BuildsDataService', ['BackEndRequestService', function (BackEndRequestService) {
  var service = {
    getBuildsList: function () {
      var getBuildsListPromise = function () {
        BackEndRequestService.getBuildsList()
        .then(function (builds) {

          angular.forEach(builds, function (build) {

            if (undefined === service.builds[build.stat.perk.name]) {
              service.builds[build.stat.perk.name] = {
                'statIndex': build.stat.stat_name,
                'builds': {} 
              };
            }

            if (undefined === service.builds[build.stat.perk.name].builds[build.build_id]) {
              service.builds[build.stat.perk.name].builds[build.build_id] = build.composition.split(", ");
            } 
          });

          var buildsSorted = {};

          Object.keys(service.builds).sort().forEach(function(key) {
            buildsSorted[key] = service.builds[key];
          });

          service.builds = buildsSorted;

        }, function (error) {

        });
      };
      return getBuildsListPromise();
    },
    builds: {}
  };
  return service;
}]);