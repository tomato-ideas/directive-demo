angular.module('app.controllers').controller('UserIndexCtrl', [
  '$scope',
  function($scope) {
    $scope.users = [
      {
        name: 'Jan J',
        age: 40
      },
      {
        name: 'Phat W',
        age: 26
      },
      {
        name: 'Chai J',
        age: 28
      }
    ];
  }
]);
