angular.module('education', ['ngResource', 'ionic', 'ngFileUpload'])
    .config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        $ionicConfigProvider.views.maxCache(5); // 不缓存页面
        $ionicConfigProvider.templates.maxPrefetch(0); // 不进行预加载界面
        $urlRouterProvider.otherwise('/home');
        $stateProvider.state('home', {
                url: '/home',
                cache: false,
                views: {
                    baseContent: {
                        templateUrl: './js/home/home.html',
                        controller: 'HomeController'
                    }
                }
            }).state('login', {
                url: '/login',
                cache: false,
                views: {
                    baseContent: {
                        templateUrl: './js/login/login.html',
                        controller: 'LoginController'
                    }
                }
            }).state('findpwd', {
                url: '/findpwd',
                cache: false,
                views: {
                    baseContent: {
                        templateUrl: './js/findpwd/findpwd.html',
                        controller: 'FindpwdController'
                    }
                }
            }).state('teacher', {
                url: '/teacher?type',
                cache: false,
                views: {
                    baseContent: {
                        templateUrl: './js/teacher/teacher.html',
                        controller: 'TeacherController'
                    }
                }
            }).state('teacherInfo', {
                url: '/teacher/info/{id}',
                cache: false,
                views: {
                    baseContent: {
                        templateUrl: './js/teacher/teacher-info.html',
                        controller: 'TeacherInfoController'
                    }
                }
            }).state('teacherOrderHardWare', {
                url: '/teacher/orderHardWare',
                cache: false,
                views: {
                    baseContent: {
                        templateUrl: './js/teacher/order-hardware.html',
                        controller: 'TeacherOrderHardWareController'
                    }
                }
            }).state('teacherDetails', {
                url: '/teacher/details/{id}',
                cache: false,
                views: {
                    baseContent: {
                        templateUrl: './js/teacher/teacher-details.html',
                        controller: 'TeacherDetailsController'
                    }
                }
            }).state('news', {
                url: '/news',
                cache: false,
                views: {
                    baseContent: {
                        templateUrl: './js/news/news.html',
                        controller: 'NewsController'
                    }
                }
            }).state('newsDetails', {
                url: '/news/details/{id}',
                cache: false,
                views: {
                    baseContent: {
                        templateUrl: './js/news/news-details.html',
                        controller: 'NewsDetailsController'
                    }
                }
            }).state('register', {
                url: '/register?tabIndex',
                cache: false,
                views: {
                    baseContent: {
                        templateUrl: './js/register/register.html',
                        controller: 'RegisterController'
                    }
                }
            }).state('studentInfo', {
                url: '/student/info',
                cache: false,
                views: {
                    baseContent: {
                        templateUrl: './js/student/student-info.html',
                        controller: 'StudentInfoController'
                    }
                }
                // ,
                // resolve:{
                //     grades:['StudentService',function(StudentService){
                //         return StudentService.getGrades({},function(data){
                //             return data.data;
                //         });
                //     }]
                // }
            }).state('studentOrderHardWare', {
                url: '/student/orderHardWare?id&name',
                cache: false,
                views: {
                    baseContent: {
                        templateUrl: './js/student/order-hardware.html',
                        controller: 'StudentOrderHardWareController'
                    }
                }
            }).state('studentOrderDetails', {
                url: '/student/order/details',
                cache: false,
                views: {
                    baseContent: {
                        templateUrl: './js/student/order-details.html',
                        controller: 'StudentOrderDetailsController'
                    }
                }
            }).state('reference', {
                url: '/reference',
                cache: false,
                views: {
                    baseContent: {
                        templateUrl: './js/reference/reference.html',
                        controller: 'ReferenceController'
                    }
                }
            }).state('personal', {
                url: '/personal',
                cache: false,
                views: {
                    baseContent: {
                        templateUrl: './js/personal/personal.html',
                        controller: 'PersonalController'
                    }
                }
            }).state('studentOrder', {
                url: '/student/order',
                cache: false,
                views: {
                    baseContent: {
                        templateUrl: './js/student/order.html',
                        controller: 'StudentOrderController'
                    }
                }
            }).state('organizationInfo', {
                url: '/organization/info',
                cache: false,
                views: {
                    baseContent: {
                        templateUrl: './js/organization/info.html',
                        controller: 'OrganizationInfoController'
                    }
                }
            }).state('organizationManager', {
                url: '/organization/manager',
                cache: false,
                views: {
                    baseContent: {
                        templateUrl: './js/organization/manager.html',
                        controller: 'OrganizationManagerController'
                    }
                }
            }).state('organizationAddTeacher', {
                url: '/organization/addTeacher',
                cache: false,
                views: {
                    baseContent: {
                        templateUrl: './js/organization/add-teacher.html',
                        controller: 'OrganizationAddTeacherController'
                    }
                }
            }).state('staffOrder', {
                url: '/staff/order',
                cache: false,
                views: {
                    baseContent: {
                        templateUrl: './js/staff/order.html',
                        controller: 'StaffOrderController'
                    }
                }
            }).state('staffOrderService', {
                url: '/staff/order/create',
                cache: false,
                views: {
                    baseContent: {
                        templateUrl: './js/staff/order-service.html',
                        controller: 'StaffOrderServiceController'
                    }
                }
            }).state('staffOrderDetails', {
                url: '/staff/order/details',
                cache: false,
                views: {
                    baseContent: {
                        templateUrl: './js/staff/order.details.html',
                        controller: 'StaffOrderDetailsController'
                    }
                }
            }).state('examineList', {
                url: '/exmaine/list',
                cache: false,
                views: {
                    baseContent: {
                        templateUrl: './js/staff/examine.list.html',
                        controller: 'ExamineController'
                    }
                }
            }).state('examineTeacher', {
                url: '/exmaine/teacher/{id}',
                cache: false,
                views: {
                    baseContent: {
                        templateUrl: './js/staff/teacher.details.html',
                        controller: 'ExamineTeacherController'
                    }
                }
            })
            .state('examineOrganization', {
                url: '/exmaine/organization/{id}',
                cache: false,
                views: {
                    baseContent: {
                        templateUrl: './js/staff/organization.details.html',
                        controller: 'ExamineOrganizationController'
                    }
                }
            })
            .state('search', {
                url: '/search',
                cache: false,
                views: {
                    baseContent: {
                        templateUrl: './js/search/search.html',
                        controller: 'SearchController'
                    }
                }
            });
    }])
    .controller('MainController', ['$rootScope', '$scope', '$state', '$ionicSideMenuDelegate', '$ionicModal', '$ionicPopup', '$timeout', '$ionicLoading', '$ionicPopover', function($rootScope, $scope, $state, $ionicSideMenuDelegate, $ionicModal, $ionicPopup, $timeout, $ionicLoading, $ionicPopover) {
        $rootScope.showHeaderBar = true;
        $rootScope.showMessage = function(msg, delayTime) {
            delayTime = delayTime || 1000;
            $ionicLoading.show({
                template: msg
            });
            window.setTimeout(function() {
                $ionicLoading.hide();
            }, delayTime);
        };
        $scope.toggleRight = function() {
            $ionicSideMenuDelegate.toggleRight();
        };
        $scope.goToSearch = function() {
            $state.go('search');
        }
        $scope.logout = function() {
            $rootScope.user = null;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        };
    }]).run(['$rootScope', '$ionicLoading', 'CONFIG', function($rootScope, $ionicLoading, CONFIG) {
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            $ionicLoading.show({
                template: '<i class="icon ion-load-a"></i>'
            });
        });
        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            $ionicLoading.hide();
        });
        if (CONFIG.user) {
            $rootScope.user = JSON.parse(CONFIG.user);
        }
    }]).constant('CONFIG', {
        urlPrefix: 'http://101.200.131.30:8020',
        token: localStorage.getItem('token'),
        user: localStorage.getItem('user'),
        student: '学生',
        teacher: '老师',
        institution: '机构',
        manage: '工作人员'
    });