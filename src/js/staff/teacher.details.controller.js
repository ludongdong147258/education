angular.module('education')
    .controller('ExamineTeacherController', ['$rootScope', '$scope', 'StaffService', '$state', '$stateParams', 'TeacherService', '$ionicPopup','$timeout', function($rootScope, $scope, StaffService, $state, $stateParams, TeacherService, $ionicPopup,$timeout) {
        // 返回
        $scope.back = function() {
            $state.go('examineList');
        };
        var grade = {};
        var subject = {};
        var time = {};
        var obj = {
            getDetails: function() {
                TeacherService.getDetails({
                    id: $stateParams.id
                }, function(data) {
                    if (data.success == 'Y') {
                        $scope.teacherInfo = data.data;
                        var grades = [];
                        if($scope.teacherInfo.grades){
                            angular.forEach($scope.teacherInfo.grades,function(val){
                                grades.push(grade[val]);
                            });
                        }
                        $scope.teacherInfo.grades = grades.join('、');
                        var subjects = [];
                        if($scope.teacherInfo.subjects){
                            angular.forEach($scope.teacherInfo.subjects,function(val){
                                subjects.push(subject[val]);
                            });
                        }
                        $scope.teacherInfo.subjects = subjects.join('、');
                        $scope.teacherInfo.grades = grades.join('、');
                        var times = [];
                        if($scope.teacherInfo.work_time){
                            angular.forEach($scope.teacherInfo.work_time,function(val){
                                times.push(time[val]);
                            });
                        }
                        $scope.teacherInfo.work_time = times.join('、');
                    }
                }, function(error) {
                    console.error(error);
                });
            },
            getGrades:function(){
                TeacherService.getGrades({
                }, function(data) {
                    if (data.success == 'Y') {
                        grade = data.data;
                    }
                }, function(error) {
                    console.error(error);
                });
            },
            getSubjects:function(){
                TeacherService.getSubjects({
                }, function(data) {
                    if (data.success == 'Y') {
                        subject = data.subjects;
                    }
                }, function(error) {
                    console.error(error);
                });
            },
            getTimes:function(){
                TeacherService.getTimes({
                }, function(data) {
                    if (data.success == 'Y') {
                        time = data.workTime;
                    }
                }, function(error) {
                    console.error(error);
                });
            }
        };
        obj.getGrades();
        obj.getSubjects();
        obj.getTimes();
        obj.getDetails();
        $scope.pass = function() {
            var confirmPopup = $ionicPopup.confirm({
                title: '审核',
                template: '您确定通过审核？',
                okText: '确定',
                cancelText: '取消',
                okType: 'button-energized',
                cancelType: 'button-dark'
            });
            confirmPopup.then(function(res) {
                if (res) {
                    StaffService.authTeacher({
                        id: $stateParams.id
                    }, function(data) {
                        if (data.success == 'Y') {
                            $rootScope.showMessage('审核成功!');
                            $timeout(function(){
                                $state.go('examineList');
                            },1000);
                        }
                    }, function(error) {
                        $rootScope.showMessage('审核失败!');
                    });
                }
            });
        };
    }]);
