angular.module('education')
    .controller('StudentInfoController', ['$rootScope', '$scope', '$state', 'StudentService', '$timeout', 'ValidateService', function($rootScope, $scope, $state, StudentService, $timeout, ValidateService) {

        // 返回
        $scope.back = function() {
            $state.go('personal');
        };
        $scope.states = [];
        $scope.grades = [];
        // 保存更改
        $scope.saveInfo = function() {
            var flag = obj.validateInput();
            if (flag) {
                StudentService.updatePersonalInfo($scope.personalInfo, function(data) {
                    if (data.success == 'Y') {
                        $rootScope.showMessage('保存成功!');
                    }
                }, function(error) {
                    console.error(error);
                });
            }
        };
        $scope.personalInfo = {};
        var obj = {
            getPersonalInfo: function() {
                StudentService.getPersonalInfo({}, function(data) {
                    if (data.success == 'Y') {
                        var data = data.data;
                        if (data.age) {
                            data.age = parseInt(data.age);
                        }
                        $scope.personalInfo = data;
                        if ($scope.personalInfo.state) {
                            angular.forEach($scope.personalInfo.state, function(val) {
                                angular.forEach($scope.states, function(item) {
                                    if (item.key == val) {
                                        item.isSelected = true;
                                    }
                                })
                            });
                        }
                    }
                }, function(error) {
                    console.error(error);
                });
            },
            getStates: function() {
                StudentService.getStates({}, function(data) {
                    if (data.success == 'Y') {
                        angular.forEach(data.data, function(val, key) {
                            $scope.states.push({
                                key: key,
                                val: val,
                                isSelected: false
                            });
                        });
                    }
                }, function(error) {
                    console.error(error);
                });
            },
            getGrades: function() {
                StudentService.getGrades({}, function(data) {
                    if (data.success == 'Y') {
                        angular.forEach(data.data, function(val, key) {
                            $scope.grades.push({
                                key: key,
                                val: val
                            });
                        });
                    }
                }, function(error) {
                    console.error(error);
                });
            },
            validateInput: function() {
                if (!$scope.personalInfo.truename) {
                    $rootScope.showMessage('姓名不能为空!');
                    return false;
                }
                if (!ValidateService.checkName($scope.personalInfo.truename)) {
                    $rootScope.showMessage('姓名2-7个中文字符!');
                    return false;
                }
                if (!$scope.personalInfo.age) {
                    $rootScope.showMessage('年龄不能为空!');
                    return false;
                }
                if ($scope.personalInfo.age < 8 || $scope.personalInfo.age > 20) {
                    $rootScope.showMessage('年龄8-20岁!');
                    return false;
                }
                if (!$scope.personalInfo.school_name) {
                    $rootScope.showMessage('学校不能为空!');
                    return false;
                }
                return true;
            }
        };
        $scope.changeSex = function(number) {
            $scope.personalInfo.sex = number;
        };
        $scope.changeGrade = function(grade) {
            $scope.personalInfo.grade = grade;
        };
        $scope.changeState = function(item) {
            var state = $scope.personalInfo.state;
            if (!state) {
                state = [];
            }
            var index = state.indexOf(item.key);
            item.isSelected = !item.isSelected;
            if (index == -1 && item.isSelected) {
                state.push(item.key);
            } else {
                state.splice(index, 1);
            }
            $scope.personalInfo.state = state;
        };
        obj.getGrades();
        obj.getStates();
        obj.getPersonalInfo();
    }]);
