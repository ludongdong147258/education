angular.module('education')
    .controller('StaffOrderController', ['$rootScope', '$scope', '$state', '$ionicPopup', function($rootScope, $scope, $state, $ionicPopup) {
        $rootScope.showHeaderBar = false;
        // 返回
        $scope.back = function() {
            window.history.back();
        };
        $scope.displayStates = [true, false];
        // tab 切换
        $scope.tabChange = function(index) {
            angular.forEach($scope.displayStates, function(val, key) {
                $scope.displayStates[key] = false;
            });
            $scope.displayStates[index] = true;
        };
        $scope.showConfirm = function() {
            var myPopup = $ionicPopup.show({
                template: '硬件安装完成后<br/>请将状态更改为[已完成安装]<br/>如果客户取消安装<br/>请将状态更改为[客户取消]',
                title: '更改智能硬件上门安装状态',
                scope: $scope,
                buttons: [{
                    text: '已完成安装',
                    type: 'button-energized',
                    onTap: function(e) {
                        alert(3);
                    }
                }, {
                    text: '客户取消',
                    type: 'button-energized',
                    onTap: function(e) {
                        alert(2);
                    }
                }, {
                    text: '关闭',
                    type: 'button-dark',
                    onTap: function(e) {
                        alert(1);
                    }
                }]
            });
        };
    }]);