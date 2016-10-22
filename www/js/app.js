// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app=angular.module('piggybank', ['ionic','ui.router','chart.js','ionic-material', 'ionMdInput'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
app.config(function (ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
      colors: ['#7fb927', '#131717', '#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']
    });
    // Configure all doughnut charts
    ChartJsProvider.setOptions('doughnut', {
      cutoutPercentage: 60
    });
    ChartJsProvider.setOptions('bubble', {
      tooltips: { enabled: false }
    });
  });



