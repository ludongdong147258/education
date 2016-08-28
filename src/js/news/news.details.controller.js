angular.module('education')
    .controller('NewsDetailsController', ['$rootScope', '$scope', '$state', 'NewsService', '$stateParams', function($rootScope, $scope, $state, NewsService, $stateParams) {
        $rootScope.showHeaderBar = false;
        // 返回
        $scope.back = function() {
            $state.go('news');
        };
        $scope.newsInfo = {};
        var obj = {
            getNewsDetails: function() {
                NewsService.getNewsDetails({
                    id: $stateParams.id
                }, function(data) {
                    if (data.success == 'Y') {
                        $scope.newsInfo = data.data;
                    }
                }, function(error) {
                    console.error(error);
                });
            }
        };
        obj.getNewsDetails();
    }]);
