angular.module('education')
    .controller('StudentOrderHardWareController', ['$rootScope', '$scope', '$state', 'StudentService', '$stateParams', '$timeout','ValidateService',function($rootScope, $scope, $state, StudentService, $stateParams, $timeout,ValidateService) {
        // 返回
        $scope.back = function() {
            localStorage.removeItem('hardwareInfo');
            $state.go('personal');
        };
        $scope.hardwareInfo = {
            recommend_type: 1
        };
        $scope.displayStates = [true, false];
        var id = $stateParams.id;

        if(id){
            $scope.name = $stateParams.name;
            $scope.hardwareInfo.recommend_type = 2;
            $scope.displayStates = [false, true];
        }
        // 免费预约
        $scope.saveOrder = function() {
            var flag = obj.validateInput();
            if (flag) {
                if (!$scope.hardwareInfo.mobile) {
                    $scope.hardwareInfo.mobile = parseInt($rootScope.user.mobile);
                }
                $scope.hardwareInfo.address_id = $scope.city.id;
                $scope.hardwareInfo.member_type = $rootScope.user.role;
                if(id){
                    $scope.hardwareInfo.teacher_id = id;
                }
                StudentService.orderHardWare($scope.hardwareInfo, function(data) {
                    if (data.success == 'Y') {
                        localStorage.removeItem('hardwareInfo');
                        $rootScope.showMessage('预定申请已受理,我们的工作人员将在您指定的日期电话联系您并上门为您安装智能硬件!', 5000);
                        $timeout(function() {
                            $state.go('personal');
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
                        var hardwareInfo = localStorage.getItem('hardwareInfo');
                        if(hardwareInfo){
                            $scope.hardwareInfo = angular.fromJson(hardwareInfo);
                            angular.forEach($scope.provinces,function(val,index){
                                if(val.key == $scope.hardwareInfo.province.key){
                                    $scope.province = $scope.provinces[index];
                                    return;
                                }
                            });
                            $scope.changeProvince($scope.province);
                            angular.forEach($scope.cities,function(val,index){
                                if(val.key == $scope.hardwareInfo.city.key){
                                    $scope.city = $scope.cities[index];
                                    return;
                                }
                            });
                            $scope.hardwareInfo.time = new Date($scope.hardwareInfo.time);
                        } else {
                            $scope.province = {key:''};
                            $scope.city = {
                                key: '',
                                id: ''
                            };
                        }
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
                if(!ValidateService.checkAddress(hardwareInfo.address_detail)){
                    $rootScope.showMessage("地址5-30个字符!");
                    return false;
                }
                if (!hardwareInfo.link_name) {
                    $rootScope.showMessage("联系人姓名不能为空!");
                    return false;
                }
                if(!ValidateService.checkName(hardwareInfo.link_name)){
                    $rootScope.showMessage("联系人姓名2-7个中文字符!");
                    return false;
                }
                if(hardwareInfo.mobile){
                    if(!ValidateService.checkPhone(hardwareInfo.mobile)){
                        $rootScope.showMessage("电话号码格式不正确!");
                        return false;
                    }
                }
                if ($scope.hardwareInfo.recommend_type == 2) {
                    if (!$scope.name) {
                        $rootScope.showMessage("所选老师不能为空!");
                        return false;
                    }
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
        $scope.changeType = function(num) {
            $scope.hardwareInfo.recommend_type = num;
            if (num == 1) {
                $scope.displayStates = [true, false];
            } else {
                $scope.displayStates = [false, true];
                $state.go('search',{type:'student'});
                $scope.hardwareInfo.province = $scope.province;
                $scope.hardwareInfo.city = $scope.city;
                localStorage.setItem('hardwareInfo',JSON.stringify($scope.hardwareInfo));
            }
        };
    }]);
