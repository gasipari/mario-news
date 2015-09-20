var app = angular.module('marioNews', []);

app.controller('MainCtrl', ['$scope', function($scope) {
    
    // $scope variable
    $scope.test = 'Hello Marius!';
    $scope.posts = [{
        title: 'post 1',
        upvotes: 5
    }, {
        title: 'post 2',
        upvotes: 2
    }, {
        title: 'post 3',
        upvotes: 15
    }, {
        title: 'post 4',
        upvotes: 9
    }, {
        title: 'post 5',
        upvotes: 4
    }];

    // add new post
    $scope.addPost = function(){
    	if (!$scope.title || $scope.title === '') {
    		return;
    	};
    	$scope.posts.push({title: $scope.title, upvotes: 0});
    	$scope.title = '';
    }
}])