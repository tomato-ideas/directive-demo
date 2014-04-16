angular.module('app.directives').directive('queryable', [
  function() {
    return {
      restrict: 'E',
      require: 'ngModel',
      templateUrl: '../../templates/queryable.html',
      link: function(scope, elem, attrs, ngModel) {
        scope.keys = attrs.keys.split(',');
        scope.qType = '$';

        var changeQuery = function () {
          value = {};
          value[scope.qType] = elem.find('input').val();

          scope.$apply(function () {
            ngModel.$setViewValue(value);
          });
        };

        elem.find('ul').on('click', 'a', function (e) {
          e.preventDefault();
          var $el = $(e.target);
          elem.find('button .text').text($el.text());
          elem.find('li').removeClass('active');
          $el.parent().addClass('active');
          scope.qType = $el.data('q');

          changeQuery();
        });

        elem.find('input').on('keyup', function (e) {
          changeQuery();
        });
      }
    };
  }
]);
