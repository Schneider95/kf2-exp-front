module.directive('build', ['PartialsPath', 
  function(partialsPath) {
    return {
      templateUrl: partialsPath + 'build.html',
    };
  }
]);