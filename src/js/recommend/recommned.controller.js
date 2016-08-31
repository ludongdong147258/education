angular.module('education')
    .controller('RecommendController', ['$rootScope', '$scope', '$state', '$stateParams', 'SearchService', function($rootScope, $scope, $state, $stateParams, SearchService) {
        // 返回
        $scope.back = function() {
            $state.go('news');
        };
        $scope.recommendList = [];
        var obj = {
            init: function() {
                obj.loadList();
            },
            loadList: function() {
                SearchService.getRecommendTeacherList({}, function(data) {
                    if (data.success == 'Y') {
                        data.data.stars = [];
                        for (var i = 0; i < data.data.star; i++) {
                            data.data.stars.push(i);
                        }
                        $scope.recommendList = data.data;
                    }
                }, function(error) {
                    console.error(error);
                });
            }
        };
        obj.init();
    }]);
