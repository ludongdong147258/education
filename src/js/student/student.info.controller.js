angular.module('education')
    .controller('StudentInfoController', ['$rootScope', '$scope', '$state', 'StudentService', function($rootScope, $scope, $state, StudentService) {
        $rootScope.showHeaderBar = false;
        // 返回
        $scope.back = function() {
            window.history.back();
        };
        $scope.states = [];
        $scope.grades = [];
        // 保存更改
        $scope.saveInfo = function() {
            StudentService.updatePersonalInfo($scope.personalInfo, function(data) {
                if (data.success == 'Y') {
                    $scope.personalInfo = data.data;
                    $rootScope.showMessage('保存成功!');
                }
            }, function(error) {
                console.error(error);
            });
        };
        $scope.personalInfo = {};
        var obj = {
            getPersonalInfo: function() {
                StudentService.getPersonalInfo({}, function(data) {
                    if (data.success == 'Y') {
                        var data = data.data;
                        if(data.age){
                            data.age = parseInt(data.age);
                        }
                        $scope.personalInfo = data;
                        if($scope.personalInfo.state){
                            angular.forEach($scope.personalInfo.state,function(val){
                                angular.forEach($scope.states,function(item){
                                    if(item.key == val) {
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
            getGrades: function() {
                StudentService.getGrades({}, function(data) {
                    if (data.success == 'Y') {
                        angular.forEach(data.data, function(val, key) {
                            $scope.grades.push({
                                key,
                                val
                            });
                        });
                    }
                }, function(error) {
                    console.error(error);
                });
            }
        };
        $scope.changeSex = function(number) {
            $scope.personalInfo.sex = number;
        };
        $scope.changeGrade = function(grade) {
            $scope.personalInfo.grade = grade;
        };
        $scope.changeState = function(item) {
            var index = $scope.personalInfo.state.indexOf(item.key);
            var state = $scope.personalInfo.state;
            item.isSelected = !item.isSelected;
            if (!state) {
                state = [];
            }
            if (index == -1 && item.isSelected) {
                state.push(item.key);
            } else {
                state.splice(index, 1);
            }
        };
        obj.getGrades();
        obj.getStates();
        obj.getPersonalInfo();
    }]);