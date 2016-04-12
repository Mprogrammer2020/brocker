angular.module('App', ['ionic', 'firebase'])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'views/home/home.html'   
    })
    
    .state('login', {
      url: '/login',
      templateUrl: 'views/login/login.html',
      controller: 'LoginCtrl'
    })

    .state('forget-password', {
      url: '/forget-password',
      templateUrl: 'views/forget-password/forget-password.html'   
    })

    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact/contact.html'    
    })

    .state('learn', {
      url: '/learn',
      templateUrl: 'views/learn/learn.html'     
    })

    .state('search', {
      url: '/search',
      templateUrl: 'views/search/search.html'    
    })
    
    .state('search_result', {
      url: '/search_result',
      templateUrl: 'views/search_result/search_result.html'    
    })

     .state('select_accredition',{
      url: '/select_accredition',
      templateUrl: 'views/select_accredition/select_accredition.html'    
    })

    .state('selected_business',{
      url: '/selected_business',
      templateUrl: 'views/selected_business/selected_business.html'     
    })
    .state('select_again',{
      url: '/select_again',
      templateUrl: 'views/select_again/select_again.html'     
    })
    .state('submission',{
      url: '/submission',
      templateUrl: 'views/submission/submission.html'     
    })

    .state('contact_form',{
      url: '/contact_form',
      templateUrl: 'views/contact_form/contact_form.html' 

    })

    .state('logout',{
      url: '/logout',
      templateUrl: 'views/logout/logout.html'     
    })

    .state('home_page',{
      url: '/home_page',
      templateUrl: 'views/home_page/home_page.html'     
    })

    .state('my_quotes',{
      url: '/my_quotes',
      templateUrl: 'views/my_quotes/my_quotes.html'     
    })

    .state('new_quote',{
      url: '/new_quote',
      templateUrl: 'views/new_quote/new_quote.html'  
    })

    .state('current_quote',{
      url: '/current_quote',
      templateUrl: 'views/current_quote/current_quote.html'  
    })

    .state('calculated_result',{
      url: '/calculated_result',
      templateUrl: 'views/calculated_result/calculated_result.html'  
    })
    
    .state('all',{
      url: '/all',
      templateUrl: 'views/all/all.html'  
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
});


