var gulp = require('gulp'),
    _ = require('lodash'),
//    run = require('gulp-run'),
    runSequence = require('run-sequence'),
    clean = require('gulp-clean'),
    bower = require('gulp-bower'),
    gutil = require('gulp-util'),
    flatten = require('gulp-flatten'),
    gulpFilter = require('gulp-filter'),
    rename = require('gulp-rename'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    jsxhint = require('gulp-jsxhint'),
    concat = require('gulp-concat'),
    cache = require('gulp-cached'),
    order = require('gulp-order'),
    uncss = require('gulp-uncss'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    mainBowerFiles = require('main-bower-files'),
    package = require('./package.json');

var static_dir = './src/main/resources/static/'

// add custom browserify options here
var customOpts = {
    entries: [package.paths.app],
    debug: true,
    standalone: 'Clip'
};

gulp.task('bower:install', function () {
    //run('bower install').exec();
    return bower();
});

gulp.task('css:min', function () {
    gulp.src([
        static_dir + 'bower_components/components-font-awesome/css/font-awesome.min.css',
        static_dir + 'bower_components/font-awesome-animation/dist/font-awesome-animation.min.css',
        static_dir + 'css/vendor/jquery.dataTables.css',
        static_dir + 'css/vendor/buttons.dataTables.min.css',
        static_dir + 'css/clip-highlight.css'
        ])
        .pipe(minifycss())
        .pipe(concat('vendor.min.css'))
        .pipe(gulp.dest(public_path));

    gulp.src([
        static_dir + 'css/home.css',
        static_dir + 'css/clipstore.css',
        static_dir + 'css/clip.css',
        static_dir + 'css/error.css'
    ])
        .pipe(minifycss())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest(static_dir + 'css'));
});


gulp.task('vendor:min', function(){

    gulp.src([
        static_dir + 'bower_components/jquery/dist/jquery.min.js',
        static_dir + 'bower_components/stomp-websocket/lib/stomp.min.js',
        static_dir + 'bower_components/sockjs-client/dist/sockjs.min.js',

        //jquery datatable and buttons dependencies
        static_dir + 'bower_components/datatables/media/js/jquery.dataTables.min.js',
        static_dir + 'bower_components/datatables-buttons/js/dataTables.buttons.js',
        static_dir + 'bower_components/datatables-buttons/js/buttons.flash.js',
        static_dir + 'bower_components/jszip/dist/jszip.min.js',
        static_dir + 'bower_components/pdfmake/build/pdfmake.min.js',
        static_dir + 'bower_components/pdfmake/build/vfs_fonts.js',
        static_dir + 'bower_components/datatables-buttons/js/buttons.bootstrap.js',
        static_dir + 'bower_components/datatables-buttons/js/buttons.colVis.js',
        //static_dir + 'bower_components/datatables-buttons/js/buttons.foundation.js',
        static_dir + 'bower_components/datatables-buttons/js/buttons.html5.js',
        static_dir + 'bower_components/datatables-buttons/js/buttons.jqueryui.js',
        static_dir + 'bower_components/datatables-buttons/js/buttons.print.js',

        static_dir + 'js/dateformat.js',
        static_dir + 'js/classie.js',
        //static_dir + 'js/highlight.pack.js',

        static_dir + 'js/dropzone.js',

        //From Semantic UI ? (Corentin ?)
        static_dir + 'js/tab.min.js'
    ])
        // js
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(public_path + '/js'))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest(public_path + '/js'));

});

gulp.task('jshint', function () {
    return gulp.src(package.paths.js)
        //.pipe(cache('jshint'))
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('jsx', function () {
    return browserify(customOpts)
        .transform(reactify)
        .bundle()
        .on('log', gutil.log)
        .on('error', gutil.log.bind(gutil, 'JSX Error'))
        .pipe(source(package.dest.app))
        .pipe(gulp.dest(package.dest.dist))
        .pipe(livereload());
});

gulp.task('jsx:min', function () {

    return browserify(customOpts)
        .transform(reactify)
        .plugin('minifyify', {
            map: 'bundle.min.map',
            output:'src/main/resources/static/js/bundle.min.map'
        })
        .bundle()
        .pipe(source(package.dest.app))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest(package.dest.dist))
        .pipe(livereload());
});

gulp.task('clip-js:min', function (){
    gulp.src([
        static_dir + 'js/clip-main.js'])
    .pipe(uglify())
    .pipe(rename({
       suffix: ".min"
    }))
    .pipe(gulp.dest(package.dest.dist))
    .pipe(livereload());
});

gulp.task('watch', ['jsx'], function () {
    livereload.listen();
    return gulp.watch([
        package.paths.js,
        package.paths.templates
    ], [
        'jsx'
    ]);
});

gulp.task('build-clean', function () {
    return gulp.src(package.dest.public).pipe(clean());
});

gulp.task('build', function (cb) {
    runSequence('build-clean', 'bower:install','vendor:min', 'jsx', 'css:min', 'clip-js:min', cb);
});

gulp.task('build:min', function (cb) {
    runSequence('build-clean', 'bower:install','vendor:min', 'jsx:min', 'css:min', 'clip-js:min', cb);
});

gulp.task('default', ['build']);
