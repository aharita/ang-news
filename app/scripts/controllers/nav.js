'use strict';

app.controller('NavCtrl', function ($scope, $location, Post, Auth) {
    $scope.post = {url: 'http://', title: ''};

    $scope.logout = function(){
      return Auth.logout();
    };

    $scope.submitPost = function () {
      Post.create($scope.post).then(function (postId) {
        $scope.post = {url: 'http://', title: 'hello world'};
        //$location.path('/posts/' + postId);
      });
    };

  });
