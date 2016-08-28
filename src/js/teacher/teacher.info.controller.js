angular.module('education')
    .controller('TeacherInfoController', ['$rootScope', '$scope', '$state', 'TeacherService', 'Upload', '$stateParams','CONFIG','$timeout', function($rootScope, $scope, $state, TeacherService, Upload, $stateParams,CONFIG,$timeout) {
        $rootScope.showHeaderBar = false;
        $scope.appTitle = '我的资料';
        if ($stateParams.id) {
            $scope.appTitle = '机构教师资料编辑';
        }
        $scope.back = function() {
            window.history.back();
        };
        $scope.dispalyStates = [true, false, false];
        $scope.grades = [];
        $scope.worktimes = [];
        $scope.subjects = [];
        // 保存更改
        $scope.saveInfo = function() {
            TeacherService.updatePersonalInfo($scope.personalInfo, function(data) {
                if (data.success == 'Y') {
                    $rootScope.showMessage('保存成功!');
                }
            }, function(error) {
                console.error(error);
            });
        };
        $scope.personalInfo = {};
        var obj = {
            getTeacherInfo: function() {
                var that = this;
                TeacherService.getDetails({
                    id: $stateParams.id
                }, function(data) {
                    if (data.success == 'Y') {
                        $scope.personalInfo = data.data;
                        if($scope.personalInfo.bankcard) {
                            $scope.personalInfo.bankcard = Number($scope.personalInfo.bankcard);
                        }
                        if($scope.personalInfo.certificate_url){
                            $scope.f = {};
                            $scope.f.progress = 100;
                        }
                        that.setGrades($scope.personalInfo.grades);
                        that.setSubjects($scope.personalInfo.subjects);
                        that.setTimes($scope.personalInfo.work_time);
                    }
                }, function(error) {
                    console.error(error);
                });
            },
            getPersonalInfo: function() {
                var that = this;
                TeacherService.getPersonalInfo({}, function(data) {
                    if (data.success == 'Y') {
                        $scope.personalInfo = data.data;
                        if($scope.personalInfo.bankcard) {
                            $scope.personalInfo.bankcard = Number($scope.personalInfo.bankcard);
                        }
                        if($scope.personalInfo.certificate_url){
                            $scope.f = {};
                            $scope.f.progress = 100;
                        }
                        that.setGrades($scope.personalInfo.grades);
                        that.setSubjects($scope.personalInfo.subjects);
                        that.setTimes($scope.personalInfo.work_time);
                    }
                }, function(error) {
                    console.error(error);
                });
            },
            getGrades: function() {
                TeacherService.getGrades({}, function(data) {
                    if (data.success == 'Y') {
                        angular.forEach(data.data, function(val, key) {
                            $scope.grades.push({
                                key,
                                val,
                                isSelected: false
                            });
                        });
                    }
                }, function(error) {
                    console.error(error);
                });
            },
            getTimes: function() {
                TeacherService.getTimes({}, function(data) {
                    if (data.success == 'Y') {
                        angular.forEach(data.workTime, function(val, key) {
                            $scope.worktimes.push({
                                key,
                                val,
                                isSelected: false
                            });
                        });
                    }
                }, function(error) {
                    console.error(error);
                });
            },
            getSubjects: function() {
                TeacherService.getSubjects({}, function(data) {
                    if (data.success == 'Y') {
                        angular.forEach(data.subjects, function(val, key) {
                            $scope.subjects.push({
                                key,
                                val,
                                isSelected: false
                            });
                        });
                    }
                }, function(error) {
                    console.error(error);
                });
            },
            setGrades:function(grades){
                if(grades){
                    angular.forEach(grades,function(val){
                        angular.forEach($scope.grades,function(item){
                            if(item.key == val){
                                item.isSelected = true;
                            }
                        });
                    });
                }
            },
            setSubjects:function(subjects){
                if(subjects){
                    angular.forEach(subjects,function(val){
                        angular.forEach($scope.subjects,function(item){
                            if(item.key == val){
                                item.isSelected = true;
                            }
                        });
                    });
                }
            },
            setTimes:function(worktimes){
                if(worktimes){
                    angular.forEach(worktimes,function(val){
                        angular.forEach($scope.worktimes,function(item){
                            if(item.key == val){
                                item.isSelected = true;
                            }
                        });
                    });
                }
            }
        };
        $scope.changeSex = function(number) {
            $scope.personalInfo.sex = number;
        };
        $scope.changeGrade = function(item) {
            if(!angular.isArray($scope.personalInfo.grades)){
                $scope.personalInfo.grades = [];
            }
            var index = $scope.personalInfo.grades.indexOf(item.key);
            var grades = $scope.personalInfo.grades;
            item.isSelected = !item.isSelected;
            if (!grades) {
                grades = [];
            }
            if (index == -1 && item.isSelected) {
                grades.push(item.key);
            } else {
                grades.splice(index, 1);
            }
        };
        $scope.changeSubject = function(item) {
            if(!angular.isArray($scope.personalInfo.subjects)){
                $scope.personalInfo.subjects = [];
            }
            var index = $scope.personalInfo.subjects.indexOf(item.key);
            var subjects = $scope.personalInfo.subjects;
            item.isSelected = !item.isSelected;
            if (!subjects) {
                subjects = [];
            }
            if (index == -1 && item.isSelected) {
                subjects.push(item.key);
            } else {
                subjects.splice(index, 1);
            }
        };
        $scope.changeTime = function(item) {
            if(!angular.isArray($scope.personalInfo.work_time)){
                $scope.personalInfo.work_time = [];
            }
            var index = $scope.personalInfo.work_time.indexOf(item.key);
            var work_time = $scope.personalInfo.work_time;
            item.isSelected = !item.isSelected;
            if (!work_time) {
                work_time = [];
            }
            if (index == -1 && item.isSelected) {
                work_time.push(item.key);
            } else {
                work_time.splice(index, 1);
            }
        };
        obj.getGrades();
        obj.getTimes();
        obj.getSubjects();
        if (!$stateParams.id) {
            obj.getPersonalInfo();
        } else {
            obj.getTeacherInfo();
        }

        $scope.tabChange = function(curIndex) {
            angular.forEach($scope.dispalyStates, function(val, index) {
                $scope.dispalyStates[index] = false;
            });
            $scope.dispalyStates[curIndex] = true;
        };
        $scope.uploadFiles = function(file, errFiles) {
            $scope.f = file;
            $scope.errFile = errFiles && errFiles[0];
            if (file) {
                file.upload = Upload.upload({
                    url: CONFIG.urlPrefix+'/v1/common/upload',
                    data: {
                        file: file
                    }
                });
                file.upload.then(function(data) {
                    $timeout(function() {
                        $scope.personalInfo.certificate_url = data.data;
                    });
                }, function(response) {
                    if (response.status > 0)
                        $scope.errorMsg = response.status + ': ' + response.data;
                }, function(evt) {
                    file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                });
            }
        };
    }]);
