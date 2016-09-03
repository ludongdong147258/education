angular.module('education')
    .controller('TeacherDetailsController', ['$rootScope', '$scope', '$state', 'TeacherService', '$stateParams', function($rootScope, $scope, $state, TeacherService, $stateParams) {
        $scope.type = $stateParams.type;
        var searchText = $stateParams.searchText;
        $scope.back = function() {
            if(searchText){
                $state.go('search',{type:$scope.type,searchText:searchText});
            }else{
                $state.go('teacher');
            }
        };
        $scope.teacherInfo = {};
        var obj = {
            getDetails: function() {
                TeacherService.getDetails({
                    id: $stateParams.id
                }, function(data) {
                    if (data.success == 'Y') {
                        $scope.teacherInfo = data.data;
                        $scope.teacherInfo.stars = [];
                        for (var i = 0; i < data.data.star; i++) {
                            $scope.teacherInfo.stars.push(i);
                        }
                    }
                }, function(error) {
                    console.error(error);
                });
            }
        };
        obj.getDetails();
        $scope.sure = function() {
            var teacherInfo = $scope.teacherInfo;
            $state.go('studentOrderHardWare', {
                id: teacherInfo.id,
                name: teacherInfo.truename
            });
        };
        $scope.cancel = function() {
            $state.go('search',{type:$scope.type,searchText:searchText});
        };
    }])
