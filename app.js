var app = angular.module('marioNews', []);

// posts service
app.factory('posts', [function(){
    var o = {
        posts: []
    };
    return o;
}])

app.controller('MainCtrl', [
    '$scope', 
    'posts',
    function($scope, posts) {
    
    // $scope variable
    $scope.test = 'Hello Marius!';
    // bind $scope.posts variable to the posts array in the posts service
    $scope.posts = posts.posts;

    // add new post
    $scope.addPost = function(){
    	if (!$scope.title || $scope.title === '') {
    		return;
    	};
    	$scope.posts.push({
            title: $scope.title,
            link: $scope.link, 
            upvotes: 0});
    	$scope.title = '';
        $scope.link = '';
    }

    // upvoting an existing post
    $scope.incrementUpvotes = function(post) {
    	post.upvotes += 1;
    }
}])