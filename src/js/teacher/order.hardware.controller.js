angular.module('education')
    .controller('TeacherOrderHardWareController', ['$rootScope', '$scope', '$state', '$timeout', 'StudentService', function($rootScope, $scope, $state, $timeout, StudentService) {
        // 返回
        $scope.back = function() {
            $state.go('news');
        };
        // 免费预约
        $scope.saveOrder = function() {
            var flag = obj.validateInput();
            if(flag){
                if (!$scope.hardwareInfo.mobile) {
                    $scope.hardwareInfo.mobile = parseInt($rootScope.user.mobile);
                }
                $scope.hardwareInfo.address_id = $scope.city.id;
                $scope.hardwareInfo.member_type = $rootScope.user.role;
                StudentService.orderHardWare($scope.hardwareInfo, function(data) {
                    if (data.success == 'Y') {
                        $rootScope.showMessage('预定申请已受理,我们的工作人员将在您指定的日期电话联系您并上门为您安装智能硬件!', 5000);
                        $timeout(function() {
                            $state.go('news');
                        }, 3000);
                    } else {
                        angular.forEach(data.msg, function(val, key) {
                            $rootScope.showMessage(data.msg[key]);
                        });
                    }
                }, function(error) {
                    console.error(error);
                    $rootScope.showMessage('预定失败!');
                });
            }
        };
        $scope.hardwareInfo = {recommend_type:1};
        var addresses = [];
        $scope.provinces = [];
        $scope.cities = [];
        var obj = {
            getAddressList: function() {
                StudentService.getAddressList({}, function(data) {
                    if (data.success == 'Y') {
                        addresses = data.data;
                        var tempKey = '';
                        angular.forEach(data.data, function(item, index) {
                            if (tempKey != item.province) {
                                $scope.provinces.push({
                                    key: item.province
                                });
                                tempKey = item.province;
                            }
                        });
                    }
                }, function(error) {
                    console.log(error);
                });
            },
            validateInput: function() {
                var hardwareInfo = $scope.hardwareInfo;
                if (!hardwareInfo.time) {
                    $rootScope.showMessage("日期不能为空!");
                    return false;
                }
                if (!$scope.province.key) {
                    $rootScope.showMessage("省份不能为空!");
                    return false;
                }
                if (!$scope.city.key) {
                    $rootScope.showMessage("城市不能为空!");
                    return false;
                }
                if (!hardwareInfo.address_detail) {
                    $rootScope.showMessage("上门安装地址不能为空!");
                    return false;
                }
                if (!hardwareInfo.link_name) {
                    $rootScope.showMessage("联系人姓名不能为空!");
                    return false;
                }
                return true;
            }
        };
        obj.getAddressList();
        $scope.changeProvince = function(curItem) {
            $scope.province = curItem;
            $scope.cities = [];
            angular.forEach(addresses, function(item) {
                if (item.province == curItem.key) {
                    $scope.cities.push({
                        key: item.city,
                        id: item.id
                    });
                }
            });
        };
        $scope.changeCity = function(curItem) {
            $scope.city = curItem;
        };
    }]);
