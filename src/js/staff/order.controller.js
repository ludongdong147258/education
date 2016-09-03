angular.module('education')
    .controller('StaffOrderController', ['$rootScope', '$scope', '$state', '$ionicPopup', 'StaffService','$stateParams', function($rootScope, $scope, $state, $ionicPopup, StaffService,$stateParams) {

        // 返回
        $scope.back = function() {
            $state.go('personal');
        };
        $scope.displayStates = [true, false];
        if($stateParams.tabIndex){
            $scope.displayStates = [false, true];
        }
        // tab 切换
        $scope.tabChange = function(index) {
            angular.forEach($scope.displayStates, function(val, key) {
                $scope.displayStates[key] = false;
            });
            $scope.displayStates[index] = true;
            if (index) {
                obj.getServiceList();
            } else {
                obj.getEquipmentList();
            }
        };
        $scope.showConfirm = function(item, event) {
            if (item.status == '待上门安装') {
                var myPopup = $ionicPopup.show({
                    template: '硬件安装完成后<br/>请将状态更改为[已完成安装]<br/>如果客户取消安装<br/>请将状态更改为[客户取消]',
                    title: '更改智能硬件上门安装状态',
                    scope: $scope,
                    buttons: [{
                        text: '已完成安装',
                        type: 'button-energized',
                        onTap: function(e) {
                            StaffService.updateEquipmentStatus({
                                id: item.id,
                                status: 2
                            }, function(data) {
                                if (data.success == 'Y') {
                                    obj.getEquipmentList();
                                }
                            }, function(error) {
                                console.error(error);
                            });
                        }
                    }, {
                        text: '客户取消',
                        type: 'button-energized',
                        onTap: function(e) {
                            StaffService.updateEquipmentStatus({
                                id: item.id,
                                status: 3
                            }, function(data) {
                                if (data.success == 'Y') {
                                    obj.getEquipmentList();
                                }
                            }, function(error) {
                                console.error(error);
                            });
                        }
                    }, {
                        text: '关闭',
                        type: 'button-dark'
                    }]
                });
            }
        };
        var obj = {
            getServiceList: function() {
                StaffService.getServiceList({}, function(data) {
                    if (data.success == 'Y') {
                        $scope.serviceList = data.data;
                    }
                }, function(error) {
                    console.error(error);
                });
            },
            getEquipmentList: function() {
                StaffService.getEquipmentList({}, function(data) {
                    if (data.success == 'Y') {
                        $scope.equipmentList = data.data;
                    }
                }, function(error) {
                    console.error(error);
                });
            }
        };
        if($stateParams.tabIndex){
            obj.getServiceList();
        }else {
            obj.getEquipmentList();
        }
    }]);
