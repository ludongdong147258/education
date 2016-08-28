angular.module('education')
    .factory('StaffService', ['$resource', 'CONFIG', function($resource, CONFIG) {
        return $resource(CONFIG.urlPrefix + '/v1/news/lists', {}, {
            getNewsList: {
                method: 'get'
            },
            getNewsDetails: {
                method: 'get',
                url: CONFIG.urlPrefix + '/v1/news/detail/:id'
            },
            getTeacherList: {
                method: 'get',
                url: CONFIG.urlPrefix + '/v1/teacher/unauth/lists',
                headers: {
                    token: CONFIG.token
                }
            },
            getOrganizationList: {
                method: 'get',
                url: CONFIG.urlPrefix + '/v1/institution/unauth/lists',
                headers: {
                    token: CONFIG.token
                }
            },
            authTeacher:{
                method: 'post',
                url: CONFIG.urlPrefix + '/v1/manage/auth/teacher',
                headers: {
                    token: CONFIG.token
                }
            },
            authOrganization:{
                method: 'post',
                url: CONFIG.urlPrefix + '/v1/manage/auth/institution',
                headers: {
                    token: CONFIG.token
                }
            },
            getOrganizationDetails:{
                method: 'get',
                url: CONFIG.urlPrefix + '/v1/institution/detail/:id',
                headers: {
                    token: CONFIG.token
                }
            },
            orderService:{
                method: 'post',
                url: CONFIG.urlPrefix + '/v1/order/server/add',
                headers: {
                    token: CONFIG.token
                }
            }
        });
    }]);