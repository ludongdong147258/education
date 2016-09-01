angular.module('education')
    .controller('StaffOrderServiceController', ['$rootScope', '$scope', '$state', '$ionicPopup', 'StaffService','$timeout', function($rootScope, $scope, $state, $ionicPopup, StaffService,$timeout) {
        var obj = {
            getStaticFee: function() {
                StaffService.getStaticFee({}, function(data) {
                    if (data.success == 'Y') {
                        $scope.feeInfo = data.data;
                    }
                });
            }
        };
        obj.getStaticFee();
        $scope.getTeacherFee = function() {
            StaffService.getTeacherFee({
                mobile: $scope.serviceInfo.mobile
            }, function(data) {
                if (data.success == 'Y') {
                    $scope.teacherFee = parseFloat(data.data.extra_server_fee);
                }
            });
        };
        // 返回
        $scope.back = function() {
            $state.go('personal');
        };
        $scope.teacherFee = 0;
        $scope.displayStates = [true, false];
        $scope.serviceInfo = {
            manage_id:$rootScope.user.id,
            total_fee: 0,
            status: 1,
            equipment: 1,
            homework_server: 3,
            prepare_server: 0,
            extra_server: 0
        };
        $scope.createOrder = function() {
            if (!$scope.serviceInfo.mobile) {
                $rootScope.showMessage('手机号不能为空!');
                return;
            }
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
                        var serviceInfo = $scope.serviceInfo,
                            feeInfo = $scope.feeInfo;
                        serviceInfo.total_fee = (feeInfo.equipment_fee * serviceInfo.equipment) + (feeInfo.homework_fee * serviceInfo.homework_server) + (feeInfo.prepare_fee * serviceInfo.prepare_server) + ($scope.teacherFee * serviceInfo.extra_server);
                        StaffService.orderService($scope.serviceInfo, function(data) {
                            if (data.success == 'Y') {
                                $rootScope.showMessage("订单生成成功!");
                                $timeout(function(){
                                    $state.go('staffOrderDetails',{id:data.data.id});
                                },1000);
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
