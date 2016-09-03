angular.module('education')
    .filter('TypeFilter', [function() {
        return function(type) {
            switch (type) {
                case 'student':
                    return '学生'
                    break;
                case 'teacher':
                    return '老师'
                    break;
                case 'institution':
                    return '机构'
                    break;
                case 'manage':
                    return '工作人员'
                    break;
            }
        };
    }]);
