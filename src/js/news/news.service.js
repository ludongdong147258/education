angular.module('education')
    .factory('NewsService', ['$resource', 'CONFIG', function($resource, CONFIG) {
        return $resource(CONFIG.urlPrefix + '/v1/news/lists', {}, {
            getNewsList: {
                method: 'get'
            },
            getNewsDetails: {
                method: 'get',
                url: CONFIG.urlPrefix + '/v1/news/detail/:id'
            }
        });
    }]);
