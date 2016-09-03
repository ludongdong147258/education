angular.module('education')
    .controller('SearchController', ['$rootScope', '$scope', '$state', '$stateParams', 'SearchService', 'TeacherService', '$ionicPopup', function($rootScope, $scope, $state, $stateParams, SearchService, TeacherService, $ionicPopup) {
        $scope.type = $stateParams.type;
        var keywords = $stateParams.searchText;
        // 返回
        $scope.back = function() {
            if ($scope.type) {
                $state.go('studentOrderHardWare');
            } else {
                $state.go('news');
            }
        };
        var params = {
            page: 1
        };
        $scope.recommendList = [];
        $scope.teacherList = [];
        $scope.searchText = '';
        $scope.showHistory = true;
        $scope.histories = [];
        var reg = /^[0-9]+$/;
        var obj = {
            init: function() {
                // obj.loadList();
                if($scope.showHistory){
                    obj.getHistoryList();
                }
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
            },
            loadTeacherList: function() {
                var searchText = $scope.searchText;
                if (searchText) {
                    $scope.showHistory = false;
                    if (reg.test(searchText)) {
                        params.mobile = searchText;
                    } else {
                        params.truename = searchText;
                    }
                    TeacherService.getTeacherList(params, function(data) {
                        if (data.success == 'Y') {
                            if ($scope.histories.indexOf(searchText) == -1) {
                                $scope.histories.push(searchText);
                                localStorage.setItem('records', $scope.histories);
                            }
                            data.data.stars = [];
                            for (var i = 0; i < data.data.star; i++) {
                                data.data.stars.push(i);
                            }
                            $scope.teacherList = $scope.teacherList.concat(data.data);
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
            },
            getHistoryList: function() {
                var historyList = localStorage.getItem('records');
                if (historyList) {
                    if (historyList.indexOf(',') != -1) {
                        $scope.histories = historyList.split(',');
                    } else {
                        if ($scope.histories.indexOf(historyList) == -1) {
                            $scope.histories.push(historyList);
                        }
                    }
                }
            }
        };
        if(keywords){
            $scope.showHistory = false;
            $scope.searchText = keywords;
            obj.loadTeacherList();
        }
        obj.init();
        
        $scope.search = function() {
            if (!$scope.searchText) {
                $rootScope.showMessage('搜索关键字不能为空!');
                return;
            }
            params = {
                page: 1
            };
            $scope.teacherList.length = 0;
            obj.loadTeacherList();
        };
        $scope.loadMore = function() {
            params.page++;
            obj.loadTeacherList();
        };
        $scope.refresh = function() {
            params.page = 1;
            $scope.teacherList.length = 0;
            obj.loadTeacherList();
        };
        $scope.textChange = function() {
            if (!$scope.searchText) {
                $scope.showHistory = true;
                obj.getHistoryList();
            }
        };
        $scope.clearHistory = function() {
            var confirmPopup = $ionicPopup.confirm({
                template: '清空历史记录?',
                okText: '立即清空',
                okType: 'button-energized',
                cancelText: '取消',
                cancelType: 'button-dark'
            });
            confirmPopup.then(function(res) {
                if (res) {
                    localStorage.removeItem('records');
                    $scope.histories.length = 0;
                }
            });
        };
        $scope.setSearchText = function(searchText) {
            $scope.searchText = searchText;
            $scope.search();
        };
        $scope.toStudentHardWare = function(e, item) {
            e.preventDefault();
            e.stopPropagation();
            $state.go('studentOrderHardWare', {
                id: item.id,
                name: item.truename
            });
        };
    }]);
