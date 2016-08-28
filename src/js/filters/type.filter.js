angular.module('education')
    .filter('TypeFilter', ['CONFIG', function() {
        return function(type) {
            return CONFIG[type];
        };
    }]);
