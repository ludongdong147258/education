angular.module('education')
    .controller('PersonalController', ['$rootScope', '$scope', '$state', 'CONFIG', function($rootScope, $scope, $state, CONFIG) {
        $rootScope.showHeaderBar = false;
        $scope.back = function() {
            $state.go('news');
        };
        if ($rootScope.user) {
            if (!$rootScope.user.avatar) {
                $rootScope.user.avatar = '././images/person.png';
            }
            var role = $rootScope.user.role;
            $scope.roleDisplay = CONFIG[role];
            switch (role) {
                case 'student':
                    $scope.listItems = [{
                        state: 'studentInfo',
                        class: 'ion-person calm',
                        name: '我的资料'
                    }, {
                        state: 'studentOrder',
                        class: 'ion-ios-list energized',
                        name: '我的订单'
                    }, {
                        state: 'reference',
                        class: 'ion-star assertive',
                        name: '我的推荐'
                    }]
                    break;
                case 'teacher':
                    $scope.listItems = [{
                        state: 'teacherInfo',
                        class: 'ion-person calm',
                        name: '我的资料'
                    }, {
                        state: 'reference',
                        class: 'ion-star assertive',
                        name: '我的推荐'
                    }]
                    break;
                case 'institution':
                    $scope.listItems = ['organizationInfo'];
                    $scope.listItems = [{
                        state: 'organizationInfo',
                        class: 'ion-person calm',
                        name: '我的资料'
                    }, {
                        state: 'organizationManager',
                        class: 'ion-ios-people assertive',
                        name: '机构教师管理'
                    }]
                    break;
                case 'manage':
                    $scope.listItems = [{
                        state: 'staffOrder',
                        class: 'ion-ios-list energized',
                        name: '我的订单'
                    }, {
                        state: 'staffOrderService',
                        class: 'ion-ios-list-outline calm',
                        name: '服务订单提交'
                    }, {
                        state: 'examineList',
                        class: 'ion-ios-people positive',
                        name: '机构/教师审核'
                    }]
                    break;
            }
        }
    }]);
