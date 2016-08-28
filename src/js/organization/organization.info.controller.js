angular.module('education')
    .controller('OrganizationInfoController', ['$rootScope', '$scope', '$state', 'OrganizationService', function($rootScope, $scope, $state,OrganizationService ) {
        $rootScope.showHeaderBar = false;
        $scope.back = function() {
            window.history.back();
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
            getOrganizationInfo:function(){
                OrganizationService.getOrganizationInfo({}, function(data) {
                    if (data.success == 'Y') {
                        $scope.organizationInfo = data.data;
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
                    url: '/v1/common/upload',
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
