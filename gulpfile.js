var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;


var config = {
    server: {
        baseDir: "./"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Daemon"
};

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('watch', function(){
    watch(['css/*.css'], function(event, cb) {
        gulp.start('css:build');
    });
});   

gulp.task('css:build', function() {
	gulp.src('css/*.css') 
        .pipe(reload({stream: true}));
});

gulp.task('default', ['webserver', 'watch']);