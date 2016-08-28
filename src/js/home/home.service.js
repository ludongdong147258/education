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
