angular.module('education')
    .controller('UpdatepwdController', ['$rootScope', '$scope', '$state', 'UpdatepwdService','$timeout', function($rootScope, $scope, $state, UpdatepwdService,$timeout) {
        $rootScope.showHeaderBar = false;
        $scope.pwdInfo = {};
        $scope.back = function() {
            $state.go('personal');
        };
        var obj = {
            validateInput:function(){
                var pwdInfo = $scope.pwdInfo;
                if(!pwdInfo.pwd1){
                    $rootScope.showMessage('请输入原密码!');
                    return false;
                }
                if(!pwdInfo.pwd2){
                    $rootScope.showMessage('请输入新密码!');
                    return false;
                }
                if(!pwdInfo.password){
                    $rootScope.showMessage('请设置新密码!');
                    return false;
                }
                return true;
            }
        };
        $scope.updatePwd = function() {
            var flag = obj.validateInput();
            if(flag){
                UpdatepwdService.updatePwd($scope.pwdInfo, function(data) {
                    if (data.success == 'Y') {
                        $rootScope.showMessage('修改成功!');
                        $timeout(function(){

                        },1000);
                    }else{
                        angular.forEach(data.msg,function(val,key){
                            $rootScope.showMessage(val);
                        });
                    }
                }, function(error) {
                    console.error(error);
                    $rootScope.showMessage('修改失败!');
                });
            }
        };
    }]);
