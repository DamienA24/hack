'use strict';

angular.module('app')

  .service('WebcamService', function ($http, $q) {

    this.getWebcams = (lat, lng, radius) => {
      let defer = $q.defer();
      const API_URL = `https://webcamstravel.p.mashape.com/webcams/list/nearby=${lat},${lng},${radius}`;

      $http.get(API_URL,{
        headers : {'X-Mashape-Key': 'NtcDcoaAifmsh9283hqEAHwtpxipp1Pkw16jsnG5k6sQKpSLbg'}
        
      }).then((response) => {
        defer.resolve(response.data);
        console.log(response);
      }).catch((error) => {
        defer.reject(error.statusText);
      });
      return defer.promise;
    }
  });