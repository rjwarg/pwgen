'use strict';

/**
 * @ngdoc overview
 * @name pwgenApp
 * @description
 * # pwgenApp
 *
 * Main module of the application.
 */
angular
  .module('pwgenApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/pwgen', {
        templateUrl: 'views/pwgen.html',
        controller: 'PwgenCtrl',
        controllerAs: 'pwgen'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
