angular.module('education')
    .controller('OnlineController', ['$rootScope', '$scope', '$state', function($rootScope, $scope, $state) {
        // 返回
        $scope.back = function() {
            $state.go('home');
        };
    }]);
