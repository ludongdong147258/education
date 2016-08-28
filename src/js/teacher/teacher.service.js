angular.module('education')
    .factory('TeacherService', ['$resource', 'CONFIG', function($resource, CONFIG) {
        return $resource(CONFIG.urlPrefix + '/v1/account/detail', {}, {
            getPersonalInfo: {
                method: 'get',
                headers: {
                    token: CONFIG.token
                }
            },
            updatePersonalInfo: {
                method: 'post',
                url: CONFIG.urlPrefix + '/v1/teacher/update',
                headers: {
                    token: CONFIG.token
                }
            },
            getTimes: {
                url: CONFIG.urlPrefix + '/v1/common/teacher/worktime',
                method: 'get'
            },
            getGrades: {
                url: CONFIG.urlPrefix + '/v1/student/grades',
                method: 'get'
            },
            getSubjects: {
                url: CONFIG.urlPrefix + '/v1/common/subjects',
                method: 'get'
            },
            getSchoolworks: {
                url: CONFIG.urlPrefix + '/v1/common/schoolwork',
                method: 'get'
            },
            getTeacherList: {
                url: CONFIG.urlPrefix + '/v1/teacher/lists',
                method: 'get'
            },
            getDetails: {
                url: CONFIG.urlPrefix + '/v1/teacher/detail/:id',
                method: 'get',
                headers:{
                    token:CONFIG.token
                }
            },
            getRecommendTeacherList: {
                url: CONFIG.urlPrefix + '/v1/teacher/recommend',
                method: 'get'
            }
        });
    }]);
