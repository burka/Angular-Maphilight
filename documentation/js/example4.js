angular.module('app').controller('example4Controller', function controller(
  $scope, $timeout) {
  $scope.areas = [];
  $timeout(function() {
    $scope.areas = [{
      shape: "rect",
      title: "Rectangle",
      coords: "60,109,277,179"
    }, {
      shape: "circle",
      title: "Circle",
      coords: "377,144, 47"
    }];
  }, 1000)
});
