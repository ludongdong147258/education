angular.module('education')
    .controller('UpdatepwdController', ['$rootScope', '$scope', '$state', 'UpdatepwdService', function($rootScope, $scope, $state, UpdatepwdService) {
        $rootScope.showHeaderBar = false;
        $scope.pwdInfo = {};
        $scope.back = function() {
            window.history.back();
        };
        var obj = {

        };
        $scope.updatePwd = function() {
            UpdatepwdService.updatePwd($scope.pwdInfo, function(data) {
                if (data.success == 'Y') {
                    $rootScope.showMessage('修改成功!');
                }
            }, function(error) {
                console.error(error);
                $rootScope.showMessage('修改失败!');
            });
        };
    }]);
