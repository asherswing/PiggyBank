angular.module('piggybank')
 .config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
   .state('login', {
      url: '/login',
      views: {
        'content': {
          templateUrl: 'templates/login.html'
        }
      }
    })
     .state('selection', {
      url: '/selection',
      views: {
        'content': {
          templateUrl: 'templates/selection.html'
        }
      }
    }) 
    .state('addingmoney', {
      url: '/adding-money',
      views: {
        'content': {
          templateUrl: 'templates/adding-money.html'
        }
      }
    })
    .state('register', {
      url: '/register',
      views: {
        'content': {
          templateUrl: 'templates/register.html'
        }
      }
    });
  $urlRouterProvider.otherwise('/login');
});