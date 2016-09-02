angular.module('education')
    .controller('OrganizationAddTeacherController', ['$rootScope', '$scope', '$state', 'OrganizationService','$timeout','ValidateService', function($rootScope, $scope, $state, OrganizationService,$timeout,ValidateService) {
        $rootScope.showHeaderBar = false;
        $scope.back = function() {
            $state.go('organizationManager');
        };
        $scope.teacherInfo = {
            sex: 1
        };
        $scope.addTeacher = function() {
            var flag = obj.validateInput();
            if (flag) {
                OrganizationService.addTeacher($scope.teacherInfo, function(data) {
                    if (data.success == 'Y') {
                        $rootScope.showMessage('新增成功!');
                        $timeout(function(){
                            $state.go('organizationManager');
                        },1000);
                    }
                }, function(error) {
                    console.error(error);
                    $rootScope.showMessage('新增失败!');
                });
            }
        };
        $scope.changeSex = function(num) {
            $scope.teacherInfo.sex = num;
        };
        var obj = {
            validateInput: function() {
                if (!$scope.teacherInfo.truename) {
                    $rootScope.showMessage('教师姓名不能为空!');
                    return false;
                }
                if(!ValidateService.checkName($scope.teacherInfo.truename)){
                    $rootScope.showMessage('教师姓名2-7个中文字符!');
                    return false;
                }
                if (!$scope.teacherInfo.mobile) {
                    $rootScope.showMessage('手机号码不能为空!');
                    return false;
                }
                if(!ValidateService.checkPhone($scope.teacherInfo.mobile)){
                    $rootScope.showMessage('手机号码格式不正确!');
                    return false;
                }
                if (!$scope.teacherInfo.password) {
                    $rootScope.showMessage('密码不能为空!');
                    return false;
                }
                if(!ValidateService.checkPwd($scope.teacherInfo.password)){
                    $rootScope.showMessage('密码必须是6-10位字母、数字组合!');
                    return false;
                }
                return true;
            }
        };
    }]);
