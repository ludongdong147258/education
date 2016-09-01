angular.module('education', ['ngResource', 'ionic', 'ngFileUpload','monospaced.qrcode'])
    .config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        $ionicConfigProvider.views.maxCache(5); // 不缓存页面
        $ionicConfigProvider.templates.maxPrefetch(0); // 不进行预加载界面
        $urlRouterProvider.otherwise('/news');
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
                // cache: false,
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
                url: '/student/order/details?id',
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
                url: '/staff/order/details?id',
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
                url: '/search?type',
                cache: false,
                views: {
                    baseContent: {
                        templateUrl: './js/search/search.html',
                        controller: 'SearchController'
                    }
                }
            }).state('updatepwd', {
                url: '/updatepwd',
                cache: false,
                views: {
                    baseContent: {
                        templateUrl: './js/updatepwd/updatepwd.html',
                        controller: 'UpdatepwdController'
                    }
                }
            }).state('recommend', {
                url: '/recommend',
                views: {
                    baseContent: {
                        templateUrl: './js/recommend/recommend.html',
                        controller: 'RecommendController'
                    }
                }
            }).state('organizationOrderHardWare', {
                url: '/organization/orderHardWare',
                views: {
                    baseContent: {
                        templateUrl: './js/organization/order-hardware.html',
                        controller: 'InstitutionOrderHardWareController'
                    }
                }
            });
    }])
    .controller('MainController', ['$rootScope', '$scope', '$state', '$ionicSideMenuDelegate', '$ionicModal', '$ionicPopup', '$timeout', '$ionicLoading', '$ionicPopover', function($rootScope, $scope, $state, $ionicSideMenuDelegate, $ionicModal, $ionicPopup, $timeout, $ionicLoading, $ionicPopover) {
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
            $state.go('news');
        };
    }]).run(['$rootScope', '$ionicLoading', 'CONFIG', function($rootScope, $ionicLoading, CONFIG) {
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            $ionicLoading.show({
                template:'<ion-spinner icon="ios-small"></ion-spinner>'
            });
        });
        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            $ionicLoading.hide();
        });
        $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams) {
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
    }).directive('scrollHeight', ['$window', function($window) {
        return {
            restrict: 'AE',
            link: function(scope, element, attr) {
                element[0].style.height = ($window.innerHeight - 44) + 'px';
                element.attr('scroll', false);
            }
        }
    }]);

angular.module('education')
    .filter('TypeFilter', ['CONFIG', function() {
        return function(type) {
            return CONFIG[type];
        };
    }]);

angular.module('education')
    .controller('FindpwdController', ['$rootScope', '$scope', '$state', 'FindpwdService', '$timeout', 'RegisterService', function($rootScope, $scope, $state, FindpwdService, $timeout, RegisterService) {
        $rootScope.showHeaderBar = false;
        $scope.findpwdInfo = {};
        var obj = {
            validateInput: function() {
                if (!$scope.findpwdInfo.mobile) {
                    $rootScope.showMessage('请输入手机号!');
                    return false;
                }
                if (!$scope.findpwdInfo.smscode) {
                    $rootScope.showMessage('请输入验证码!');
                    return false;
                }
                if (!$scope.findpwdInfo.password) {
                    $rootScope.showMessage('请输入新密码!');
                    return false;
                }
                return true;
            }
        };
        var count = 60,
            timerId = null;
        $scope.btnState = false;
        $scope.count = count;
        // 返回
        $scope.back = function() {
            $state.go('login');
        };
        $scope.saveNewPwd = function() {
            var flag = obj.validateInput();
            if (flag) {
                FindpwdService.saveNewPwd($scope.findpwdInfo, function(data) {
                    if (data.success == 'Y') {
                        $rootScope.showMessage('保存成功!');
                        $timeout(function() {
                            $state.go('login');
                        }, 1000);
                    }
                }, function(error) {
                    $rootScope.showMessage('保存失败!');
                });
            }
        };
        // 获取验证码
        $scope.getSmsCode = function() {
            if (!$scope.findpwdInfo.mobile) {
                $rootScope.showMessage('请填写手机号!');
                return false;
            }
            $scope.btnState = true;
            RegisterService.getSmsCode({
                mobile: $scope.findpwdInfo.mobile
            }, function(data) {
                if (data.success == 'Y') {
                    reduceCount();
                    $rootScope.showMessage('验证码发送成功!');
                }
            }, function(error) {
                $rootScope.showMessage('验证码发送失败!');
                console.log(error);
            });
        };

        function reduceCount() {
            $scope.count = count;
            if (count == 0) {
                $scope.btnState = false;
                $timeout(timerId);
                return;
            }
            count--;
            timerId = $timeout(reduceCount, 1000);
        }
    }]);

angular.module('education')
    .factory('FindpwdService', ['$resource','CONFIG', function($resource,CONFIG) {
        return $resource(CONFIG.urlPrefix+'/v1/account/findpassword', {}, {
            saveNewPwd: {
                method: 'post',
                headers:{
                    token:CONFIG.token
                }
            }
        });
    }]);

angular.module('education')
    .controller('HomeController', ['$rootScope', '$scope', 'CONFIG', 'HomeService', 'StudentService', '$state', function($rootScope, $scope, CONFIG, HomeService, StudentService, $state) {
        $rootScope.showHeaderBar = true;
        if ($rootScope.user) {
            switch ($rootScope.user.role) {
                case 'student':
                    $scope.listItems = [{
                        state: 'studentOrderHardWare',
                        name: '预定智能硬件'
                    }, {
                        state: 'studentInfo',
                        name: '补全学生资料'
                    }, {
                        state: 'reference',
                        name: '邀请老师/同学加入'
                    }];
                    break;
                case 'teacher':
                    $scope.listItems = [{
                        state: 'teacherOrderHardWare',
                        name: '预定智能硬件'
                    }, {
                        state: 'teacherInfo',
                        name: '认证教师资料'
                    }, {
                        state: 'reference',
                        name: '邀请老师/同学加入'
                    }];
                    break;
                case 'institution':
                    $scope.listItems = [{
                        state: 'teacherOrderHardWare',
                        name: '预定智能硬件'
                    }, {
                        state: 'organizationInfo',
                        name: '认证机构资料'
                    }, {
                        state: 'organizationManager',
                        name: '管理机构教师'
                    }];
                    break;
                case 'manage':
                    $scope.listItems = [{
                        state: 'staffOrderService',
                        name: '提交订单'
                    }, {
                        state: 'examineList',
                        name: '审核教师/机构'
                    }];
                    break;
            }
        }
        $scope.hasHardWare = function(state, e) {
            if (state == 'studentOrderHardWare') {
                e.preventDefault();
                StudentService.hasHardWare({}, function(data) {
                    if (data.success == 'Y') {
                        $rootScope.showMessage('预定申请已受理,我们的工作人员将在您指定的日期电话联系您并上门为您安装智能硬件!', 3000);
                    } else {
                        $state.go('studentOrderHardWare');
                    }
                });
            }
        }
    }]);

angular.module('education')
    .factory('HomeService', ['$resource', 'CONFIG', function($resource, CONFIG) {
        return $resource(CONFIG.urlPrefix + '/v1/account/update', {}, {
            getSelfInfo: {
                method: 'post',
                headers:{
                    token:CONFIG.token
                }
            }
        });
    }]);

