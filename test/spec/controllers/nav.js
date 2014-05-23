'use strict';

describe('Controller: NavCtrl', function () {

  var scope;

  beforeEach(function() {
    module('angNewsApp');

    inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      $controller('NavCtrl', {
        $scope: scope,
        $location: {},
        Post: new PostMock(),
        Auth: new AuthMock()
      });
    });
  });

  it('should have a scope with a default post', function () {
    expect(scope.post.url).toBe('http://');
    expect(scope.post.title).toBe('');
  });

  it('should return true when calling logout', function () {
    expect(scope.logout()).toBe(true);
  });

  it('should do stuff when calling submitPost', function () {
    scope.submitPost();

    scope.$apply();

    expect(scope.post.url).toBe('http://');
    expect(scope.post.title).toBe('hello world');
  });
});
