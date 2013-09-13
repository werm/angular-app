var newConfig = function($routeProvider) { 
	$routeProvider
		.when('/view1', {
			 templateUrl: 'view/view1.html'
		})
		.when('/view2', {
			 templateUrl: 'view/view2.html'
		})
    .when('/posts', {
       templateUrl: 'view/postsView.html',
       controller: 'PostsCtrl'
    })
		.otherwise({redirectTo : 'view1'});
};

var App = angular.module('App',[]).config(newConfig);