angular.module('education')
    .controller('LoginController', ['$rootScope', '$scope', '$state', 'LoginService', 'CONFIG', '$ionicLoading', '$timeout', function($rootScope, $scope, $state, LoginService, CONFIG, $ionicLoading, $timeout) {
        $rootScope.showHeaderBar = false;
        var obj = {
            validateInput: function() {
                if (!$scope.loginInfo.mobile) {
                    $rootScope.showMessage('请输入手机号!');
                    return false;
                };
                if (!$scope.loginInfo.password) {
                    $rootScope.showMessage('请输入密码!');
                    return false;
                };
                return true;
            }
        };
        $scope.loginInfo = {
            type: 'student'
        };
        // 返回
        $scope.back = function() {
            $state.go('news');
        };
        $scope.login = function() {
            var flag = obj.validateInput();
            if (flag) {
                $ionicLoading.show({
                    template: '登录中...'
                });
                LoginService.login($scope.loginInfo, function(data) {
                    if (data.success == 'Y') {
                        $ionicLoading.hide();
                        CONFIG.token = data.data.token;
                        $rootScope.showMessage('登录成功!');
                        var user = data.data.user;
                        user.role = $scope.loginInfo.type;
                        localStorage.setItem("token", data.data.token);
                        localStorage.setItem("user", JSON.stringify(user));
                        CONFIG.user = user;
                        $rootScope.user = user;
                        $timeout(function() {
                            $state.go('news', null, {
                                reload: true
                            });
                        }, 1000);
                    } else {
                        $rootScope.showMessage(data.msg);
                    }
                }, function(error) {
                    $ionicLoading.hide();
                    $rootScope.showMessage('登录失败!');
                });
            }
        };
    }]);

angular.module('education')
    .factory('LoginService', ['$resource', 'CONFIG', function($resource, CONFIG) {
        return $resource(CONFIG.urlPrefix + '/v1/account/login', {}, {
            login: {
                method: 'post'
            }
        });
    }]);

angular.module('education')
    .controller('NewsController', ['$rootScope', '$scope', 'NewsService', function($rootScope, $scope, NewsService) {
        $scope.showNewsList = true;
        $scope.showOutcomeList = false;
        $scope.newsList = [];
        $scope.hasMoreData = true;
        var page = 1,
            type = 'news';
        var obj = {
            loadNews: function() {
                NewsService.getNewsList({
                    page: page,
                    type: type
                }, function(data) {
                    if (data.success == 'Y') {
                        $scope.newsList = $scope.newsList.concat(data.data);
                        $scope.$broadcast('scroll.infiniteScrollComplete');
                        if (data.data.length > 0) {
                            $scope.hasMoreData = true;
                        } else {
                            $scope.hasMoreData = false;
                        }
                    }
                }, function(error) {
                    console.log(error);
                });
            }
        };
        obj.loadNews();
        // 切换tab
        $scope.changeTab = function(index) {
            page = 1;
            $scope.newsList.length = 0;
            if (index) {
                $scope.showNewsList = false;
                $scope.showOutcomeList = true;
                type = 'achieved';
            } else {
                $scope.showNewsList = true;
                $scope.showOutcomeList = false;
                type = 'news';
            }
            obj.loadNews();
        };
        $scope.loadMore = function() {
            page++;
            obj.loadNews();
        };
        $scope.refreshNews = function() {
            page = 1;
            $scope.newsList.length = 0;
            obj.loadNews();
        };
        if ($rootScope.user) {
            switch ($rootScope.user.role) {
                case 'student':
                    $rootScope.listItems = [{
                        state: 'studentOrderHardWare',
                        name: '预约智能硬件',
                        class: 'yuding-icon'
                    }];
                    break;
                case 'teacher':
                    $rootScope.listItems = [{
                        state: 'teacherOrderHardWare',
                        name: '预约智能硬件',
                        class: 'yuding-icon'
                    }];
                    break;
                case 'institution':
                    $rootScope.listItems = [{
                        state: 'organizationOrderHardWare',
                        name: '预约智能硬件',
                        class: 'yuding-icon'
                    }];
                    break;
            }
        }
    }]);

angular.module('education')
    .controller('NewsDetailsController', ['$rootScope', '$scope', '$state', 'NewsService', '$stateParams', function($rootScope, $scope, $state, NewsService, $stateParams) {
        $rootScope.showHeaderBar = false;
        // 返回
        $scope.back = function() {
            $state.go('news');
        };
        $scope.newsInfo = {};
        var obj = {
            getNewsDetails: function() {
                NewsService.getNewsDetails({
                    id: $stateParams.id
                }, function(data) {
                    if (data.success == 'Y') {
                        $scope.newsInfo = data.data;
                    }
                }, function(error) {
                    console.error(error);
                });
            }
        };
        obj.getNewsDetails();
    }]);

angular.module('education')
    .factory('NewsService', ['$resource', 'CONFIG', function($resource, CONFIG) {
        return $resource(CONFIG.urlPrefix + '/v1/news/lists', {}, {
            getNewsList: {
                method: 'get'
            },
            getNewsDetails: {
                method: 'get',
                url: CONFIG.urlPrefix + '/v1/news/detail/:id'
            }
        });
    }]);

angular.module('education')
    .controller('OrganizationAddTeacherController', ['$rootScope', '$scope', '$state', 'OrganizationService','$timeout', function($rootScope, $scope, $state, OrganizationService,$timeout) {
        $rootScope.showHeaderBar = false;
        $scope.back = function() {
            $state.go('organizationManager');
        };
        $scope.teacherInfo = {
            sex: 1
        };
        $scope.addTeacher = function() {
            var flag = obj.validateInput();
            if (flag) {
                OrganizationService.addTeacher($scope.teacherInfo, function(data) {
                    if (data.success == 'Y') {
                        $rootScope.showMessage('新增成功!');
                        $timeout(function(){
                            $state.go('organizationManager');
                        },1000);
                    }
                }, function(error) {
                    console.error(error);
                    $rootScope.showMessage('新增失败!');
                });
            }
        };
        $scope.changeSex = function(num) {
            $scope.teacherInfo.sex = num;
        };
        var obj = {
            validateInput: function() {
                if (!$scope.teacherInfo.truename) {
                    $rootScope.showMessage('教师姓名不能为空!');
                    return false;
                }
                if (!$scope.teacherInfo.mobile) {
                    $rootScope.showMessage('手机号码不能为空!');
                    return false;
                }
                if (!$scope.teacherInfo.password) {
                    $rootScope.showMessage('密码不能为空!');
                    return false;
                }
                return true;
            }
        };
    }]);

