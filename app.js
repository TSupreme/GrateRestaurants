'use strict';
angular.module('the.grateapp', ['ngRoute'])
.config(['$routeProvider',
    function config($routeProvider) {
      

      $routeProvider.
        when('/', {
          template: 'views/home.html'
        }).
        when('/login', {
          template: 'login.html'
        }).
        when('/contact', {
          template: 'login.html'
        }).
      
        otherwise('/');
    }
  ])

.controller('PropertyController', function PhoneListController($scope) {
  
    $scope.page = 'home';
    
    $scope.SetPage = function (name)
    {
        $scope.page = name;
    };
    
  $scope.setPorperty = function (property)
    {
        $scope.currentProperty = property;
    };
    

    
   
});