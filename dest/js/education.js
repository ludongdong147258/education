angular.module('education', ['ngResource', 'ionic'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
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
            url: '/teacher',
            cache: false,
            views: {
                baseContent: {
                    templateUrl: './js/teacher/teacher.html',
                    controller: 'TeacherController'
                }
            }
        }).state('teacherOrderHardWare', {
            url: '/teacher/OrderHardWare',
            cache: false,
            views: {
                baseContent: {
                    templateUrl: './js/teacher/order-hardware.html',
                    controller: 'TeacherOrderHardWareController'
                }
            }
        }).state('teacherDetails', {
            url: '/teacher/details',
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
            url: '/news/details',
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
            url: '/studentInfo',
            cache: false,
            views: {
                baseContent: {
                    templateUrl: './js/student/student-info.html',
                    controller: 'StudentInfoController'
                }
            }
        }).state('studentOrderHardWare', {
            url: '/student/OrderHardWare',
            cache: false,
            views: {
                baseContent: {
                    templateUrl: './js/student/order-hardware.html',
                    controller: 'StudentOrderHardWareController'
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
        }).state('order', {
            url: '/order',
            cache: false,
            views: {
                baseContent: {
                    templateUrl: './js/order/order.html',
                    controller: 'OrderController'
                }
            }
        });
    }])
    .controller('MainController', ['$rootScope', '$scope', '$state', '$ionicSideMenuDelegate', '$ionicModal', '$ionicPopup', '$timeout', '$ionicLoading', function($rootScope, $scope, $state, $ionicSideMenuDelegate, $ionicModal, $ionicPopup, $timeout, $ionicLoading) {
        $scope.show = function() {
            $ionicLoading.show({
                template: 'Loading...'
            });
        };
        $scope.hide = function() {
            $ionicLoading.hide();
        };
        $scope.$on('$ionicView.beforeEnter', function() {
            $scope.show();
        });
        $scope.$on('$ionicView.afterEnter', function() {
            $scope.hide();
        });
        $rootScope.showHeaderBar = true;
        $rootScope.isLogin = false; // 是否登录
        $ionicModal.fromTemplateUrl('./js/modal/student-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.studentModal = modal;
        });
        $scope.openStudentModal = function() {
            $scope.studentModal.show();
        };
        $scope.toggleRight = function() {
            $ionicSideMenuDelegate.toggleRight();
        };
        $scope.toTeacher = function() {
            $state.go('teacher');
        }
        $scope.showPopup = function() {
            $scope.data = {};

            // An elaborate, custom popup
            var myPopup = $ionicPopup.show({
                templateUrl: './js/modal/register-modal.html',
                title: '注册京南课堂',
                scope: $scope,
                buttons: [{
                    text: '<b>提交注册</b>',
                    type: 'button-positive',
                    onTap: function(e) {
                        if (!$scope.data.wifi) {
                            //don't allow the user to close unless he enters wifi password
                            e.preventDefault();
                        } else {
                            return $scope.data.wifi;
                        }
                    }
                }]
            });

            myPopup.then(function(res) {
                console.log('Tapped!', res);
            });

            // $timeout(function() {
            //     myPopup.close(); //close the popup after 3 seconds for some reason
            // }, 3000);
        };
    }]);

angular.module('education')
    .controller('FindpwdController', ['$rootScope', '$scope', '$state', function($rootScope, $scope, $state) {
        $rootScope.showHeaderBar = false;
        // 返回
        $scope.back = function() {
            $state.go('login');
        };
    }]);

angular.module('education')
    .controller('HomeController',['$rootScope','$scope',function($rootScope, $scope){
        $rootScope.showHeaderBar = true;
    }]);

angular.module('education')
    .controller('LoginController', ['$rootScope', '$scope', '$state', function($rootScope, $scope, $state) {
        $rootScope.showHeaderBar = false;
        // 返回
        $scope.back = function() {
            $state.go('home');
        };
    }]);

