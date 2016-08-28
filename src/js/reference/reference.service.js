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
