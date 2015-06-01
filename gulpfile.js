var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass');


gulp.task('js', function(){
    return gulp.src([
            // angularjs and modules:
            './{{ project_name }}/static/bower_components/angular/angular.js',
            './{{ project_name }}/static/bower_components/angular-resource/angular-resource.js',
            './{{ project_name }}/static/bower_components/angular-cookies/angular-cookies.js',
            './{{ project_name }}/static/bower_components/angular-ui-router/release/angular-ui-router.js',
            './{{ project_name }}/static/bower_components/angular-animate/angular-animate.js',
            './{{ project_name }}/static/bower_components/angular-local-storage/dist/angular-local-storage.js',

            './{{ project_name }}/static/bower_components/jquery/dist/jquery.js',
            './{{ project_name }}/static/bower_components/jquery-ui/jquery-ui.js',

            './{{ project_name }}/static/bower_components/bootstrap/dist/js/bootstrap.js',

            // custom app:
            './{{ project_name }}/static/src/app.js',
            './{{ project_name }}/static/src/**/*.js',
        ])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./{{ project_name }}/static/dist/'));
});


gulp.task('sass', function(){
    return gulp.src([
            './{{ project_name }}/static/bower_components/bootstrap/dist/css/bootstrap.css',
            './{{ project_name }}/static/bower_components/bootstrap/dist/css/bootstrap-theme.css',
            // custom app:
            './{{ project_name }}/static/src/*.scss'])
        .pipe(concat('style.css'))
        .pipe(sass())
        .pipe(gulp.dest('./{{ project_name }}/static/dist/'));
});


gulp.task('default', ['js', 'sass']);


gulp.task('watch', function() {
    gulp.watch([
        './{{ project_name }}/static/src/*.js',
        './{{ project_name }}/static/src/**/*.js',
    ], ['js']); 

    gulp.watch([
        './{{ project_name }}/static/src/*.css',
        './{{ project_name }}/static/src/**/*.css',
        './{{ project_name }}/static/src/*.scss',
        './{{ project_name }}/static/src/**/*.scss',
    ], ['sass']);
});

