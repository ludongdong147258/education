angular.module('education')
    .factory('StudentService', ['$resource', 'CONFIG', function($resource, CONFIG) {
        return $resource(CONFIG.urlPrefix + '/v1/account/detail', {}, {
            getPersonalInfo: {
                method: 'get',
                headers: {
                    token: CONFIG.token
                }
            },
            updatePersonalInfo: {
                method: 'post',
                url: CONFIG.urlPrefix + '/v1/account/update',
                headers: {
                    token: CONFIG.token
                }
            },
            getStates: {
                url: CONFIG.urlPrefix + '/v1/student/state',
                method: 'get'
            },
            getGrades: {
                url: CONFIG.urlPrefix + '/v1/student/grades',
                method: 'get'
            },
            getAddressList: {
                url: CONFIG.urlPrefix + '/v1/address/lists',
                method: 'get'
            },
            orderHardWare: {
                url: CONFIG.urlPrefix + '/v1/order/equipment/add',
                method: 'post',
                headers: {
                    token: CONFIG.token
                }
            },
            hasHardWare: {
                url: CONFIG.urlPrefix + '/v1/order/equipment/has',
                method: 'get',
                headers: {
                    token: CONFIG.token
                }
            },
            getOrderList: {
                url: CONFIG.urlPrefix + '/v1/order/server/lists',
                method: 'get',
                headers: {
                    token: CONFIG.token
                }
            },
            getOrderDetails:{
                method: 'get',
                url: CONFIG.urlPrefix + '/v1/order/server/detail',
                headers: {
                    token: CONFIG.token
                }
            }
        });
    }]).factory('HardWareService', function() {
        var service = {
            setTeaherInfo: function(teacherId, name) {
                this.teacherId = teacherId;
                this.name = name;
            },
            getTeacherInfo: function() {
                return {
                    teacherId: this.teacherId,
                    name: this.name
                }
            }
        };
        return service;
    });