angular.module('education')
    .controller('InstitutionOrderHardWareController', ['$rootScope', '$scope', '$state', '$timeout', 'StudentService', function($rootScope, $scope, $state, $timeout, StudentService) {
        $scope.city = {
            key: '',
            id: ''
        };
        $scope.province = {key:''};
        // 返回
        $scope.back = function() {
            $state.go('news');
        };
        // 免费预约
        $scope.saveOrder = function() {
            var flag = obj.validateInput();
            if(flag){
                if (!$scope.hardwareInfo.mobile) {
                    $scope.hardwareInfo.mobile = parseInt($rootScope.user.mobile);
                }
                $scope.hardwareInfo.address_id = $scope.city.id;
                $scope.hardwareInfo.member_type = $rootScope.user.role;
                StudentService.orderHardWare($scope.hardwareInfo, function(data) {
                    if (data.success == 'Y') {
                        $rootScope.showMessage('预定申请已受理,我们的工作人员将在您指定的日期电话联系您并上门为您安装智能硬件!', 5000);
                        $timeout(function() {
                            $state.go('news');
                        }, 3000);
                    } else {
                        angular.forEach(data.msg, function(val, key) {
                            $rootScope.showMessage(data.msg[key]);
                        });
                    }
                }, function(error) {
                    console.error(error);
                    $rootScope.showMessage('预定失败!');
                });
            }
        };
        $scope.hardwareInfo = {recommend_type:1};
        var addresses = [];
        $scope.provinces = [];
        $scope.cities = [];
        var obj = {
            getAddressList: function() {
                StudentService.getAddressList({}, function(data) {
                    if (data.success == 'Y') {
                        addresses = data.data;
                        var tempKey = '';
                        angular.forEach(data.data, function(item, index) {
                            if (tempKey != item.province) {
                                $scope.provinces.push({
                                    key: item.province
                                });
                                tempKey = item.province;
                            }
                        });
                    }
                }, function(error) {
                    console.log(error);
                });
            },
            validateInput: function() {
                var hardwareInfo = $scope.hardwareInfo;
                if (!hardwareInfo.time) {
                    $rootScope.showMessage("日期不能为空!");
                    return false;
                }
                if (!$scope.province.key) {
                    $rootScope.showMessage("省份不能为空!");
                    return false;
                }
                if (!$scope.city.key) {
                    $rootScope.showMessage("城市不能为空!");
                    return false;
                }
                if (!hardwareInfo.address_detail) {
                    $rootScope.showMessage("上门安装地址不能为空!");
                    return false;
                }
                if (!hardwareInfo.link_name) {
                    $rootScope.showMessage("联系人姓名不能为空!");
                    return false;
                }
                return true;
            }
        };
        obj.getAddressList();
        $scope.changeProvince = function(curItem) {
            $scope.province = curItem;
            $scope.cities = [];
            angular.forEach(addresses, function(item) {
                if (item.province == curItem.key) {
                    $scope.cities.push({
                        key: item.city,
                        id: item.id
                    });
                }
            });
        };
        $scope.changeCity = function(curItem) {
            $scope.city = curItem;
        };
    }]);

