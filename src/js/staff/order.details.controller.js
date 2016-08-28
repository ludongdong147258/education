angular.module('education')
    .controller('StaffOrderDetailsController', ['$rootScope', '$scope', '$state', '$ionicPopup', function($rootScope, $scope, $state, $ionicPopup) {
        $rootScope.showHeaderBar = false;
        // 返回
        $scope.back = function() {
            window.history.back();
        };
        $scope.dispalyStates = [true, false, false];
        $scope.tabChange = function(curIndex) {
            angular.forEach($scope.dispalyStates, function(val, index) {
                $scope.dispalyStates[index] = false;
            });
            $scope.dispalyStates[curIndex] = true;
        };
    }]);
