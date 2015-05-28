'use strict';

var seeAutors = ['$q', '$resource', '$http', 'FORECASTIO_KEY',
  function($q, $resource, $http, FORECASTIO_KEY) {
  var url = 'https://api.forecast.io/forecast/' + FORECASTIO_KEY + '/';

  var weatherResource = $resource(url, {
    callback: 'JSON_CALLBACK',
  }, {
    get: {
      method: 'JSONP'
    }
  });

  return {
    //getAtLocation: function(lat, lng) {
    getCurrentWeather: function(lat, lng) {
      return $http.jsonp(url + lat + ',' + lng + '?callback=JSON_CALLBACK');
    }
  }
}];
angular.module('starter.services', ['ngResource'])
.factory('Autors', function() {
var autors = [
    { id: 0, name: 'Victor Hugo' , quote1:Music expresses that which cannot be said and on which it is impossible to be silent.
    , quote2: When a woman is talking to you, listen to what she says with her eyes.
    , quote3: Life is the flower for which love is the honey.
    , quote4: Change your opinions, keep to your principles; change your leaves, keep intact your roots.},
    { id: 1, name: 'Thomas Jefferson' , quote1: Nothing can stop the man with the right mental attitude from achieving his goal; nothing on earth can help the man with the wrong mental attitude.
    , quote2: Do you want to know who you are? Don t ask. Act! Action will delineate and define you.
    , quote3: Honesty is the first chapter in the book of wisdom.
    , quote4: In matters of style, swim with the current; in matters of principle, stand like a rock.},
    { id: 2, name: 'Napoleon Bonaparte' , quote1: Great ambition is the passion of a great character. Those endowed with it may perform very good or very bad acts. All depends on the principles which direct them.
    , quote2: Death is nothing, but to live defeated and inglorious is to die daily.
    , quote3: One should never forbid what one lacks the power to prevent.
    , quote4: Religion is what keeps the poor from murdering the rich. }
  ];
  return {
    all: function() {
      return autors;
    },
    get: function(autorsId) {
      // Simple index lookup
      return autors[autorsId];
    }
  }
}).
