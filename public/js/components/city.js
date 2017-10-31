'use strict';

angular.module('app')

  .component('city', {

    templateUrl: 'js/components/city.html',

    controller: function (WeatherService, WebcamService) {

      this.getCity = (city) => {

        WeatherService.getCity(city).then((weather) => {
          this.weather = weather;
          return WebcamService.getWebcams(weather.coord.lat, weather.coord.lon, 20);
        }).then((webcams)=>{
          this.webcams = webcams;
        }).catch((error) => {
          this.error = error;
        });
      }
    }
  });