angular.module('education')
    .controller('StaffOrderServiceController', ['$rootScope', '$scope', '$state', '$ionicPopup', 'StaffService','$timeout','ValidateService', function($rootScope, $scope, $state, $ionicPopup, StaffService,$timeout,ValidateService) {
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
            if (!$scope.serviceInfo.mobile) {
                $rootScope.showMessage('手机号不能为空!');
                return;
            }
            if(!ValidateService.checkPhone($scope.serviceInfo.mobile)){
                $rootScope.showMessage('手机号码格式不正确!');
                return;
            }
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
            if(!ValidateService.checkPhone($scope.serviceInfo.mobile)){
                $rootScope.showMessage('手机号码格式不正确!');
                return;
            }
            $ionicPopup.show({
                template: '1、智能硬件提供给使用者使用,采取押金方式提供;<br/>2、3个月内,硬件没有大的人为损害,使用者无条件自由退换押金;<br/>3、使用者长期使用期间,硬件产品的换代升级,提供新的硬件产品,为全免费置换模式;使用者无需另行支付或增加押金额;<br/>4、使用满1年后,使用者不再有硬件使用需求,在硬件产品没有大的人为损害情况下,且硬件产品具备使用条件,使用者可申请退换押金;<br/>5、智能硬件产品实行三年质保,终生保修(质保指由于质量缺陷造成的设备无法正常使用);',
                title: '智能硬件产品质保及押金使用模式说明',
                cssClass:'service-popup',
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
