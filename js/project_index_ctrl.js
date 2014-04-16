angular.module('app.controllers').controller('ProjectIndexCtrl', [
  '$scope',
  function($scope) {
    $scope.projects = [
      {
        name: 'Moving in slow motion for all parties not to reason in the.',
        budget: 1200
      },
      {
        name: 'Injections took affect jason glanced at them squarely they flinched he.',
        budget: 1700
      },
      {
        name: 'Bins and quickly discovered where we have found occurs.',
        budget: 100
      }
    ];

    $scope.qType = '$';
    $scope.changeQueryType = function (type) {
      $scope.qType = type;
      $scope.changeQuery();
    };
    $scope.changeQuery = function () {
      $scope.query = {};
      $scope.query[$scope.qType] = $scope.q;
    };
  }
]);
