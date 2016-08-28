angular.module('education')
    .controller('OrganizationAddTeacherController', ['$rootScope', '$scope', '$state', 'OrganizationService', function($rootScope, $scope, $state, OrganizationService) {
        $rootScope.showHeaderBar = false;
        $scope.back = function() {
            window.history.back();
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
                        $state.go('organizationManager');
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
                if (!$scope.teacherInfo.mobile) {
                    $rootScope.showMessage('手机号码不能为空!');
                    return false;
                }
                if (!$scope.teacherInfo.password) {
                    $rootScope.showMessage('密码不能为空!');
                    return false;
                }
                return true;
            }
        };
    }]);