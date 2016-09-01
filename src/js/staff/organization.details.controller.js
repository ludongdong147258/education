angular.module('education')
    .controller('ExamineOrganizationController', ['$rootScope', '$scope', 'StaffService', '$state', '$stateParams', '$ionicPopup','$timeout', function($rootScope, $scope, StaffService, $state, $stateParams, $ionicPopup,$timeout) {
        $rootScope.showHeaderBar = false;
        // 返回
        $scope.back = function() {
            $state.go('examineList');
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
                            $timeout(function(){
                                $state.go('examineList');
                            },1000);
                        }
                    }, function(error) {
                        $rootScope.showMessage('审核失败!');
                    });
                }
            });
        };
    }]);
