angular.module('piggybank').controller("loginCtrl", function ($scope,$state) {

  $scope.login=function(){
           $state.go('addingmoney');
  }
});