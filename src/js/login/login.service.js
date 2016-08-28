angular.module('education')
    .factory('LoginService', ['$resource', 'CONFIG', function($resource, CONFIG) {
        return $resource(CONFIG.urlPrefix + '/v1/account/login', {}, {
            login: {
                method: 'post'
            }
        });
    }]);
