angular.module('userProfiles').controller('mainController', function($scope, mainService) {

    $scope.getUsers = function() {
      $scope.getUsers = mainService.getUsers();
    }

    $scope.getUsers();






});
