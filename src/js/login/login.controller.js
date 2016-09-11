angular.module('education')
    .controller('LoginController', ['$rootScope', '$scope', '$state', 'LoginService', 'CONFIG', '$ionicLoading', '$timeout', 'ValidateService', function($rootScope, $scope, $state, LoginService, CONFIG, $ionicLoading, $timeout, ValidateService) {
        if ($rootScope.user) {
            $state.go('personal', null, {
                reload: true
            });
        }
        var obj = {
            validateInput: function() {
                if (!$scope.loginInfo.mobile) {
                    $rootScope.showMessage('请输入手机号!');
                    return false;
                };
                if (!ValidateService.checkPhone($scope.loginInfo.mobile)) {
                    $rootScope.showMessage('手机号码格式不正确!');
                    return false;
                }
                if (!$scope.loginInfo.password) {
                    $rootScope.showMessage('请输入密码!');
                    return false;
                };
                if (!ValidateService.checkPwd($scope.loginInfo.password)) {
                    $rootScope.showMessage('密码必须是6-10位字母、数字组合!');
                    return false;
                }
                return true;
            }
        };
        $scope.loginInfo = {
            type: 'student'
        };
        // 返回
        $scope.back = function() {
            $state.go('home');
        };
        $scope.login = function() {
            var flag = obj.validateInput();
            if (flag) {
                $ionicLoading.show({
                    template: '<ion-spinner icon="ios-small"></ion-spinner>&nbsp;登录中...'
                });
                LoginService.login($scope.loginInfo, function(data) {
                    if (data.success == 'Y') {
                        $ionicLoading.hide();
                        CONFIG.token = data.data.token;
                        $rootScope.showMessage('登录成功!');
                        var user = data.data.user;
                        user.role = $scope.loginInfo.type;
                        localStorage.setItem("token", data.data.token);
                        localStorage.setItem("user", JSON.stringify(user));
                        CONFIG.user = user;
                        $rootScope.user = user;
                        $timeout(function() {
                            $state.go('personal', null, {
                                reload: true
                            });
                        }, 1000);
                    } else {
                        $ionicLoading.hide();
                        $rootScope.showMessage(data.msg);
                    }
                }, function(error) {
                    $ionicLoading.hide();
                    $rootScope.showMessage('登录失败!');
                });
            }
        };
    }]);
