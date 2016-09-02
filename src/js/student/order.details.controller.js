angular.module('education')
    .controller('StudentOrderDetailsController', ['$rootScope', '$scope', '$state', '$stateParams', 'StudentService', function($rootScope, $scope, $state, $stateParams, StudentService) {
        // 返回
        $scope.back = function() {
            $state.go('studentOrder');
        };
        $scope.dispalyStates = [true, false];
        $scope.tabChange = function(curIndex) {
            angular.forEach($scope.dispalyStates, function(val, index) {
                $scope.dispalyStates[index] = false;
            });
            $scope.dispalyStates[curIndex] = true;
        };
        var obj = {
            getOrderInfo: function() {
                StudentService.getOrderDetails({
                    id: $stateParams.id
                }, function(data) {
                    if (data.success == 'Y') {
                        var data = data.data;
                        if(data.status == '1'){
                            data.statusDisplay = '待支付';
                        }else if(data.status == '2'){
                            data.statusDisplay = '已支付';
                        }
                        $scope.orderInfo = data;
                    }
                });
            }
        };
        obj.getOrderInfo();
    }]);
