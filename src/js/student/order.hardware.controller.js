angular.module('education')
    .controller('StudentOrderHardWareController', ['$rootScope', '$scope', '$state', 'StudentService','$stateParams', function($rootScope, $scope, $state, StudentService,$stateParams) {
        $rootScope.showHeaderBar = false;
        // 返回
        $scope.back = function() {
            $state.go('home');
        };
        if(localStorage.getItem('hardwareInfo')){
            $scope.hardwareInfo = JSON.parse(localStorage.getItem('hardwareInfo'));
            if($scope.hardwareInfo.time) {
                $scope.hardwareInfo.time = new Date($scope.hardwareInfo.time);
            }
            if($scope.hardwareInfo.province){
                $scope.province = $scope.hardwareInfo.province;
            }
            if($scope.hardwareInfo.city){
                $scope.city = $scope.hardwareInfo.city;
            }
        } else {
            $scope.hardwareInfo = {recommend_type:1};
            $scope.displayStates = [true,false];
            $scope.province = {
                key: ''
            };
            $scope.city = {
                key: '',
                id: ''
            };
        }
        var id = $stateParams.id;
        $scope.name = $stateParams.name;
        if(id){
            $scope.hardwareInfo.recommend_type = 2;
        }
        if($scope.hardwareInfo.recommend_type == 2){
            $scope.displayStates = [false,true];
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
                $scope.hardwareInfo.teacher_id = id;
                StudentService.orderHardWare($scope.hardwareInfo, function(data) {
                    if (data.success == 'Y') {
                        $rootScope.showMessage('预定申请已受理,我们的工作人员将在您指定的日期电话联系您并上门为您安装智能硬件!');
                        $state.go('home');
                        localStorage.removeItem('hardwareInfo');
                    }
                }, function(error) {
                    console.error(error);
                    $rootScope.showMessage('预定失败!');
                    localStorage.removeItem('hardwareInfo');
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
                if($scope.hardwareInfo.member_type == 2){
                    if(!$scope.name){
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
                    });}
            });
        };
        $scope.changeCity = function(curItem) {
            $scope.city = curItem;
        };
        $scope.changeType = function(num) {
            $scope.hardwareInfo.recommend_type = num;
            if(num == 1){
                $scope.displayStates = [true,false];
            }else{
                $scope.displayStates = [false,true];
                $scope.hardwareInfo.province = $scope.province;
                $scope.hardwareInfo.city = $scope.city;
                localStorage.setItem('hardwareInfo',JSON.stringify($scope.hardwareInfo));
            }
        };
    }]);