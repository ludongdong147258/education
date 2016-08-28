angular.module('education')
    .controller('HomeController', ['$rootScope', '$scope', 'CONFIG', 'HomeService', 'StudentService', '$state', function($rootScope, $scope, CONFIG, HomeService, StudentService, $state) {
        $rootScope.showHeaderBar = true;
        if ($rootScope.user) {
            switch ($rootScope.user.role) {
                case 'student':
                    $scope.listItems = [{
                        state: 'studentOrderHardWare',
                        name: '预定智能硬件'
                    }, {
                        state: 'studentInfo',
                        name: '补全学生资料'
                    }, {
                        state: 'reference',
                        name: '邀请老师/同学加入'
                    }];
                    break;
                case 'teacher':
                    $scope.listItems = [{
                        state: 'teacherOrderHardWare',
                        name: '预定智能硬件'
                    }, {
                        state: 'teacherInfo',
                        name: '认证教师资料'
                    }, {
                        state: 'reference',
                        name: '邀请老师/同学加入'
                    }];
                    break;
                case 'institution':
                    $scope.listItems = [{
                        state: 'teacherOrderHardWare',
                        name: '预定智能硬件'
                    }, {
                        state: 'organizationInfo',
                        name: '认证机构资料'
                    }, {
                        state: 'organizationManager',
                        name: '管理机构教师'
                    }];
                    break;
                case 'manage':
                    $scope.listItems = [{
                        state: 'staffOrderService',
                        name: '提交订单'
                    }, {
                        state: 'examineList',
                        name: '审核教师/机构'
                    }];
                    break;
            }
        }
        $scope.hasHardWare = function(state, e) {
            if (state == 'studentOrderHardWare') {
                e.preventDefault();
                StudentService.hasHardWare({}, function(data) {
                    if (data.success == 'Y') {
                        $rootScope.showMessage('预定申请已受理,我们的工作人员将在您指定的日期电话联系您并上门为您安装智能硬件!', 3000);
                    } else {
                        $state.go('studentOrderHardWare');
                    }
                });
            }
        }
    }]);
