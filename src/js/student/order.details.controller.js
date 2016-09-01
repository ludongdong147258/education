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
                        $scope.orderInfo = data.data;
                    }
                });
            }
        };
        obj.getOrderInfo();
    }]);
