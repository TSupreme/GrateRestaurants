'use strict';
var module = angular.module('grateapp', ['ngRoute'])
.config(['$routeProvider',
    function config($routeProvider) {
      

      $routeProvider
          .when('/', {
          template: 'views/home.html'
        })
          .when('/login', {
          template: 'views/login.html'
        })
          .when('/register', {
          template: 'views/register.html'
        })
          .otherwise('/');
    }
  ])

.controller('PropertyController', function PhoneListController($scope) 
            {
  
    $scope.page = 'home';
    
    $scope.SetPage = function (name)
    {
        $scope.page = name;
    };
    
  $scope.setPorperty = function (property)
    {
        $scope.currentProperty = property;
    };
})
    
.controller('SidebarController', function($scope) 
            {
    
    $scope.state = false;
    
    $scope.toggleState = function() {
        $scope.state = !$scope.state;
    };
    
})

.directive('sidebarDirective', function() {
    return {
        link : function(scope, element, attr) {
            scope.$watch(attr.sidebarDirective, function(newVal) {
                  if(newVal)
                  {
                    element.addClass('show'); 
                    return;
                  }
                  element.removeClass('show');
            });
        }
    };
});
    
    
   
