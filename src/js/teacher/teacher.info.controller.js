angular.module('education')
    .controller('TeacherInfoController', ['$rootScope', '$scope', '$state', 'TeacherService', 'Upload', '$stateParams','CONFIG','$timeout','ValidateService', function($rootScope, $scope, $state, TeacherService, Upload, $stateParams,CONFIG,$timeout,ValidateService) {
        $scope.appTitle = '我的资料';
        if ($stateParams.id) {
            $scope.appTitle = '机构教师资料编辑';
        }
        $scope.back = function() {
            if ($stateParams.id) {
                $state.go('organizationManager');
            }else{
                $state.go('personal');
            }
        };
        $scope.dispalyStates = [true, false, false];
        $scope.grades = [];
        $scope.worktimes = [];
        $scope.subjects = [];
        // 保存更改
        $scope.saveInfo = function() {
            var flag = obj.validateInput();
            if(flag){
                TeacherService.updatePersonalInfo($scope.personalInfo, function(data) {
                    if (data.success == 'Y') {
                        $rootScope.showMessage('保存成功!');
                        $timeout(function(){
                            $state.go('personal');
                        },1000);
                    }
                }, function(error) {
                    console.error(error);
                });
            }
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
                        that.handleTeacherInfo($scope.personalInfo);
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
                        that.handleTeacherInfo($scope.personalInfo);
                    }
                }, function(error) {
                    console.error(error);
                });
            },
            handleTeacherInfo:function(teacherInfo){
                var that = this;
                if(teacherInfo.bankcard) {
                    teacherInfo.bankcard = Number(teacherInfo.bankcard);
                }
                if(teacherInfo.age){
                    teacherInfo.age = Number(teacherInfo.age);
                }
                if(teacherInfo.worked_year){
                    teacherInfo.worked_year = Number(teacherInfo.worked_year);
                }
                if(teacherInfo.extra_server_fee){
                    teacherInfo.extra_server_fee = parseFloat(teacherInfo.extra_server_fee);
                }
                if(teacherInfo.certificate_url){
                    $scope.f = {};
                    $scope.f.progress = 100;
                }
                that.setGrades(teacherInfo.grades);
                that.setSubjects(teacherInfo.subjects);
                that.setTimes(teacherInfo.work_time);
            },
            getGrades: function() {
                TeacherService.getGrades({}, function(data) {
                    if (data.success == 'Y') {
                        angular.forEach(data.data, function(val, key) {
                            $scope.grades.push({
                                key:key,
                                val:val,
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
                                key:key,
                                val:val,
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
                                key:key,
                                val:val,
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
            },
            validateInput:function(){
                if(!$scope.personalInfo.truename){
                    $rootScope.showMessage('姓名不能为空!');
                    return false;
                }
                if(!ValidateService.checkName($scope.personalInfo.truename)){
                    $rootScope.showMessage('姓名2-7个字符!');
                    return false;
                }
                if(!$scope.personalInfo.certificate_url){
                    $rootScope.showMessage('请上传本人身份证或教职资质照片!');
                    return false;
                }
                if(!$scope.personalInfo.age){
                    $rootScope.showMessage('年龄不能为空!');
                    return false;
                }
                if($scope.personalInfo.age < 20 || $scope.personalInfo.age > 60){
                    $rootScope.showMessage('年龄20-60!');
                    return false;
                }
                return true;
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
