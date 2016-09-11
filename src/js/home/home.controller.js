angular.module('education')
    .controller('HomeController', ['$rootScope', '$scope', 'CONFIG', 'HomeService', 'StudentService', '$state', '$timeout', 'SearchService', function($rootScope, $scope, CONFIG, HomeService, StudentService, $state, $timeout, SearchService) {
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
        };
        $scope.activeSlider = 0;

        function repeatActiveSlider() {
            if ($scope.activeSlider < 3) {
                $scope.activeSlider++;
            }
            if ($scope.activeSlider == 3) {
                $scope.activeSlider = 0;
            }
            $timeout(function() {
                repeatActiveSlider();
            }, 3000);
        }
        $timeout(function() {
            repeatActiveSlider();
        }, 3000);
        $scope.recommendList = [];
        var obj = {
            init: function() {
                obj.loadList();
            },
            loadList: function() {
                SearchService.getRecommendTeacherList({}, function(data) {
                    if (data.success == 'Y') {
                        $scope.recommendList = data.data;
                    }
                }, function(error) {
                    console.error(error);
                });
            }
        };
        obj.init();
        $scope.goToSearch = function() {
            $state.go('search');
        }
        $scope.orderHardWare = function() {
            if (!$rootScope.user) {
                $rootScope.showMessage('请先注册/登录再预约安装硬件!');
            } else {
                switch ($rootScope.user.role) {
                    case 'student':
                        $state.go('studentOrderHardWare');
                        break;
                    case 'teacher':
                        $state.go('teacherOrderHardWare');
                        break;
                    case 'institution':
                        $state.go('teacherOrderHardWare');
                        break;
                }
            }
        };
    }]);
