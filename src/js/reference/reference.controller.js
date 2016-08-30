angular.module('education')
    .controller('ReferenceController', ['$rootScope', '$scope', '$state','ReferenceService', function($rootScope, $scope, $state,ReferenceService) {
        $rootScope.showHeaderBar = false;
        // 返回
        $scope.back = function(){
            $state.go('personal');
        };
        $scope.displayStates = [true,false];
        $scope.invitedList = [];
        // tab 切换
        $scope.tabChange = function(index){
            angular.forEach($scope.displayStates,function(val,key){
                $scope.displayStates[key] = false;
            });
            $scope.displayStates[index] = true;
            if(index){
                obj.loadList();
            }
        };
        var obj = {
            loadList:function(){
                ReferenceService.getInvitedList({},function(data){
                    if(data.success == 'Y'){
                        $scope.invitedList = data.data;
                    }
                },function(error){
                    console.error(error);
                });
            }
        };
    }]);
