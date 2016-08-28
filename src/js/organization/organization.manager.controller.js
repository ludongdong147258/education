angular.module('education')
    .controller('OrganizationManagerController', ['$rootScope', '$scope', '$state', 'OrganizationService', '$ionicPopup', function($rootScope, $scope, $state, OrganizationService, $ionicPopup) {
        $rootScope.showHeaderBar = false;
        $scope.back = function() {
            window.history.back();
        };
        $scope.teacherList = [];
        var obj = {
            loadList: function() {
                OrganizationService.getTeacherList({}, function(data) {
                    if (data.success == 'Y') {
                        $scope.teacherList = data.data;
                    }
                }, function(error) {
                    console.error(error);
                });
            }
        };
        obj.loadList();
        $scope.deleteTeacher = function(id, index) {
            var confirmPopup = $ionicPopup.confirm({
                title: '删除',
                template: '您确定要删除吗？',
                okText:'确定',
                cancelText:'取消',
                okType:'button-energized',
                cancelType:'button-dark'
            });
            confirmPopup.then(function(res) {
                if (res) {
                    OrganizationService.deleteTeacher({
                        teacher_id: id
                    }, function(data) {
                        if (data.success == 'Y') {
                            $scope.teacherList.splice(index, 1);
                            $rootScope.showMessage('删除成功!');
                        } else {
                            $rootScope.showMessage('删除失败!');
                        }
                    }, function(error) {
                        console.error(error);
                    });
                }
            });
        };
    }]);
