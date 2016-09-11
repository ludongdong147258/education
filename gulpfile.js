// 引入 gulp
var gulp = require('gulp');

// 引入组件
var clean = require('gulp-clean'),
    htmlmin = require('gulp-htmlmin'), //html压缩
    imagemin = require('gulp-imagemin'), //图片压缩
    pngcrush = require('imagemin-pngcrush'),
    minifycss = require('gulp-minify-css'), //css压缩
    // jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'), //js压缩
    concat = require('gulp-concat'), //文件合并
    rename = require('gulp-rename'), //文件更名
    rev = require('gulp-rev'), // MD5后缀
    sass = require('gulp-sass'),
    notify = require('gulp-notify'); //提示信息
// clean
gulp.task("clean", function() {
    return gulp.src('dest')
        .pipe(clean());
})

// 移动html
gulp.task('html', function() {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('./dest'))
        .pipe(notify({
            message: 'html task ok'
        }));

});

gulp.task('fonts', function() {
    return gulp.src('src/fonts/**.*')
        .pipe(gulp.dest('dest/fonts'));
});

gulp.task('libs', function() {
    return gulp.src('src/libs/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dest/libs'))
        .pipe(notify({
            message: 'js task ok'
        }));
});

// 压缩图片
gulp.task('img', function() {
    return gulp.src('src/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngcrush()]
        }))
        .pipe(gulp.dest('./dest/images/'))
        .pipe(notify({
            message: 'img task ok'
        }));
});

// 合并、压缩、重命名css
gulp.task('css', function() {
    return gulp.src('src/css/*.css')
        .pipe(concat('education.css'))
        .pipe(gulp.dest('dest/css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifycss())
        .pipe(rev())
        .pipe(gulp.dest('dest/css'))
        .pipe(notify({
            message: 'css task ok'
        }));
});

gulp.task('sass', function() {
    return gulp.src('src/css/*.scss')
        .pipe(sass())
        .pipe(concat('test.css'))
        .pipe(gulp.dest('dest/css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifycss())
        .pipe(rev())
        .pipe(gulp.dest('dest/css'))
        .pipe(notify({
            message: 'sass task ok'
        }));
});

// 检查js
// gulp.task('lint', function() {
//     return gulp.src('src/js/**/*.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'))
//         .pipe(notify({
//             message: 'lint task ok'
//         }));
// });

// 合并、压缩js文件
gulp.task('js', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('education.js'))
        .pipe(gulp.dest('dest/js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest('dest/js'))
        .pipe(notify({
            message: 'js task ok'
        }));
});

// 默认任务
gulp.task('default', ['clean'], function() {
    gulp.run('img', 'css', 'js', 'html', 'fonts', 'libs');

    // 监听html文件变化
    gulp.watch('src/*.html', function() {
        gulp.run('html');
    });

    // Watch .css files
    gulp.watch('src/css/*.css', ['css']);

    // Watch .js files
    gulp.watch('src/js/**/*.js', ['lint', 'js']);

    // Watch image files
    gulp.watch('src/images/*', ['img']);
});
