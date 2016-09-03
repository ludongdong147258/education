angular.module('education')
    .controller('NewsController', ['$rootScope', '$scope', 'NewsService','$stateParams', function($rootScope, $scope, NewsService,$stateParams) {
        var tabIndex = $stateParams.tabIndex;
        $scope.showNewsList = true;
        $scope.showOutcomeList = false;
        $scope.newsList = [];
        $scope.hasMoreData = true;
        if(tabIndex){
            $scope.showNewsList = false;
            $scope.showOutcomeList = true;
        }
        var page = 1,
            type = 'news';
        var obj = {
            loadNews: function() {
                NewsService.getNewsList({
                    page: page,
                    type: type
                }, function(data) {
                    if (data.success == 'Y') {
                        $scope.newsList = $scope.newsList.concat(data.data);
                        $scope.$broadcast('scroll.infiniteScrollComplete');
                        if (data.data.length > 0) {
                            $scope.hasMoreData = true;
                        } else {
                            $scope.hasMoreData = false;
                        }
                    }
                }, function(error) {
                    console.log(error);
                });
            }
        };
        obj.loadNews();
        // 切换tab
        $scope.changeTab = function(index) {
            page = 1;
            $scope.newsList.length = 0;
            if (index) {
                $scope.showNewsList = false;
                $scope.showOutcomeList = true;
                type = 'achieved';
            } else {
                $scope.showNewsList = true;
                $scope.showOutcomeList = false;
                type = 'news';
            }
            obj.loadNews();
        };
        $scope.loadMore = function() {
            page++;
            obj.loadNews();
        };
        $scope.refreshNews = function() {
            page = 1;
            $scope.newsList.length = 0;
            obj.loadNews();
        };
        if ($rootScope.user) {
            switch ($rootScope.user.role) {
                case 'student':
                    $rootScope.listItems = [{
                        state: 'studentOrderHardWare',
                        name: '预约智能硬件',
                        class: 'yuding-icon'
                    }];
                    break;
                case 'teacher':
                    $rootScope.listItems = [{
                        state: 'teacherOrderHardWare',
                        name: '预约智能硬件',
                        class: 'yuding-icon'
                    }];
                    break;
                case 'institution':
                    $rootScope.listItems = [{
                        state: 'organizationOrderHardWare',
                        name: '预约智能硬件',
                        class: 'yuding-icon'
                    }];
                    break;
                case 'manage':
                    $rootScope.listItems = [];
                    break;
            }
        }
    }]);
