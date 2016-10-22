angular.module('piggybank')
    .controller("SelectionCtrl", function ($scope, $state) {
        
        $scope.cat = 'cau';

        $scope.graphView = function (cat) {
            $scope.labels = ["Cash Fund", "Gloable Shares Fund", "Property Shares Fund"];

            if (cat == 'cau') {
                $scope.data = [120, 300, 60];
            } else if (cat == 'bal') {
                $scope.data = [100, 350, 50];
            } else {
                $scope.data = [200, 50, 150];
            }
            var tot=$scope.data;
            $scope.total=tot[0]+tot[1]+tot[2];
            $scope.color = ['#7fb927', '#46BFBD', '#131717'];
        }
        $scope.graphView('cau');

        $scope.setCat = function (cat) {
            $scope.cat = cat;
            $scope.graphView(cat);
        }

        $scope.backButton = function(){
             $state.go('addingmoney');
        }

        $scope.confirm = function(){
             //$state.go('addingmoney');
        }

    });