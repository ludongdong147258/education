angular.module('education')
    .controller('FindpwdController', ['$rootScope', '$scope', '$state', 'FindpwdService', '$timeout', 'RegisterService','ValidateService', function($rootScope, $scope, $state, FindpwdService, $timeout, RegisterService,ValidateService) {
        $rootScope.showHeaderBar = false;
        $scope.findpwdInfo = {};
        var obj = {
            validateInput: function() {
                if (!$scope.findpwdInfo.mobile) {
                    $rootScope.showMessage('请输入手机号!');
                    return false;
                }
                if(!ValidateService.checkPhone($scope.findpwdInfo.mobile)){
                    $rootScope.showMessage('手机号码格式不正确!');
                    return false;
                }
                if (!$scope.findpwdInfo.smscode) {
                    $rootScope.showMessage('请输入验证码!');
                    return false;
                }
                if(!ValidateService.checkSmsCode($scope.findpwdInfo.smscode)){
                    $rootScope.showMessage('短信验证码格式不正确!');
                    return false;
                }
                if (!$scope.findpwdInfo.password) {
                    $rootScope.showMessage('请输入新密码!');
                    return false;
                }
                if(!ValidateService.checkPwd($scope.findpwdInfo.password)){
                    $rootScope.showMessage('密码必须是6-10位字母、数字组合!');
                    return false;
                }
                return true;
            }
        };
        var count = 60,
            timerId = null;
        $scope.btnState = false;
        $scope.count = count;
        // 返回
        $scope.back = function() {
            $state.go('login');
        };
        $scope.saveNewPwd = function() {
            var flag = obj.validateInput();
            if (flag) {
                FindpwdService.saveNewPwd($scope.findpwdInfo, function(data) {
                    if (data.success == 'Y') {
                        $rootScope.showMessage('保存成功!');
                        $timeout(function() {
                            $state.go('login');
                        }, 1000);
                    }
                }, function(error) {
                    $rootScope.showMessage('保存失败!');
                });
            }
        };
        // 获取验证码
        $scope.getSmsCode = function() {
            if (!$scope.findpwdInfo.mobile) {
                $rootScope.showMessage('请填写手机号!');
                return false;
            }
            if(!ValidateService.checkPhone($scope.findpwdInfo.mobile)){
                $rootScope.showMessage('手机号码格式不正确!');
                return false;
            }
            $scope.btnState = true;
            RegisterService.getSmsCode({
                mobile: $scope.findpwdInfo.mobile
            }, function(data) {
                if (data.success == 'Y') {
                    reduceCount();
                    $rootScope.showMessage('验证码发送成功!');
                }
            }, function(error) {
                $rootScope.showMessage('验证码发送失败!');
                console.log(error);
            });
        };

        function reduceCount() {
            $scope.count = count;
            if (count == 0) {
                $scope.btnState = false;
                $timeout(timerId);
                return;
            }
            count--;
            timerId = $timeout(reduceCount, 1000);
        }
    }]);
