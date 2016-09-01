angular.module('education')
    .controller('ExamineController', ['$rootScope', '$scope', 'StaffService', '$state', function($rootScope, $scope, StaffService, $state) {
        $rootScope.showHeaderBar = false;
        $scope.showTeacherList = true;
        $scope.showOrganizationList = false;
        // 返回
        $scope.back = function() {
            $state.go('personal');
        };
        $scope.teacherList = [];
        $scope.organizationList = [];
        var obj = {
            loadTeacherList: function() {
                StaffService.getTeacherList({}, function(data) {
                    if (data.success == 'Y') {
                        $scope.teacherList = data.data;
                    }
                }, function(error) {
                    console.log(error);
                });
            },
            loadOrganizationList: function() {
                StaffService.getOrganizationList({}, function(data) {
                    if (data.success == 'Y') {
                        $scope.organizationList = data.data;
                    }
                }, function(error) {
                    console.log(error);
                });
            }
        };
        obj.loadTeacherList();

        $scope.changeTab = function(index) {
            if (index) {
                $scope.showTeacherList = false;
                $scope.showOrganizationList = true;
                obj.loadOrganizationList();
            } else {
                $scope.showTeacherList = true;
                $scope.showOrganizationList = false;
                obj.loadTeacherList();
            }
        };
    }]);
