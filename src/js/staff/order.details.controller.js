angular.module('education')
    .controller('StaffOrderDetailsController', ['$rootScope', '$scope', '$state', '$ionicPopup','$stateParams','StaffService', function($rootScope, $scope, $state, $ionicPopup,$stateParams,StaffService) {
        // 返回
        $scope.back = function() {
            $state.go('staffOrder');
        };
        $scope.dispalyStates = [true, false, false];
        $scope.tabChange = function(curIndex) {
            angular.forEach($scope.dispalyStates, function(val, index) {
                $scope.dispalyStates[index] = false;
            });
            $scope.dispalyStates[curIndex] = true;
        };
        var obj = {
            getOrderDetails:function(){
                StaffService.getOrderDetails({id:$stateParams.id},function(data){
                    if(data.success == 'Y'){
                        $scope.orderInfo = data.data;
                    }
                });
            }
        };
        obj.getOrderDetails();
        $scope.confirm = function(){
            
        };
    }]);
