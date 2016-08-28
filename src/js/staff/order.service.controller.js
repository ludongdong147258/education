angular.module('education')
    .controller('StaffOrderServiceController', ['$rootScope', '$scope', '$state', '$ionicPopup', 'StaffService', function($rootScope, $scope, $state, $ionicPopup, StaffService) {
        $rootScope.showHeaderBar = false;
        // 返回
        $scope.back = function() {
            window.history.back();
        };
        $scope.displayStates = [true, false];
        $scope.serviceInfo = {
            equipment: 1,
            homework_server: 3,
            prepare_server: 0,
            extra_server: 0
        };
        $scope.createOrder = function() {
            $ionicPopup.show({
                template: '1、智能硬件产品质智能硬件产品质保及押金使用模式说明智能硬件产',
                title: '智能硬件产品质保及押金使用模式说明',
                scope: $scope,
                buttons: [{
                    text: '取消',
                    type: 'button-dark'
                }, {
                    text: '确认并同意协议',
                    type: 'button-energized',
                    onTap: function(e) {
                        StaffService.orderService($scope.serviceInfo, function(data) {
                            if (data.success == 'Y') {
                                $rootScope.showMessage("")
                            }
                        });
                    }
                }]
            });
        };
        $scope.changeFDYPrice = function(num) {
            $scope.serviceInfo.equipment = num;
            if (num) {
                $scope.displayStates = [true, false];
            } else {
                $scope.displayStates = [false, true];
            }
        };
        $scope.changeZYPrice = function(num) {
            var count = $scope.serviceInfo.homework_server;
            if (num) {
                count += num;
            } else {
                if (count > 3) {
                    count -= 1;
                } else {
                    $rootScope.showMessage('不能少于3个月!');
                }
            }
            $scope.serviceInfo.homework_server = count;
        };
        $scope.changeFYPrice = function(num) {
            var count = $scope.serviceInfo.prepare_server;
            if (num) {
                count += num;
            } else {
                if (count > 0) {
                    count -= 1;
                } else {
                    $rootScope.showMessage('不能少于0个月!');
                }
            }
            $scope.serviceInfo.prepare_server = count;
        };
        $scope.changeBYPrice = function(num) {
            var count = $scope.serviceInfo.extra_server;
            if (num) {
                count += num;
            } else {
                if (count > 0) {
                    count -= 1;
                } else {
                    $rootScope.showMessage('不能少于0小时!');
                }
            }
            $scope.serviceInfo.extra_server = count;
        };
    }]);
