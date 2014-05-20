'use strict';

app.factory('Post', function($resource){
  return $resource('https://blazing-fire-1307.firebaseIO.com/posts/:id.json');
});
