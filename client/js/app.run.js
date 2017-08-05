(function() {
  'use strict';

  angular.module('app').run(run);

  run.$inject = ['$rootScope', '$window']

  function run($rootScope, $window) {
    hello.init({
      facebook: 1876037599325617
    }, {
      redirect_uri: 'index.html'
    });
  }
  hello.on('auth.login', function(auth) {

    // Call user information, for the given network
    hello(auth.network).api('me').then(function(r) {
      // Inject it into the container
      var label = document.getElementById('profile_' + auth.network);
      if (!label) {
        label = document.createElement('div');
        label.id = 'profile_' + auth.network;
        document.getElementById('profile').appendChild(label);
      }
      label.innerHTML = '<img src="' + r.thumbnail + '" /> Hey ' + r.name;
    });
  });


}());
