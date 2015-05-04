'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the myApp
 */
angular.module('myApp')
  .controller('TestCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
