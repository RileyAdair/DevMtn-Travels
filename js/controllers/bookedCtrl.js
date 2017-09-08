angular.module('devmtnTravel')
.controller('bookedCtrl', function($scope, $stateParams, mainSrv){
  console.log($stateParams);

  // $scope.cur = mainSrv.packageInfo.filter(function(package){
  //   return package.id == $stateParams.id;
  // })[0];

  $scope.cur = mainSrv.packageInfo.filter(package => package.id == $stateParams.id)[0];

  // for-loop
  // $scope.cur = mainSrv.getId($stateParams.id)
})
