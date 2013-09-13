'use strict';

App.controller("MyCtrl1", function ($scope, UtilSrvc) {
    $scope.aVariable = 'anExampleValueWithinScope';
    $scope.valueFromService = UtilSrvc.helloWorld("User");
});

App.controller("UserCtrl", function ($scope, $http) {
  $http({method: 'GET', url: 'http://api.randomuser.me/?seed=greenButterfly'})
    .success(function(users){
      $scope.users = user
      console.log($scope.users)
  })
});

App.controller("PostsCtrl", function ($scope, $http){
  $http({method: 'GET', url: '/data/data.json'}).success(function(post){
    $scope.posts = post; // response data 
    console.log($scope.posts)
  });
});