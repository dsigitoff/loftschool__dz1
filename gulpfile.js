'use strict';

global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    path: {
        task: require('./gulp/paths/tasks.js')
    },
    del: require('del'),
    browserSync: require('browser-sync')
}

$.path.task.forEach(function(taskPath) {
    require(taskPath)();
})


$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'sass',
        'pug'
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    )
));