angular.module('App', ['ionic', 'firebase'])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'views/home/home.html',    
    })
    .state('login', {
      url: '/login',
      templateUrl: 'views/login/login.html',    
    })
    .state('forget-password', {
      url: '/forget-password',
      templateUrl: 'views/forget-password/forget-password.html',    
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact/contact.html',     
    })
    .state('learn', {
      url: '/learn',
      templateUrl: 'views/learn/learn.html',     
    })
    .state('search', {
      url: '/search',
      templateUrl: 'views/search/search.html',     
    })
    .state('search_result', {
      url: '/search_result',
      templateUrl: 'views/search_result/search_result.html',     
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


