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
            authTeacher: {
                method: 'post',
                url: CONFIG.urlPrefix + '/v1/manage/auth/teacher',
                headers: {
                    token: CONFIG.token
                }
            },
            authOrganization: {
                method: 'post',
                url: CONFIG.urlPrefix + '/v1/manage/auth/institution',
                headers: {
                    token: CONFIG.token
                }
            },
            getOrganizationDetails: {
                method: 'get',
                url: CONFIG.urlPrefix + '/v1/institution/detail/:id',
                headers: {
                    token: CONFIG.token
                }
            },
            orderService: {
                method: 'post',
                url: CONFIG.urlPrefix + '/v1/order/server/add',
                headers: {
                    token: CONFIG.token
                }
            },
            getServiceList: {
                method: 'get',
                url: CONFIG.urlPrefix + '/v1/order/server/lists',
                headers: {
                    token: CONFIG.token
                }
            },
            getEquipmentList: {
                method: 'get',
                url: CONFIG.urlPrefix + '/v1/order/equipment/lists',
                headers: {
                    token: CONFIG.token
                }
            },
            updateEquipmentStatus:{
                method: 'post',
                url: CONFIG.urlPrefix + '/v1/order/equipment/auth',
                headers: {
                    token: CONFIG.token
                }
            },
            getOrderDetails:{
                method: 'get',
                url: CONFIG.urlPrefix + '/v1/order/server/details',
                headers: {
                    token: CONFIG.token
                }
            },
            getStaticFee:{
                method: 'get',
                url: CONFIG.urlPrefix + '/v1/order/static/fee',
                headers: {
                    token: CONFIG.token
                }
            },
            getTeacherFee:{
                method: 'get',
                url: CONFIG.urlPrefix + '/v1/order/teacher/fee',
                headers: {
                    token: CONFIG.token
                }
            }
        });
    }]);
