angular.module('piggybank')
    .controller("AddingMoneyCtrl", function ($scope, $state, $ionicPopup ,$ionicModal) {

        $scope.money = '100'

        $scope.popup = $ionicPopup.show({
            templateUrl: 'templates/popup.html',
            cssClass: 'upload-popup',
            title: '',
            scope: $scope
        });

        $scope.next = function () {
            $state.go('selection');
        }

        /***********************************
         Help modal
        ************************************/
        $ionicModal.fromTemplateUrl('templates/popup-second.html', {
            scope: $scope,  
            animation: '   fade-in'
        }).then(function (modal) {
            $scope.modal = modal;
        });
        $scope.openModal = function () {
            $scope.modal.show();
        };
        $scope.closeModal = function () {
            $scope.modal.hide();
        };
        // Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function () {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function () {
            // Execute action
        });

        $scope.moneyClick = function (val) {
            $scope.money = val    
            if(val== 'cus'){
                $scope.openModal()
            }
        }
 
    });