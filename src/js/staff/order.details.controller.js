angular.module('education')
    .controller('StaffOrderDetailsController', ['$rootScope', '$scope', '$state', '$ionicPopup', '$stateParams', 'StaffService', '$timeout', function($rootScope, $scope, $state, $ionicPopup, $stateParams, StaffService, $timeout) {
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
            getOrderDetails: function() {
                StaffService.getOrderDetails({
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
        obj.getOrderDetails();
        $scope.confirm = function() {
            var confirmPopup = $ionicPopup.confirm({
                title: '提示',
                template: '您确定已收款?',
                cancelText: '取消',
                cancelType: 'button-dark',
                okText: '确定',
                okType: 'button-energized'
            });
            confirmPopup.then(function(res) {
                if (res) {
                    StaffService.authOrder({
                        id: $stateParams.id,
                        status: 2
                    }, function(data) {
                        if (data.success == 'Y') {
                            $rootScope.showMessage('收款成功!');
                            $timeout(function() {
                                $state.go('staffOrder');
                            }, 1000);
                        }
                    });
                }
            });
        };
    }]);
