angular.module('education')
    .controller('TeacherOrderHardWareController', ['$rootScope', '$scope', '$state', function($rootScope, $scope, $state) {
        $rootScope.showHeaderBar = false;
        // 返回
        $scope.back = function() {
            $state.go('home');
        };
        // 免费预约
        $scope.saveOrder = function() {
            $state.go('home');
        };
    }]);
