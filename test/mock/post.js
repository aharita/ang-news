var PostMock = inject(function($q) {
  this.create = function() {
    var deferred = $q.defer();
    deferred.resolve();
    return deferred.promise;
  };
});