angular.module('education')
    .controller('OrganizationInfoController', ['$rootScope', '$scope', '$state', 'OrganizationService', 'Upload', 'CONFIG', '$timeout', function($rootScope, $scope, $state, OrganizationService, Upload, CONFIG, $timeout) {
        $rootScope.showHeaderBar = false;
        $scope.back = function() {
            $state.go('personal');
        };
        $scope.dispalyStates = [true, false, false];
        $scope.organizationInfo = {};
        $scope.saveInfo = function() {
            OrganizationService.updateOrganizationInfo($scope.organizationInfo, function(data) {
                if (data.success == 'Y') {
                    $rootScope.showMessage('保存成功!');
                }
            }, function(error) {
                $rootScope.showMessage('保存失败!');
                console.error(error);
            });
        };
        $scope.tabChange = function(curIndex) {
            angular.forEach($scope.dispalyStates, function(val, index) {
                $scope.dispalyStates[index] = false;
            });
            $scope.dispalyStates[curIndex] = true;
        };
        var obj = {
            getOrganizationInfo: function() {
                OrganizationService.getOrganizationInfo({}, function(data) {
                    if (data.success == 'Y') {
                        $scope.organizationInfo = data.data;
                        if($scope.organizationInfo.certificate_url){
                            $scope.f = {};
                            $scope.f.progress = 100;
                        }
                    }
                }, function(error) {
                    console.error(error);
                });
            }
        };
        obj.getOrganizationInfo();
        $scope.uploadFiles = function(file, errFiles) {
            $scope.f = file;
            $scope.errFile = errFiles && errFiles[0];
            if (file) {
                file.upload = Upload.upload({
                    url: CONFIG.urlPrefix + '/v1/common/upload',
                    data: {
                        file: file
                    }
                });
                file.upload.then(function(data) {
                    $timeout(function() {
                        $scope.organizationInfo.certificate_url = data.data;
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

angular.module('education')
    .controller('OrganizationManagerController', ['$rootScope', '$scope', '$state', 'OrganizationService', '$ionicPopup', function($rootScope, $scope, $state, OrganizationService, $ionicPopup) {
        $rootScope.showHeaderBar = false;
        $scope.back = function() {
            $state.go('personal');
        };
        $scope.teacherList = [];
        var obj = {
            loadList: function() {
                OrganizationService.getTeacherList({}, function(data) {
                    if (data.success == 'Y') {
                        $scope.teacherList = data.data;
                    }
                }, function(error) {
                    console.error(error);
                });
            }
        };
        obj.loadList();
        $scope.deleteTeacher = function(id, index) {
            var confirmPopup = $ionicPopup.confirm({
                title: '删除',
                template: '您确定要删除吗？',
                okText:'确定',
                cancelText:'取消',
                okType:'button-energized',
                cancelType:'button-dark'
            });
            confirmPopup.then(function(res) {
                if (res) {
                    OrganizationService.deleteTeacher({
                        teacher_id: id
                    }, function(data) {
                        if (data.success == 'Y') {
                            $scope.teacherList.splice(index, 1);
                            $rootScope.showMessage('删除成功!');
                        } else {
                            $rootScope.showMessage('删除失败!');
                        }
                    }, function(error) {
                        console.error(error);
                    });
                }
            });
        };
    }]);

angular.module('education')
    .factory('OrganizationService', ['$resource', 'CONFIG',function($resource,CONFIG) {
        return $resource(CONFIG.urlPrefix + '/v1/institution/teachers', {}, {
            getTeacherList: {
                method: 'get',
                headers: {
                    token: CONFIG.token
                }
            },
            deleteTeacher:{
                url:CONFIG.urlPrefix+'/v1/institution/delteacher',
                method:'post',
                headers:{
                    token:CONFIG.token
                }
            },
            addTeacher:{
                url:CONFIG.urlPrefix+'/v1/institution/addteacher',
                method:'post',
                headers:{
                    token:CONFIG.token
                }
            },
            updateOrganizationInfo:{
                url:CONFIG.urlPrefix+'/v1/institution/update',
                method:'post',
                headers:{
                    token:CONFIG.token
                }
            },
            getOrganizationInfo:{
                url:CONFIG.urlPrefix+'/v1/account/detail',
                method:'get',
                headers:{
                    token:CONFIG.token
                }
            }
        });
    }]);

angular.module('education')
    .controller('PersonalController', ['$rootScope', '$scope', '$state', 'CONFIG', function($rootScope, $scope, $state, CONFIG) {
        $rootScope.showHeaderBar = false;
        $scope.back = function() {
            $state.go('news');
        };
        if ($rootScope.user) {
            if (!$rootScope.user.avatar) {
                $rootScope.user.avatar = '././images/person.png';
            }
            var role = $rootScope.user.role;
            $scope.roleDisplay = CONFIG[role];
            switch (role) {
                case 'student':
                    $scope.listItems = [{
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
                    $scope.listItems = ['organizationInfo'];
                    $scope.listItems = [{
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

angular.module('education')
    .controller('RecommendController', ['$rootScope', '$scope', '$state', '$stateParams', 'SearchService', function($rootScope, $scope, $state, $stateParams, SearchService) {
        // 返回
        $scope.back = function() {
            $state.go('news');
        };
        $scope.recommendList = [];
        var obj = {
            init: function() {
                obj.loadList();
            },
            loadList: function() {
                SearchService.getRecommendTeacherList({}, function(data) {
                    if (data.success == 'Y') {
                        data.data.stars = [];
                        for (var i = 0; i < data.data.star; i++) {
                            data.data.stars.push(i);
                        }
                        $scope.recommendList = data.data;
                    }
                }, function(error) {
                    console.error(error);
                });
            }
        };
        obj.init();
    }]);

angular.module('education')
    .controller('ReferenceController', ['$rootScope', '$scope', '$state', 'ReferenceService', 'CONFIG', function($rootScope, $scope, $state, ReferenceService, CONFIG) {
        var code = localStorage.getItem('code');
        // 返回
        $scope.back = function() {
            $state.go('personal');
        };
        $scope.displayStates = [true, false];
        $scope.invitedList = [];
        // tab 切换
        $scope.tabChange = function(index) {
            angular.forEach($scope.displayStates, function(val, key) {
                $scope.displayStates[key] = false;
            });
            $scope.displayStates[index] = true;
            if (index) {
                obj.loadList();
            }
        };
        var obj = {
            loadList: function() {
                ReferenceService.getInvitedList({}, function(data) {
                    if (data.success == 'Y') {
                        $scope.invitedList = data.data;
                    }
                }, function(error) {
                    console.error(error);
                });
            }
        };
        var baseUrl = '/src/#/register';
        if (code) {
            baseUrl += '?code=' + code;
        }
        $scope.qrcodeInfo = {
            link: CONFIG.urlPrefix + baseUrl,
            v: 5,
            e: 'M',
            s: 200
        };
    }]);

angular.module('education')
    .factory('ReferenceService', ['$resource', 'CONFIG', function($resource, CONFIG) {
        return $resource(CONFIG.urlPrefix + '/v1/inviterecord/lists', {}, {
            getInvitedList: {
                method: 'get',
                headers: {
                    'token': CONFIG.token
                }
            }
        });
    }]);

angular.module('education')
    .controller('RegisterController', ['$rootScope', '$scope', '$state', '$stateParams', 'RegisterService', 'LoginService', '$timeout','CONFIG', function($rootScope, $scope, $state, $stateParams, RegisterService, LoginService, $timeout,CONFIG) {
        var obj = {
            validateInput: function(type) {
                if (!$scope.registerInfo[type].mobile) {
                    $rootScope.showMessage('请填写手机号!');
                    return false;
                }
                if (!$scope.registerInfo[type].smscode) {
                    $rootScope.showMessage('请填写短信验证码!');
                    return false;
                }
                if (!$scope.registerInfo[type].password) {
                    $rootScope.showMessage('请填写密码!');
                    return false;
                }
                return true;
            }
        };
        var tabIndex = $stateParams.tabIndex;
        var curIndex = 0;
        var counts = [60, 60, 60],
            timerId = null;
        var types = ['student', 'teacher', 'institution'];
        $scope.btnStates = [false, false, false];
        $scope.counts = [counts[0], counts[1], counts[2]];
        $scope.registerInfo = {
            student: {
                type: types[0]
            },
            teacher: {
                type: types[1]
            },
            institution: {
                type: types[2]
            }
        };
        // 返回
        $scope.back = function() {
            $state.go('news');
        };
        $scope.displayStates = [true, false, false];
        // tab切换
        $scope.tabChange = function(index) {
            angular.forEach($scope.displayStates, function(val, key) {
                $scope.displayStates[key] = false;
            });
            $scope.displayStates[index] = true;
            curIndex = index;
        };
        if (tabIndex) {
            $scope.tabChange(tabIndex);
        }
        // 提交注册
        $scope.submitRegisterInfo = function() {
            var type = types[curIndex];
            var flag = obj.validateInput(type);
            if (flag) {
                RegisterService.register(
                    $scope.registerInfo[type],
                    function(data) {
                        if (data.success == 'Y') {
                            CONFIG.token = data.data.token;
                            var user = data.data.user;
                            user.role = type;
                            if(user.invite_code){
                                localStorage.setItem("code",user.invite_code);
                            }
                            localStorage.setItem("token",data.data.token);
                            localStorage.setItem("user",JSON.stringify(user));
                            CONFIG.user = user;
                            $rootScope.user = user;
                            $rootScope.showMessage('注册成功!');
                            $state.go('news',null,{reload:true});
                        } else if (data.success == 'N') {
                            for (var prop in data.msg) {
                                $rootScope.showMessage(data.msg[prop]);
                            }
                        }
                    },
                    function(error) {
                        $rootScope.showMessage('注册失败!');
                    });
            }
        };
        // 获取验证码
        $scope.getSmsCode = function() {
            if (!$scope.registerInfo[types[curIndex]].mobile) {
                $rootScope.showMessage('请填写手机号!');
                return false;
            }
            $scope.btnStates[curIndex] = true;
            RegisterService.getSmsCode({
                mobile: $scope.registerInfo[types[curIndex]].mobile
            }, function(data) {
                if (data.success == 'Y') {
                    reduceCount();
                    $rootScope.showMessage('验证码发送成功!');
                }
            }, function(error) {
                $rootScope.showMessage('验证码发送失败!');
                console.log(error);
            });
        };

        function reduceCount() {
            $scope.counts[curIndex] = counts[curIndex];
            if (counts[curIndex] == 0) {
                $scope.btnStates[curIndex] = false;
                $timeout(timerId);
                return;
            }
            counts[curIndex]--;
            timerId = $timeout(reduceCount, 1000);
        }
    }]);

angular.module('education')
    .factory('RegisterService', ['$resource', 'CONFIG', function($resource, CONFIG) {
        return $resource(CONFIG.urlPrefix + '/v1/account/regist', {}, {
            register: {
                method: 'post'
            },
            getSmsCode: {
                method: 'post',
                url: CONFIG.urlPrefix + '/v1/account/sms'
            }
        });
    }]);

angular.module('education')
    .controller('SearchController', ['$rootScope', '$scope', '$state', '$stateParams', 'SearchService', 'TeacherService', function($rootScope, $scope, $state, $stateParams, SearchService, TeacherService) {
        $scope.type = $stateParams.type;
        // 返回
        $scope.back = function() {
            if ($scope.type) {
                $state.go('studentOrderHardWare');
            } else {
                $state.go('news');
            }
        };
        var params = {
            page: 1
        };
        $scope.recommendList = [];
        $scope.teacherList = [];
        $scope.searchText = '';
        $scope.showHistory = true;
        $scope.histories = [];
        var reg = /^[0-9]+$/;
        var obj = {
            init: function() {
                // obj.loadList();
                obj.getHistoryList();
            },
            loadList: function() {
                SearchService.getRecommendTeacherList({}, function(data) {
                    if (data.success == 'Y') {
                        data.data.stars = [];
                        for (var i = 0; i < data.data.star; i++) {
                            data.data.stars.push(i);
                        }
                        $scope.recommendList = data.data;
                    }
                }, function(error) {
                    console.error(error);
                });
            },
            loadTeacherList: function() {
                var searchText = $scope.searchText;
                if (searchText) {
                    $scope.showHistory = false;
                    if (reg.test(searchText)) {
                        params.mobile = searchText;
                    } else {
                        params.truename = searchText;
                    }
                    TeacherService.getTeacherList(params, function(data) {
                        if (data.success == 'Y') {
                            if ($scope.histories.indexOf(searchText) == -1) {
                                $scope.histories.push(searchText);
                                localStorage.setItem('records', $scope.histories);
                            }
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
                        }
                    }, function(error) {
                        console.log(error);
                    });
                }
            },
            getHistoryList: function() {
                var historyList = localStorage.getItem('records');
                if (historyList) {
                    if (historyList.indexOf(',') != -1) {
                        $scope.histories = historyList.split(',');
                    } else {
                        $scope.histories.push(historyList);
                    }
                }
            }
        };
        obj.init();
        $scope.search = function() {
            if (!$scope.searchText) {
                $rootScope.showMessage('搜索关键字不能为空!');
                return;
            }
            params = {
                page: 1
            };
            $scope.teacherList.length = 0;
            obj.loadTeacherList();
        };
        $scope.loadMore = function() {
            params.page++;
            obj.loadTeacherList();
        };
        $scope.refresh = function() {
            params.page = 1;
            $scope.teacherList.length = 0;
            obj.loadTeacherList();
        };
        $scope.textChange = function() {
            if (!$scope.searchText) {
                $scope.showHistory = true;
                obj.getHistoryList();
            }
        };
        $scope.clearHistory = function() {
            localStorage.removeItem('records');
            $scope.histories.length = 0;
        };
        $scope.setSearchText = function(searchText) {
            $scope.searchText = searchText;
            $scope.search();
        };
        $scope.toStudentHardWare = function(e,item){
            e.preventDefault();
            e.stopPropagation();
            $state.go('studentOrderHardWare',{id:item.id,name:item.truename});
        };
    }]);

angular.module('education')
    .factory('SearchService', ['$resource', 'CONFIG', function($resource, CONFIG) {
        return $resource(CONFIG.urlPrefix + '/v1/teacher/recommend', {}, {
            getRecommendTeacherList: {
                method: 'get'
            }
        });
    }]);

angular.module('education')
    .controller('ExamineController', ['$rootScope', '$scope', 'StaffService', '$state', function($rootScope, $scope, StaffService, $state) {
        $rootScope.showHeaderBar = false;
        $scope.showTeacherList = true;
        $scope.showOrganizationList = false;
        // 返回
        $scope.back = function() {
            $state.go('personal');
        };
        $scope.teacherList = [];
        $scope.organizationList = [];
        var obj = {
            loadTeacherList: function() {
                StaffService.getTeacherList({}, function(data) {
                    if (data.success == 'Y') {
                        $scope.teacherList = data.data;
                    }
                }, function(error) {
                    console.log(error);
                });
            },
            loadOrganizationList: function() {
                StaffService.getOrganizationList({}, function(data) {
                    if (data.success == 'Y') {
                        $scope.organizationList = data.data;
                    }
                }, function(error) {
                    console.log(error);
                });
            }
        };
        obj.loadTeacherList();

        $scope.changeTab = function(index) {
            if (index) {
                $scope.showTeacherList = false;
                $scope.showOrganizationList = true;
                obj.loadOrganizationList();
            } else {
                $scope.showTeacherList = true;
                $scope.showOrganizationList = false;
                obj.loadTeacherList();
            }
        };
    }]);

angular.module('education')
    .controller('StaffOrderController', ['$rootScope', '$scope', '$state', '$ionicPopup', 'StaffService', function($rootScope, $scope, $state, $ionicPopup, StaffService) {
        $rootScope.showHeaderBar = false;
        // 返回
        $scope.back = function() {
            $state.go('personal');
        };
        $scope.displayStates = [true, false];
        // tab 切换
        $scope.tabChange = function(index) {
            angular.forEach($scope.displayStates, function(val, key) {
                $scope.displayStates[key] = false;
            });
            $scope.displayStates[index] = true;
            if (index) {
                obj.getServiceList();
            } else {
                obj.getEquipmentList();
            }
        };
        $scope.showConfirm = function(item, event) {
            if (item.status == '待上门安装') {
                var myPopup = $ionicPopup.show({
                    template: '硬件安装完成后<br/>请将状态更改为[已完成安装]<br/>如果客户取消安装<br/>请将状态更改为[客户取消]',
                    title: '更改智能硬件上门安装状态',
                    scope: $scope,
                    buttons: [{
                        text: '已完成安装',
                        type: 'button-energized',
                        onTap: function(e) {
                            StaffService.updateEquipmentStatus({
                                id: item.id,
                                status: 2
                            }, function(data) {
                                if (data.success == 'Y') {
                                    obj.getEquipmentList();
                                }
                            }, function(error) {
                                console.error(error);
                            });
                        }
                    }, {
                        text: '客户取消',
                        type: 'button-energized',
                        onTap: function(e) {
                            StaffService.updateEquipmentStatus({
                                id: item.id,
                                status: 3
                            }, function(data) {
                                if (data.success == 'Y') {
                                    obj.getEquipmentList();
                                }
                            }, function(error) {
                                console.error(error);
                            });
                        }
                    }, {
                        text: '关闭',
                        type: 'button-dark'
                    }]
                });
            }
        };
        var obj = {
            getServiceList: function() {
                StaffService.getServiceList({}, function(data) {
                    if (data.success == 'Y') {
                        $scope.serviceList = data.data;
                    }
                }, function(error) {
                    console.error(error);
                });
            },
            getEquipmentList: function() {
                StaffService.getEquipmentList({}, function(data) {
                    if (data.success == 'Y') {
                        $scope.equipmentList = data.data;
                    }
                }, function(error) {
                    console.error(error);
                });
            }
        };
        obj.getEquipmentList();
    }]);

angular.module('education')
    .controller('StaffOrderDetailsController', ['$rootScope', '$scope', '$state', '$ionicPopup','$stateParams','StaffService', function($rootScope, $scope, $state, $ionicPopup,$stateParams,StaffService) {
        // 返回
        $scope.back = function() {
            $state.go('staffOrder');
        };
        $scope.dispalyStates = [true, false, false];
        $scope.tabChange = function(curIndex) {
            angular.forEach($scope.dispalyStates, function(val, index) {
                $scope.dispalyStates[index] = false;
            });
            $scope.dispalyStates[curIndex] = true;
        };
        var obj = {
            getOrderDetails:function(){
                StaffService.getOrderDetails({id:$stateParams.id},function(data){
                    if(data.success == 'Y'){
                        $scope.orderInfo = data.data;
                    }
                });
            }
        };
        obj.getOrderDetails();
        $scope.confirm = function(){
            
        };
    }]);

angular.module('education')
    .controller('StaffOrderServiceController', ['$rootScope', '$scope', '$state', '$ionicPopup', 'StaffService','$timeout', function($rootScope, $scope, $state, $ionicPopup, StaffService,$timeout) {
        var obj = {
            getStaticFee: function() {
                StaffService.getStaticFee({}, function(data) {
                    if (data.success == 'Y') {
                        $scope.feeInfo = data.data;
                    }
                });
            }
        };
        obj.getStaticFee();
        $scope.getTeacherFee = function() {
            StaffService.getTeacherFee({
                mobile: $scope.serviceInfo.mobile
            }, function(data) {
                if (data.success == 'Y') {
                    $scope.teacherFee = parseFloat(data.data.extra_server_fee);
                }
            });
        };
        // 返回
        $scope.back = function() {
            $state.go('personal');
        };
        $scope.teacherFee = 0;
        $scope.displayStates = [true, false];
        $scope.serviceInfo = {
            manage_id:$rootScope.user.id,
            total_fee: 0,
            status: 1,
            equipment: 1,
            homework_server: 3,
            prepare_server: 0,
            extra_server: 0
        };
        $scope.createOrder = function() {
            if (!$scope.serviceInfo.mobile) {
                $rootScope.showMessage('手机号不能为空!');
                return;
            }
            $ionicPopup.show({
                template: '1、智能硬件产品质智能硬件产品质保及押金使用模式说明智能硬件产',
                title: '智能硬件产品质保及押金使用模式说明',
                scope: $scope,
                buttons: [{
                    text: '取消',
                    type: 'button-dark'
                }, {
                    text: '确认并同意协议',
                    type: 'button-energized',
                    onTap: function(e) {
                        var serviceInfo = $scope.serviceInfo,
                            feeInfo = $scope.feeInfo;
                        serviceInfo.total_fee = (feeInfo.equipment_fee * serviceInfo.equipment) + (feeInfo.homework_fee * serviceInfo.homework_server) + (feeInfo.prepare_fee * serviceInfo.prepare_server) + ($scope.teacherFee * serviceInfo.extra_server);
                        StaffService.orderService($scope.serviceInfo, function(data) {
                            if (data.success == 'Y') {
                                $rootScope.showMessage("订单生成成功!");
                                $timeout(function(){
                                    $state.go('staffOrderDetails',{id:data.data.id});
                                },1000);
                            }
                        });
                    }
                }]
            });
        };
        $scope.changeFDYPrice = function(num) {
            $scope.serviceInfo.equipment = num;
            if (num) {
                $scope.displayStates = [true, false];
            } else {
                $scope.displayStates = [false, true];
            }
        };
        $scope.changeZYPrice = function(num) {
            var count = $scope.serviceInfo.homework_server;
            if (num) {
                count += num;
            } else {
                if (count > 3) {
                    count -= 1;
                } else {
                    $rootScope.showMessage('不能少于3个月!');
                }
            }
            $scope.serviceInfo.homework_server = count;
        };
        $scope.changeFYPrice = function(num) {
            var count = $scope.serviceInfo.prepare_server;
            if (num) {
                count += num;
            } else {
                if (count > 0) {
                    count -= 1;
                } else {
                    $rootScope.showMessage('不能少于0个月!');
                }
            }
            $scope.serviceInfo.prepare_server = count;
        };
        $scope.changeBYPrice = function(num) {
            var count = $scope.serviceInfo.extra_server;
            if (num) {
                count += num;
            } else {
                if (count > 0) {
                    count -= 1;
                } else {
                    $rootScope.showMessage('不能少于0小时!');
                }
            }
            $scope.serviceInfo.extra_server = count;
        };
    }]);

angular.module('education')
    .controller('ExamineOrganizationController', ['$rootScope', '$scope', 'StaffService', '$state', '$stateParams', '$ionicPopup','$timeout', function($rootScope, $scope, StaffService, $state, $stateParams, $ionicPopup,$timeout) {
        $rootScope.showHeaderBar = false;
        // 返回
        $scope.back = function() {
            $state.go('examineList');
        };
        var obj = {
            getDetails: function() {
                StaffService.getOrganizationDetails({
                    id: $stateParams.id
                }, function(data) {
                    if (data.success == 'Y') {
                        $scope.organizationInfo = data.data;
                    }
                }, function(error) {
                    console.error(error);
                });
            }
        };
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
                    StaffService.authOrganization({
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

angular.module('education')
    .factory('StaffService', ['$resource', 'CONFIG', function($resource, CONFIG) {
        return $resource(CONFIG.urlPrefix + '/v1/news/lists', {}, {
            getNewsList: {
                method: 'get'
            },
            getNewsDetails: {
                method: 'get',
                url: CONFIG.urlPrefix + '/v1/news/detail/:id'
            },
            getTeacherList: {
                method: 'get',
                url: CONFIG.urlPrefix + '/v1/teacher/unauth/lists',
                headers: {
                    token: CONFIG.token
                }
            },
            getOrganizationList: {
                method: 'get',
                url: CONFIG.urlPrefix + '/v1/institution/unauth/lists',
                headers: {
                    token: CONFIG.token
                }
            },
            authTeacher: {
                method: 'post',
                url: CONFIG.urlPrefix + '/v1/manage/auth/teacher',
                headers: {
                    token: CONFIG.token
                }
            },
            authOrganization: {
                method: 'post',
                url: CONFIG.urlPrefix + '/v1/manage/auth/institution',
                headers: {
                    token: CONFIG.token
                }
            },
            getOrganizationDetails: {
                method: 'get',
                url: CONFIG.urlPrefix + '/v1/institution/detail/:id',
                headers: {
                    token: CONFIG.token
                }
            },
            orderService: {
                method: 'post',
                url: CONFIG.urlPrefix + '/v1/order/server/add',
                headers: {
                    token: CONFIG.token
                }
            },
            getServiceList: {
                method: 'get',
                url: CONFIG.urlPrefix + '/v1/order/server/lists',
                headers: {
                    token: CONFIG.token
                }
            },
            getEquipmentList: {
                method: 'get',
                url: CONFIG.urlPrefix + '/v1/order/equipment/lists',
                headers: {
                    token: CONFIG.token
                }
            },
            updateEquipmentStatus:{
                method: 'post',
                url: CONFIG.urlPrefix + '/v1/order/equipment/auth',
                headers: {
                    token: CONFIG.token
                }
            },
            getOrderDetails:{
                method: 'get',
                url: CONFIG.urlPrefix + '/v1/order/server/details',
                headers: {
                    token: CONFIG.token
                }
            },
            getStaticFee:{
                method: 'get',
                url: CONFIG.urlPrefix + '/v1/order/static/fee',
                headers: {
                    token: CONFIG.token
                }
            },
            getTeacherFee:{
                method: 'get',
                url: CONFIG.urlPrefix + '/v1/order/teacher/fee',
                headers: {
                    token: CONFIG.token
                }
            }
        });
    }]);

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

angular.module('education')
    .controller('StudentOrderController', ['$rootScope', '$scope', '$state','StudentService', function($rootScope, $scope, $state,StudentService) {
        $rootScope.showHeaderBar = false;
        $scope.back = function() {
            $state.go('personal');
        };
        var obj = {
            getOrderList:function(){
                StudentService.getOrderList({},function(data){
                    if(data.success == 'Y'){
                        $scope.orderList = data.data;
                    }
                });
            }
        };
        obj.getOrderList();
    }]);

angular.module('education')
    .controller('StudentOrderDetailsController', ['$rootScope', '$scope', '$state', '$stateParams', 'StudentService', function($rootScope, $scope, $state, $stateParams, StudentService) {
        // 返回
        $scope.back = function() {
            $state.go('studentOrder');
        };
        $scope.dispalyStates = [true, false];
        $scope.tabChange = function(curIndex) {
            angular.forEach($scope.dispalyStates, function(val, index) {
                $scope.dispalyStates[index] = false;
            });
            $scope.dispalyStates[curIndex] = true;
        };
        var obj = {
            getOrderInfo: function() {
                StudentService.getOrderDetails({
                    id: $stateParams.id
                }, function(data) {
                    if (data.success == 'Y') {
                        $scope.orderInfo = data.data;
                    }
                });
            }
        };
        obj.getOrderInfo();
    }]);

angular.module('education')
    .controller('StudentOrderHardWareController', ['$rootScope', '$scope', '$state', 'StudentService', '$stateParams', '$timeout',function($rootScope, $scope, $state, StudentService, $stateParams, $timeout) {
        // 返回
        $scope.back = function() {
            localStorage.removeItem('hardwareInfo');
            $state.go('news');
        };
        $scope.hardwareInfo = {
            recommend_type: 1
        };
        $scope.displayStates = [true, false];
        var id = $stateParams.id;

        if(id){
            $scope.name = $stateParams.name;
            $scope.hardwareInfo.recommend_type = 2;
            $scope.displayStates = [false, true];
        }
        // 免费预约
        $scope.saveOrder = function() {
            var flag = obj.validateInput();
            if (flag) {
                if (!$scope.hardwareInfo.mobile) {
                    $scope.hardwareInfo.mobile = parseInt($rootScope.user.mobile);
                }
                $scope.hardwareInfo.address_id = $scope.city.id;
                $scope.hardwareInfo.member_type = $rootScope.user.role;
                if(id){
                    $scope.hardwareInfo.teacher_id = id;
                }
                StudentService.orderHardWare($scope.hardwareInfo, function(data) {
                    if (data.success == 'Y') {
                        localStorage.removeItem('hardwareInfo');
                        $rootScope.showMessage('预定申请已受理,我们的工作人员将在您指定的日期电话联系您并上门为您安装智能硬件!', 5000);
                        $timeout(function() {
                            $state.go('news');
                        }, 3000);
                    } else {
                        angular.forEach(data.msg, function(val, key) {
                            $rootScope.showMessage(data.msg[key]);
                        });
                    }
                }, function(error) {
                    console.error(error);
                    $rootScope.showMessage('预定失败!');
                });
            }
        };
        var addresses = [];
        $scope.provinces = [];
        $scope.cities = [];
        var obj = {
            getAddressList: function() {
                StudentService.getAddressList({}, function(data) {
                    if (data.success == 'Y') {
                        addresses = data.data;
                        var tempKey = '';
                        angular.forEach(data.data, function(item, index) {
                            if (tempKey != item.province) {
                                $scope.provinces.push({
                                    key: item.province
                                });
                                tempKey = item.province;
                            }
                        });
                        var hardwareInfo = localStorage.getItem('hardwareInfo');
                        if(hardwareInfo){
                            $scope.hardwareInfo = angular.fromJson(hardwareInfo);
                            angular.forEach($scope.provinces,function(val,index){
                                if(val.key == $scope.hardwareInfo.province.key){
                                    $scope.province = $scope.provinces[index];
                                    return;
                                }
                            });
                            $scope.changeProvince($scope.province);
                            angular.forEach($scope.cities,function(val,index){
                                if(val.key == $scope.hardwareInfo.city.key){
                                    $scope.city = $scope.cities[index];
                                    return;
                                }
                            });
                            $scope.hardwareInfo.time = new Date($scope.hardwareInfo.time);
                        } else {
                            $scope.province = {key:''};
                            $scope.city = {
                                key: '',
                                id: ''
                            };
                        }
                    }
                }, function(error) {
                    console.log(error);
                });
            },
            validateInput: function() {
                var hardwareInfo = $scope.hardwareInfo;
                if (!hardwareInfo.time) {
                    $rootScope.showMessage("日期不能为空!");
                    return false;
                }
                if (!$scope.province.key) {
                    $rootScope.showMessage("省份不能为空!");
                    return false;
                }
                if (!$scope.city.key) {
                    $rootScope.showMessage("城市不能为空!");
                    return false;
                }
                if (!hardwareInfo.address_detail) {
                    $rootScope.showMessage("上门安装地址不能为空!");
                    return false;
                }
                if (!hardwareInfo.link_name) {
                    $rootScope.showMessage("联系人姓名不能为空!");
                    return false;
                }
                if ($scope.hardwareInfo.recommend_type == 2) {
                    if (!$scope.name) {
                        $rootScope.showMessage("所选老师不能为空!");
                        return false;
                    }
                }
                return true;
            }
        };
        obj.getAddressList();
        $scope.changeProvince = function(curItem) {
            $scope.province = curItem;
            $scope.cities = [];
            angular.forEach(addresses, function(item) {
                if (item.province == curItem.key) {
                    $scope.cities.push({
                        key: item.city,
                        id: item.id
                    });
                }
            });
        };
        $scope.changeCity = function(curItem) {
            $scope.city = curItem;
        };
        $scope.changeType = function(num) {
            $scope.hardwareInfo.recommend_type = num;
            if (num == 1) {
                $scope.displayStates = [true, false];
            } else {
                $scope.displayStates = [false, true];
                $state.go('search',{type:'student'});
                $scope.hardwareInfo.province = $scope.province;
                $scope.hardwareInfo.city = $scope.city;
                localStorage.setItem('hardwareInfo',JSON.stringify($scope.hardwareInfo));
            }
        };
    }]);

angular.module('education')
    .controller('StudentInfoController', ['$rootScope', '$scope', '$state', 'StudentService','$timeout', function($rootScope, $scope, $state, StudentService,$timeout) {
        $rootScope.showHeaderBar = false;
        // 返回
        $scope.back = function() {
            $state.go('personal');
        };
        $scope.states = [];
        $scope.grades = [];
        // 保存更改
        $scope.saveInfo = function() {
            StudentService.updatePersonalInfo($scope.personalInfo, function(data) {
                if (data.success == 'Y') {
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

angular.module('education')
    .factory('StudentService', ['$resource', 'CONFIG', function($resource, CONFIG) {
        return $resource(CONFIG.urlPrefix + '/v1/account/detail', {}, {
            getPersonalInfo: {
                method: 'get',
                headers: {
                    token: CONFIG.token
                }
            },
            updatePersonalInfo: {
                method: 'post',
                url: CONFIG.urlPrefix + '/v1/account/update',
                headers: {
                    token: CONFIG.token
                }
            },
            getStates: {
                url: CONFIG.urlPrefix + '/v1/student/state',
                method: 'get'
            },
            getGrades: {
                url: CONFIG.urlPrefix + '/v1/student/grades',
                method: 'get'
            },
            getAddressList: {
                url: CONFIG.urlPrefix + '/v1/address/lists',
                method: 'get'
            },
            orderHardWare: {
                url: CONFIG.urlPrefix + '/v1/order/equipment/add',
                method: 'post',
                headers: {
                    token: CONFIG.token
                }
            },
            hasHardWare: {
                url: CONFIG.urlPrefix + '/v1/order/equipment/has',
                method: 'get',
                headers: {
                    token: CONFIG.token
                }
            },
            getOrderList: {
                url: CONFIG.urlPrefix + '/v1/order/server/lists',
                method: 'get',
                headers: {
                    token: CONFIG.token
                }
            },
            getOrderDetails:{
                method: 'get',
                url: CONFIG.urlPrefix + '/v1/order/server/details',
                headers: {
                    token: CONFIG.token
                }
            }
        });
    }]).factory('HardWareService', function() {
        var service = {
            setTeaherInfo: function(teacherId, name) {
                this.teacherId = teacherId;
                this.name = name;
            },
            getTeacherInfo: function() {
                return {
                    teacherId: this.teacherId,
                    name: this.name
                }
            }
        };
        return service;
    });

angular.module('education')
    .controller('TeacherOrderHardWareController', ['$rootScope', '$scope', '$state', '$timeout', 'StudentService', function($rootScope, $scope, $state, $timeout, StudentService) {
        // 返回
        $scope.back = function() {
            $state.go('news');
        };
        // 免费预约
        $scope.saveOrder = function() {
            var flag = obj.validateInput();
            if(flag){
                if (!$scope.hardwareInfo.mobile) {
                    $scope.hardwareInfo.mobile = parseInt($rootScope.user.mobile);
                }
                $scope.hardwareInfo.address_id = $scope.city.id;
                $scope.hardwareInfo.member_type = $rootScope.user.role;
                StudentService.orderHardWare($scope.hardwareInfo, function(data) {
                    if (data.success == 'Y') {
                        $rootScope.showMessage('预定申请已受理,我们的工作人员将在您指定的日期电话联系您并上门为您安装智能硬件!', 5000);
                        $timeout(function() {
                            $state.go('news');
                        }, 3000);
                    } else {
                        angular.forEach(data.msg, function(val, key) {
                            $rootScope.showMessage(data.msg[key]);
                        });
                    }
                }, function(error) {
                    console.error(error);
                    $rootScope.showMessage('预定失败!');
                });
            }
        };
        $scope.hardwareInfo = {recommend_type:1};
        $scope.city = {
            key: '',
            id: ''
        };
        $scope.province = {key:''};
        var addresses = [];
        $scope.provinces = [];
        $scope.cities = [];
        var obj = {
            getAddressList: function() {
                StudentService.getAddressList({}, function(data) {
                    if (data.success == 'Y') {
                        addresses = data.data;
                        var tempKey = '';
                        angular.forEach(data.data, function(item, index) {
                            if (tempKey != item.province) {
                                $scope.provinces.push({
                                    key: item.province
                                });
                                tempKey = item.province;
                            }
                        });
                    }
                }, function(error) {
                    console.log(error);
                });
            },
            validateInput: function() {
                var hardwareInfo = $scope.hardwareInfo;
                if (!hardwareInfo.time) {
                    $rootScope.showMessage("日期不能为空!");
                    return false;
                }
                if (!$scope.province.key) {
                    $rootScope.showMessage("省份不能为空!");
                    return false;
                }
                if (!$scope.city.key) {
                    $rootScope.showMessage("城市不能为空!");
                    return false;
                }
                if (!hardwareInfo.address_detail) {
                    $rootScope.showMessage("上门安装地址不能为空!");
                    return false;
                }
                if (!hardwareInfo.link_name) {
                    $rootScope.showMessage("联系人姓名不能为空!");
                    return false;
                }
                return true;
            }
        };
        obj.getAddressList();
        $scope.changeProvince = function(curItem) {
            $scope.province = curItem;
            $scope.cities = [];
            angular.forEach(addresses, function(item) {
                if (item.province == curItem.key) {
                    $scope.cities.push({
                        key: item.city,
                        id: item.id
                    });
                }
            });
        };
        $scope.changeCity = function(curItem) {
            $scope.city = curItem;
        };
    }]);

angular.module('education')
    .controller('TeacherController', ['$rootScope', '$scope', 'TeacherService','$stateParams','$state', function($rootScope, $scope, TeacherService,$stateParams,$state) {
        $scope.back = function(){
            $state.go('news');
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
                    }
                }, function(error) {
                    console.log(error);
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

angular.module('education')
    .controller('TeacherInfoController', ['$rootScope', '$scope', '$state', 'TeacherService', 'Upload', '$stateParams','CONFIG','$timeout', function($rootScope, $scope, $state, TeacherService, Upload, $stateParams,CONFIG,$timeout) {
        $scope.appTitle = '我的资料';
        if ($stateParams.id) {
            $scope.appTitle = '机构教师资料编辑';
        }
        $scope.back = function() {
            $state.go('personal');
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

angular.module('education')
    .factory('TeacherService', ['$resource', 'CONFIG', function($resource, CONFIG) {
        return $resource(CONFIG.urlPrefix + '/v1/account/detail', {}, {
            getPersonalInfo: {
                method: 'get',
                headers: {
                    token: CONFIG.token
                }
            },
            updatePersonalInfo: {
                method: 'post',
                url: CONFIG.urlPrefix + '/v1/teacher/update',
                headers: {
                    token: CONFIG.token
                }
            },
            getTimes: {
                url: CONFIG.urlPrefix + '/v1/common/teacher/worktime',
                method: 'get'
            },
            getGrades: {
                url: CONFIG.urlPrefix + '/v1/student/grades',
                method: 'get'
            },
            getSubjects: {
                url: CONFIG.urlPrefix + '/v1/common/subjects',
                method: 'get'
            },
            getSchoolworks: {
                url: CONFIG.urlPrefix + '/v1/common/schoolwork',
                method: 'get'
            },
            getTeacherList: {
                url: CONFIG.urlPrefix + '/v1/teacher/lists',
                method: 'get'
            },
            getDetails: {
                url: CONFIG.urlPrefix + '/v1/teacher/detail/:id',
                method: 'get',
                headers:{
                    token:CONFIG.token
                }
            },
            getRecommendTeacherList: {
                url: CONFIG.urlPrefix + '/v1/teacher/recommend',
                method: 'get'
            }
        });
    }]);

angular.module('education')
    .controller('UpdatepwdController', ['$rootScope', '$scope', '$state', 'UpdatepwdService','$timeout', function($rootScope, $scope, $state, UpdatepwdService,$timeout) {
        $rootScope.showHeaderBar = false;
        $scope.pwdInfo = {};
        $scope.back = function() {
            $state.go('personal');
        };
        var obj = {
            validateInput:function(){
                var pwdInfo = $scope.pwdInfo;
                if(!pwdInfo.pwd1){
                    $rootScope.showMessage('请输入原密码!');
                    return false;
                }
                if(!pwdInfo.pwd2){
                    $rootScope.showMessage('请输入新密码!');
                    return false;
                }
                if(!pwdInfo.password){
                    $rootScope.showMessage('请设置新密码!');
                    return false;
                }
                return true;
            }
        };
        $scope.updatePwd = function() {
            var flag = obj.validateInput();
            if(flag){
                UpdatepwdService.updatePwd($scope.pwdInfo, function(data) {
                    if (data.success == 'Y') {
                        $rootScope.showMessage('修改成功!');
                        $timeout(function(){

                        },1000);
                    }else{
                        angular.forEach(data.msg,function(val,key){
                            $rootScope.showMessage(val);
                        });
                    }
                }, function(error) {
                    console.error(error);
                    $rootScope.showMessage('修改失败!');
                });
            }
        };
    }]);

angular.module('education')
    .factory('UpdatepwdService', ['$resource', 'CONFIG', function($resource, CONFIG) {
        return $resource(CONFIG.urlPrefix + '/v1/account/updatepassword', {}, {
            updatePwd: {
                method: 'post',
                headers: {
                    token: CONFIG.token
                }
            }
        });
    }]);
