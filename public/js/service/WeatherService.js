'use strict';

angular.module('app')

  .service('WeatherService', function ($http, $q) {

    const KEY = 'e91d047936881c8d8bb518b45e246fa2';

    this.getCity = (city) => {
      let defer = $q.defer();
      const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${KEY}`;

      $http.get(API_URL).then((response) => {
        defer.resolve(response.data);
      }).catch((error) => {
        defer.reject(error.statusText);
      });
      return defer.promise;
    }
  });