angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('Autors', {
    url: '/1',
    templateUrl: 'Autors.html'
  })
  .state('VictorHugo', {
    url: '/2',
    templateUrl: 'VictorHugo.html'
  })
  .state('ThomasJefferson', {
    url: '/3',
    templateUrl: 'ThomasJefferson.html'
  })
  .state('NapoleonBonaparte', {
    url: '/4',
    templateUrl: 'NapoleonBonaparte.html'
  })

  $urlRouterProvider.otherwise("/1");
})

.controller('NapoleonBonaparteCtrl', function($scope) {

})
