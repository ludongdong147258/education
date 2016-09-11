angular.module('education')
    .controller('RegisterController', ['$rootScope', '$scope', '$state', '$stateParams', 'RegisterService', 'LoginService', '$timeout','CONFIG','ValidateService', function($rootScope, $scope, $state, $stateParams, RegisterService, LoginService, $timeout,CONFIG,ValidateService) {
        var code = $stateParams.code;
        var obj = {
            validateInput: function(type) {
                if (!$scope.registerInfo[type].mobile) {
                    $rootScope.showMessage('请填写手机号!');
                    return false;
                }
                if(!ValidateService.checkPhone($scope.registerInfo[type].mobile)){
                    $rootScope.showMessage('手机号码格式不正确!');
                    return false;
                }
                if (!$scope.registerInfo[type].smscode) {
                    $rootScope.showMessage('请填写短信验证码!');
                    return false;
                }
                if(!ValidateService.checkSmsCode($scope.registerInfo[type].smscode)){
                    $rootScope.showMessage('短信验证码格式不正确!');
                    return false;
                }
                if (!$scope.registerInfo[type].password) {
                    $rootScope.showMessage('请填写密码!');
                    return false;
                }
                if(!ValidateService.checkPwd($scope.registerInfo[type].password)){
                    $rootScope.showMessage('密码必须是6-10位字母、数字组合!');
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
            if($stateParams.state){
                $state.go($stateParams.state);
            }else{
                $state.go('login');
            }
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
                if(code){
                    $scope.registerInfo[type].invitecode = code;
                }
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
                            $timeout(function(){
                                $state.go('personal',null,{reload:true});
                            },1000);
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
            if(!ValidateService.checkPhone($scope.registerInfo[types[curIndex]].mobile)){
                $rootScope.showMessage('手机号码格式不正确!');
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
            if (counts[curIndex] == 1) {
                $scope.btnStates[curIndex] = false;
                counts[curIndex] = 60;
                $timeout(timerId);
                return;
            }
            counts[curIndex]--;
            timerId = $timeout(reduceCount, 1000);
        }
    }]);
