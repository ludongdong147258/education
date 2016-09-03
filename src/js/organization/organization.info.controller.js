angular.module('education')
    .controller('OrganizationInfoController', ['$rootScope', '$scope', '$state', 'OrganizationService', 'Upload', 'CONFIG', '$timeout','ValidateService', function($rootScope, $scope, $state, OrganizationService, Upload, CONFIG, $timeout,ValidateService) {
        $rootScope.showHeaderBar = false;
        $scope.back = function() {
            $state.go('personal');
        };
        $scope.dispalyStates = [true, false, false];
        $scope.organizationInfo = {};
        $scope.saveInfo = function() {
            var flag = obj.validateInput();
            if(flag){
                OrganizationService.updateOrganizationInfo($scope.organizationInfo, function(data) {
                    if (data.success == 'Y') {
                        $rootScope.showMessage('保存成功!');
                        $timeout(function(){
                            $state.go('personal');
                        },1000);
                    }
                }, function(error) {
                    $rootScope.showMessage('保存失败!');
                    console.error(error);
                });
            }
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
            },
            validateInput:function(){
                var organizationInfo = $scope.organizationInfo;
                if(!organizationInfo.name) {
                    $rootScope.showMessage('机构名称不能为空!');
                    return false;
                }
                if(!organizationInfo.legal_person) {
                    $rootScope.showMessage('法人姓名不能为空!');
                    return false;
                }
                if(!ValidateService.checkName(organizationInfo.legal_person)){
                    $rootScope.showMessage('法人姓名2-7个中文字符!');
                    return false;
                }
                if(!organizationInfo.certificate_url){
                    $rootScope.showMessage('请上传企业营业执照照片!');
                    return false;
                }
                return true;
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
