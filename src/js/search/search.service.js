angular.module('education')
    .factory('SearchService', ['$resource', 'CONFIG', function($resource, CONFIG) {
        return $resource(CONFIG.urlPrefix + '/v1/teacher/recommend', {}, {
            getRecommendTeacherList: {
                method: 'get'
            }
        });
    }]);
