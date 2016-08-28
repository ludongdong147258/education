angular.module('education')
    .controller('ExamineOrganizationController', ['$rootScope', '$scope', 'StaffService', '$state', '$stateParams', '$ionicPopup', function($rootScope, $scope, StaffService, $state, $stateParams, $ionicPopup) {
        $rootScope.showHeaderBar = false;
        // 返回
        $scope.back = function() {
            window.history.back();
        };
        var obj = {
            getDetails: function() {
                StaffService.getOrganizationDetails({
                    id: $stateParams.id
                }, function(data) {
                    if (data.success == 'Y') {
                        $scope.organizationInfo = data.data;
                    }
                }, function(error) {
                    console.error(error);
                });
            }
        };
        obj.getDetails();
        $scope.pass = function() {
            var confirmPopup = $ionicPopup.confirm({
                title: '审核',
                template: '您确定通过审核？',
                okText: '确定',
                cancelText: '取消',
                okType: 'button-energized',
                cancelType: 'button-dark'
            });
            confirmPopup.then(function(res) {
                if (res) {
                    StaffService.authOrganization({
                        id: $stateParams.id
                    }, function(data) {
                        if (data.success == 'Y') {
                            $rootScope.showMessage('审核成功!');
                            $state.go('examineList');
                        }
                    }, function(error) {
                        $rootScope.showMessage('审核失败!');
                    });
                }
            });
        };
    }]);
