angular.module('App', ['ionic', 'firebase'])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'views/home/home.html',
      
    });

  $urlRouterProvider.otherwise('/');
})

.run(function($ionicPlatform, $location) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  var firstVisit = localStorage.getItem('firstVisit');
  if (!firstVisit) {
    $location.url('/');
  }
})


