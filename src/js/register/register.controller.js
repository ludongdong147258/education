angular.module('education')
    .controller('RegisterController', ['$rootScope', '$scope', '$state', '$stateParams', 'RegisterService', 'LoginService', '$timeout', function($rootScope, $scope, $state, $stateParams, RegisterService, LoginService, $timeout) {
        $rootScope.showHeaderBar = false;
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
            $state.go('home');
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
                            $rootScope.showMessage('注册成功!');
                            $state.go('login');
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
