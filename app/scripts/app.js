/* global app:true */
'use strict';

var app = angular.module('angNewsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
]);

app.constant('FIREBASE_URL', 'https://blazing-fire-1307.firebaseIO.com/');

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/posts.html',
      controller: 'PostsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
