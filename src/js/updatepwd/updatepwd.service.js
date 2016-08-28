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
