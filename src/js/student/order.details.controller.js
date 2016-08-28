angular.module('education')
    .controller('StudentOrderDetailsController', ['$rootScope', '$scope', '$state', function($rootScope, $scope, $state) {
        $rootScope.showHeaderBar = false;
        // 返回
        $scope.back = function() {
            window.history.back();
        };
    }]);
