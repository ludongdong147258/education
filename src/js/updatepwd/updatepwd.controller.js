angular.module('education')
    .controller('UpdatepwdController', ['$rootScope', '$scope', '$state', 'UpdatepwdService', '$timeout', 'ValidateService', function($rootScope, $scope, $state, UpdatepwdService, $timeout, ValidateService) {
        $rootScope.showHeaderBar = false;
        $scope.pwdInfo = {};
        $scope.back = function() {
            $state.go('personal');
        };
        var obj = {
            validateInput: function() {
                var pwdInfo = $scope.pwdInfo;
                if (!pwdInfo.password) {
                    $rootScope.showMessage('请输入原密码!');
                    return false;
                }
                if (!ValidateService.checkPwd(pwdInfo.password)) {
                    $rootScope.showMessage('密码必须是6-10位字母、数字组合!');
                    return false;
                }
                if (!pwdInfo.pwd1) {
                    $rootScope.showMessage('请输入新密码!');
                    return false;
                }
                if (!ValidateService.checkPwd(pwdInfo.pwd1)) {
                    $rootScope.showMessage('密码必须是6-10位字母、数字组合!');
                    return false;
                }
                if (!pwdInfo.pwd2) {
                    $rootScope.showMessage('请设置新密码!');
                    return false;
                }
                if (!ValidateService.checkPwd(pwdInfo.pwd2)) {
                    $rootScope.showMessage('密码必须是6-10位字母、数字组合!');
                    return false;
                }
                if (pwdInfo.pwd1 != pwdInfo.pwd2) {
                    $rootScope.showMessage('两次输入的密码不一致,请重新输入!');
                    return false;
                }
                return true;
            }
        };
        $scope.updatePwd = function() {
            var flag = obj.validateInput();
            if (flag) {
                var params = {
                    password: $scope.pwdInfo.password,
                    newpassword: $scope.pwdInfo.pwd2
                };
                UpdatepwdService.updatePwd(params, function(data) {
                    if (data.success == 'Y') {
                        $rootScope.showMessage('修改成功!');
                        $timeout(function() {
                            $state.go('personal');
                        }, 1000);
                    } else {
                        if (angular.isObject(data.msg)) {
                            angular.forEach(data.msg, function(val, key) {
                                $rootScope.showMessage(val);
                            });
                        } else {
                            $rootScope.showMessage(data.msg);
                        }
                    }
                }, function(error) {
                    console.error(error);
                    $rootScope.showMessage('修改失败!');
                });
            }
        };
    }]);
