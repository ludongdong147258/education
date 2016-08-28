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
