angular.module('myApp').factory('AuthService',
  ['$q', '$timeout', '$http',
    function ($q, $timeout, $http) {

      // create user variable
      var user = null;

      // return available functions for use in the controllers
      return ({
        isLoggedIn: isLoggedIn,
        getUserStatus: getUserStatus,
        login: login,
        logout: logout,
        register: register
      });

      function isLoggedIn() {
        if (user) {
          return true;
        } else {
          return false;
        }
      }

      function getUserStatus() {
        return $http.get('/user/status')
          // handle success
          .then(function (response) {
            var data = response.data;
            if (data.status) {
              user = true;
            } else {
              user = false;
            }
          })
          // handle error
          .catch(function (response) {
            var data = response.data;
            user = false;
          });
      }

      function login(username, password) {

        // create a new instance of deferred
        var deferred = $q.defer();

        // send a post request to the server
        $http.post('/user/login', {
            username: username,
            password: password
          })
          // handle success
          .then(function (response) {
            var status = response.status;
            var data = response.data;
            if (status === 200 && data.status) {
              user = true;
              deferred.resolve();
            } else {
              user = false;
              deferred.reject();
            }
          })
          // handle error
          .catch(function (response) {
            var data = response.data;
            user = false;
            deferred.reject();
          });

        // return promise object
        return deferred.promise;

      }

      function logout() {

        // create a new instance of deferred
        var deferred = $q.defer();

        // send a get request to the server
        $http.post('/user/logout', {
            cache: false
          })
          // { headers: {'Cache-Control' : 'no-cache'} }

          // handle success
          .then(function (response) {
            var data = response.data;
            user = false;
            deferred.resolve();
          })
          // handle error
          .catch(function (response) {
            var data = response.data;
            user = false;
            deferred.reject();
          });

        // return promise object
        return deferred.promise;

      }

      function register(username, password) {

        // create a new instance of deferred
        var deferred = $q.defer();

        // send a post request to the server
        $http.post('/user/register', {
          username: username,
          password: password
        })
          // handle success
          .then(function (response) {
            var data = response.data;
            var status = response.status;
            if (status === 200 && data.status) {
              deferred.resolve();
            } else {
              deferred.reject();
            }
          })
          // handle error
          .catch(function (response) {
            var data = response.data;
            deferred.reject();
          });

        // return promise object
        return deferred.promise;

      }

    }
  ]);
