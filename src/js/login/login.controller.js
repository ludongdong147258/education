angular.module('education')
    .controller('LoginController', ['$rootScope', '$scope', '$state', 'LoginService', 'CONFIG', '$ionicLoading', '$timeout', function($rootScope, $scope, $state, LoginService, CONFIG, $ionicLoading, $timeout) {
        $rootScope.showHeaderBar = false;
        var obj = {
            validateInput: function() {
                if (!$scope.loginInfo.mobile) {
                    $rootScope.showMessage('请输入手机号!');
                    return false;
                };
                if (!$scope.loginInfo.password) {
                    $rootScope.showMessage('请输入密码!');
                    return false;
                };
                return true;
            }
        };
        $scope.loginInfo = {
            type: 'student'
        };
        // 返回
        $scope.back = function() {
            $state.go('news');
        };
        $scope.login = function() {
            var flag = obj.validateInput();
            if (flag) {
                $ionicLoading.show({
                    template: '登录中...'
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
                            $state.go('news', null, {
                                reload: true
                            });
                        }, 1000);
                    } else {
                        $rootScope.showMessage(data.msg);
                    }
                }, function(error) {
                    $ionicLoading.hide();
                    $rootScope.showMessage('登录失败!');
                });
            }
        };
    }]);
