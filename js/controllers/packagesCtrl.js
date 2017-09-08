angular.module('devmtnTravel')
.controller('packagesCtrl', function($scope, $stateParams, mainSrv){
  $scope.travelPackage = mainSrv.packageInfo;
  
  $scope.countryFilter = $stateParams;
})
