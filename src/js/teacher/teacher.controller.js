angular.module('education')
    .controller('TeacherController', ['$rootScope', '$scope', 'TeacherService','$stateParams','$state', function($rootScope, $scope, TeacherService,$stateParams,$state) {
        var subject = $stateParams.subject;
        $scope.back = function(){
            $state.go('home');
        };
        $scope.teacherList = [];
        $scope.subjects = [];
        $scope.subject = {key:''};
        $scope.schoolworks = [];
        $scope.schoolwork = {key:''};
        $scope.grades = [];
        $scope.grade = {key:''};
        $scope.hasMoreData = true;
        var params = {page:1};
        if(subject){
            params.subject = subject;
        }
        var obj = {
            init:function(){
                obj.getSchoolworks();
                obj.getGrades();
                obj.getSubjects();
                obj.loadList({page:params.page});
            },
            loadList: function() {
                TeacherService.getTeacherList(params, function(data) {
                    if (data.success == 'Y') {
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
                        $scope.$broadcast('scroll.refreshComplete');
                    }
                }, function(error) {
                    console.log(error);
                    $scope.$broadcast('scroll.refreshComplete');
                });
            },
            getSubjects: function() {
                TeacherService.getSubjects({}, function(data) {
                    if (data.success == 'Y') {
                        angular.forEach(data.subjects,function(val,key){
                            $scope.subjects.push({key:key,val:val});
                        })
                    }
                }, function(error) {
                    console.log(error);
                });
            },
            getSchoolworks: function() {
                TeacherService.getSchoolworks({}, function(data) {
                    if (data.success == 'Y') {
                        angular.forEach(data.schoolwork,function(val,key){
                            $scope.schoolworks.push({key:key,val:val});
                        })
                    }
                }, function(error) {
                    console.log(error);
                });
            },
            getGrades: function() {
                TeacherService.getGrades({}, function(data) {
                    if (data.success == 'Y') {
                        angular.forEach(data.data,function(val,key){
                            $scope.grades.push({key:key,val:val});
                        })
                    }
                }, function(error) {
                    console.log(error);
                });
            }
        };
        obj.init();
        $scope.loadMore = function() {
            params.page++;
            obj.loadList();
        };
        $scope.refresh = function() {
            params.page = 1;
            $scope.teacherList.length = 0;
            obj.loadList();
        };
        $scope.changeGrade = function(item){
            params.page = 1;
            $scope.teacherList.length = 0;
            if(item){
                params.grade = item.key;
            }else {
                params.grade = '';
            }
            obj.loadList();
        };
        $scope.changeSubject = function(item){
            params.page = 1;
            $scope.teacherList.length = 0;
            if(item){
                params.subject = item.key;
            }else {
                params.subject = '';
            }
            obj.loadList();
        };
        $scope.changeSchoolwork = function(item){
            params.page = 1;
            $scope.teacherList.length = 0;
            if(item){
                params.schoolwork = item.key;
            }else {
                params.schoolwork = '';
            }
            obj.loadList();
        };
    }]);
