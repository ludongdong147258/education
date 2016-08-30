angular.module('education')
    .controller('StudentOrderController', ['$rootScope', '$scope', '$state','StudentService', function($rootScope, $scope, $state,StudentService) {
        $rootScope.showHeaderBar = false;
        $scope.back = function() {
            $state.go('personal');
        };
        var obj = {
            getOrderList:function(){
                StudentService.getOrderList({},function(data){
                    if(data.success == 'Y'){
                        $scope.orderList = data.data;
                    }
                });
            }
        };
        obj.getOrderList();
    }]);
