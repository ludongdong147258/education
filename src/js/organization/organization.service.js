angular.module('education')
    .factory('OrganizationService', ['$resource', 'CONFIG',function($resource,CONFIG) {
        return $resource(CONFIG.urlPrefix + '/v1/institution/teachers', {}, {
            getTeacherList: {
                method: 'get',
                headers: {
                    token: CONFIG.token
                }
            },
            deleteTeacher:{
                url:CONFIG.urlPrefix+'/v1/institution/delteacher',
                method:'post',
                headers:{
                    token:CONFIG.token
                }
            },
            addTeacher:{
                url:CONFIG.urlPrefix+'/v1/institution/addteacher',
                method:'post',
                headers:{
                    token:CONFIG.token
                }
            },
            updateOrganizationInfo:{
                url:CONFIG.urlPrefix+'/v1/institution/update',
                method:'post',
                headers:{
                    token:CONFIG.token
                }
            },
            getOrganizationInfo:{
                url:CONFIG.urlPrefix+'/v1/account/detail',
                method:'get',
                headers:{
                    token:CONFIG.token
                }
            }
        });
    }]);
