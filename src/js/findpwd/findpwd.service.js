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
