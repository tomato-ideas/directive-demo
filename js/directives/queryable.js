angular.module('app.directives').directive('queryable', [
  function() {
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function(scope, elem, attrs, ngModel) {
        scope.qType = '$';

        scope.changeQueryType = function (type) {
          scope.qType = type;
          scope.changeQuery();
        };

        scope.changeQuery = function () {
          value = {};
          value[scope.qType] = elem.find('input').val();
          ngModel.$setViewValue(value);
        }
      }
    };
  }
]);
