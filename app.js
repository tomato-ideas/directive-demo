angular.module('app', [
  'ngRoute',
  'app.controllers',
  'app.directives',
  'app.filters',
  'app.services'
]);

angular.module('app.controllers', []);
angular.module('app.directives', []);
angular.module('app.filters', []);
angular.module('app.services', []);

angular.module('app').config([
  '$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      controller: 'ProjectIndexCtrl',
      templateUrl: 'project.html'
    })
  }
]);

