angular.module('education')
    .controller('TeacherDetailsController', ['$rootScope', '$scope', '$state', 'TeacherService', '$stateParams', function($rootScope, $scope, $state, TeacherService, $stateParams) {
        $rootScope.showHeaderBar = false;
        $scope.back = function() {
            window.history.back();
        };
        $scope.teacherInfo = {};
        var obj = {
            getDetails: function() {
                TeacherService.getDetails({
                    id: $stateParams.id
                }, function(data) {
                    if(data.success == 'Y'){
                        $scope.teacherInfo = data.data;
                        $scope.teacherInfo.stars = [];
                        for(var i = 0; i < data.data.star; i++){
                            $scope.teacherInfo.stars.push(i);
                        }
                    }
                }, function(error) {
                    console.error(error);
                });
            }
        };
        obj.getDetails();
    }])