angular.module('education')
    .controller('NewsController', ['$rootScope','$scope', function($rootScope, $scope) {
        $rootScope.showHeaderBar = true;
        $scope.showNewsList = true;
        $scope.showOutcomeList = false;
        // 切换tab
        $scope.changeTab = function(index){
            if(index){
                $scope.showNewsList = false;
                $scope.showOutcomeList = true;
            }else{
                $scope.showNewsList = true;
                $scope.showOutcomeList = false;
            }
        };
    }]);

angular.module('education')
    .controller('NewsDetailsController',['$rootScope','$scope','$state',function($rootScope,$scope,$state){
        $rootScope.showHeaderBar = false;
        // 返回
        $scope.back = function() {
            $state.go('news');
        };
    }]);

angular.module('education')
    .controller('OrderController', ['$rootScope', '$scope', '$state', function($rootScope, $scope, $state) {
        $rootScope.showHeaderBar = false;
        $scope.back = function() {
            window.history.back();
        };
    }]);

angular.module('education')
    .controller('PersonalController', ['$rootScope', '$scope', '$state', function($rootScope, $scope, $state) {
        $rootScope.showHeaderBar = false;
        $scope.back = function(){
            window.history.back();
        };
    }]);

angular.module('education')
    .controller('ReferenceController', ['$rootScope', '$scope', '$state', function($rootScope, $scope, $state) {
        $rootScope.showHeaderBar = false;
        // 返回
        $scope.back = function(){
            $state.go('home');
        };
        $scope.displayStates = [true,false];
        // tab 切换
        $scope.tabChange = function(index){
            angular.forEach($scope.displayStates,function(val,key){
                $scope.displayStates[key] = false;
            });
            $scope.displayStates[index] = true;
        };
    }]);

angular.module('education')
    .controller('RegisterController', ['$rootScope', '$scope', '$state', '$stateParams', function($rootScope, $scope, $state, $stateParams) {
        var tabIndex = $stateParams.tabIndex;
        $rootScope.showHeaderBar = false;
        // 返回
        $scope.back = function() {
            $state.go('home');
        };
        $scope.displayStates = [true, false, false];
        // tab切换
        $scope.tabChange = function(index) {
            angular.forEach($scope.displayStates, function(val, key) {
                $scope.displayStates[key] = false;
            });
            $scope.displayStates[index] = true;
        };
        if (tabIndex) {
            $scope.tabChange(tabIndex);
        }
        // 提交注册-学生
        $scope.registerStudentInfo = function() {
            $state.go('home');
            $rootScope.isLogin = true;
        };
    }]);

angular.module('education')
    .controller('StudentOrderHardWareController', ['$rootScope', '$scope', '$state', function($rootScope, $scope, $state) {
        $rootScope.showHeaderBar = false;
        // 返回
        $scope.back = function() {
            $state.go('home');
        };
        // 免费预约
        $scope.saveOrder = function() {
            $state.go('home');
        };
    }]);

angular.module('education')
    .controller('StudentInfoController', ['$rootScope', '$scope', '$state', function($rootScope, $scope, $state) {
        $rootScope.showHeaderBar = false;
        // 返回
        $scope.back = function() {
            $state.go('home');
        };
        // 保存更改
        $scope.saveInfo = function(){
            $state.go('home');
        };
    }]);

angular.module('education')
    .controller('TeacherOrderHardWareController', ['$rootScope', '$scope', '$state', function($rootScope, $scope, $state) {
        $rootScope.showHeaderBar = false;
        // 返回
        $scope.back = function() {
            $state.go('home');
        };
        // 免费预约
        $scope.saveOrder = function() {
            $state.go('home');
        };
    }]);

angular.module('education')
    .controller('TeacherController',['$rootScope','$scope',function($rootScope,$scope){
        $rootScope.showHeaderBar = true;
    }]);

angular.module('education')
.controller('TeacherDetailsController',['$rootScope', '$scope','$state',function($rootScope, $scope,$state){
    $rootScope.showHeaderBar = false;
    $scope.back = function(){
        $state.go('teacher');
    };
}])

