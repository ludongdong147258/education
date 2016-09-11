angular.module('education')
    .controller('PersonalController', ['$rootScope', '$scope', '$state', 'CONFIG', 'Upload', '$timeout', 'StudentService', '$ionicLoading', 'TeacherService', 'OrganizationService', 'StaffService', function($rootScope, $scope, $state, CONFIG, Upload, $timeout, StudentService, $ionicLoading, TeacherService, OrganizationService, StaffService) {
        var role = $rootScope.user.role;
        $scope.back = function() {
            $state.go('home');
        };
        $scope.uploadFiles = function(file, errFiles) {
            $scope.f = file;
            $scope.errFile = errFiles && errFiles[0];
            if (file) {
                $ionicLoading.show({
                    template: '<ion-spinner icon="ios-small"></ion-spinner>&nbsp;上传中...'
                });
                file.upload = Upload.upload({
                    url: CONFIG.urlPrefix + '/v1/common/upload',
                    data: {
                        file: file
                    }
                });
                file.upload.then(function(data) {
                    $timeout(function() {
                        $rootScope.user.avatar = data.data;
                        var userJson = JSON.stringify($rootScope.user);
                        if (role == 'student') {
                            StudentService.updatePersonalInfo({
                                avatar: data.data,
                                id:$rootScope.user.id
                            }, function(data) {
                                if (data.success == 'Y') {
                                    $ionicLoading.hide();
                                    $rootScope.showMessage('上传成功!');
                                    localStorage.setItem('user', userJson);
                                }
                            }, function(error) {
                                console.error(error);
                                $ionicLoading.hide();
                                $rootScope.showMessage('上传失败!');
                            });
                        } else if (role == 'teacher') {
                            TeacherService.updatePersonalInfo({
                                avatar: data.data,
                                id:$rootScope.user.id
                            }, function(data) {
                                if (data.success == 'Y') {
                                    $ionicLoading.hide();
                                    $rootScope.showMessage('上传成功!');
                                    localStorage.setItem('user', userJson);
                                }
                            }, function(error) {
                                $ionicLoading.hide();
                                $rootScope.showMessage('上传失败!');
                            });
                        } else if (role == 'institution') {
                            OrganizationService.updateOrganizationInfo({
                                avatar: data.data,
                                id:$rootScope.user.id
                            }, function(data) {
                                if (data.success == 'Y') {
                                    $ionicLoading.hide();
                                    $rootScope.showMessage('上传成功!');
                                    localStorage.setItem('user', userJson);
                                }
                            }, function(error) {
                                $ionicLoading.hide();
                                $rootScope.showMessage('上传失败!');
                            });
                        } else if (role == 'manage') {
                            StaffService.updateAvatar({
                                avatar: data.data,
                                id:$rootScope.user.id
                            }, function(data) {
                                if (data.success == 'Y') {
                                    $ionicLoading.hide();
                                    $rootScope.showMessage('上传成功!');
                                    localStorage.setItem('user', userJson);
                                }
                            }, function(error) {
                                $ionicLoading.hide();
                                $rootScope.showMessage('上传失败!');
                            });
                        }
                    });
                }, function(response) {
                    if (response.status > 0) {
                        $scope.errorMsg = response.status + ': ' + response.data;
                        $ionicLoading.hide();
                        $rootScope.showMessage('上传失败!');
                    }
                }, function(evt) {
                    file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                });
            }
        };
        if ($rootScope.user) {
            if (!$rootScope.user.avatar) {
                $rootScope.user.avatar = '././images/person.png';
            }
            $scope.roleDisplay = CONFIG[role];
            switch (role) {
                case 'student':
                    $scope.listItems = [{
                        state: 'studentOrderHardWare',
                        class: 'ion-clock balanced',
                        name: '预约智能硬件'
                    }, {
                        state: 'studentInfo',
                        class: 'ion-person calm',
                        name: '我的资料'
                    }, {
                        state: 'studentOrder',
                        class: 'ion-ios-list energized',
                        name: '我的订单'
                    }, {
                        state: 'reference',
                        class: 'ion-star assertive',
                        name: '我的推荐'
                    }]
                    break;
                case 'teacher':
                    $scope.listItems = [{
                        state: 'teacherOrderHardWare',
                        class: 'ion-clock balanced',
                        name: '预约智能硬件'
                    }, {
                        state: 'teacherInfo',
                        class: 'ion-person calm',
                        name: '我的资料'
                    }, {
                        state: 'reference',
                        class: 'ion-star assertive',
                        name: '我的推荐'
                    }]
                    break;
                case 'institution':
                    $scope.listItems = [{
                        state: 'organizationOrderHardWare',
                        class: 'ion-clock balanced',
                        name: '预约智能硬件'
                    }, {
                        state: 'organizationInfo',
                        class: 'ion-person calm',
                        name: '我的资料'
                    }, {
                        state: 'organizationManager',
                        class: 'ion-ios-people assertive',
                        name: '机构教师管理'
                    }]
                    break;
                case 'manage':
                    $scope.listItems = [{
                        state: 'staffOrder',
                        class: 'ion-ios-list energized',
                        name: '我的订单'
                    }, {
                        state: 'staffOrderService',
                        class: 'ion-ios-list-outline calm',
                        name: '服务订单提交'
                    }, {
                        state: 'examineList',
                        class: 'ion-ios-people positive',
                        name: '机构/教师审核'
                    }]
                    break;
            }
        }
    }]);
