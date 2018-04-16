var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var minimist = require('minimist');
var uglify = require('gulp-uglify');
var pump = require('pump');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var html5Lint = require('gulp-html5-lint');
var csslint = require('gulp-csslint');
var jshint = require('gulp-jshint');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var sourcemaps = require('gulp-sourcemaps');
var jasmine = require('gulp-jasmine');
var bump = require('gulp-bump');
var git = require('gulp-git');
var fs = require('fs');
var pkg = JSON.parse(fs.readFileSync('./package.json'));
var version = pkg.version;

var knownOptions = {
    string: ['logLevel', 'message'],
    default: {
        logLevel: 'Success',
        message: 'everything is a-ok'
    }
};

var versions = {
    string: 'version',
    default: {
        ver: 'patch'
    }
};

var options = minimist(process.argv.slice(2), knownOptions);
var verOptions = minimist(process.argv.slice(2), versions);

/**
 * Tasks start here.
 */

// Compile Sass.
gulp.task('sass', function () {
    return gulp.src('./styles/**.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./gulp-output'));
});

gulp.task('postcss', function () {
    var plugins = [
        autoprefixer({ browsers: ['last 2 versions'] }),
        cssnano()
    ];
    return gulp.src('./gulp-output/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss(plugins))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./gulp-output'));
});

// Minify CSS.
gulp.task('minify-css', function () {
    return gulp.src('styles/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('gulp-output'));
});

// Minify JS.
gulp.task('uglify', function (cb) {
    pump([
        gulp.src('js/*.js'),
        uglify(),
        gulp.dest('gulp-output')
    ],
    cb
    );
});

// Minify Images.
gulp.task('imagemin', function () {
    gulp.src('./img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('gulp-output/images'));
});

// Lint HTML.
gulp.task('html5-lint', function () {
    return gulp.src(['./*.html', './html/*.html'])
        .pipe(html5Lint());
});

// Lint CSS.
gulp.task('csslint', function () {
    gulp.src('./gulp-output/*.css')
        .pipe(csslint())
        .pipe(csslint.formatter());
});

// Lint JS.
gulp.task('jshint', function () {
    return gulp.src('./js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Run JS tests.
gulp.task('jasmine', function () {
    gulp.src('./js/*.js')
        .pipe(jasmine());
});

// Version files.
gulp.task('version', function () {
    return gulp.src(['./index.html', './package.json'])
        .pipe(bump({ type: verOptions.ver }))
        .pipe(gulp.dest('./'));
});

// Git add.
gulp.task('add', function () {
    return gulp.src('./')
        .pipe(git.add());
});

// Git commit.
gulp.task('commit', function () {
    var newPkg = pkg.version;
    console.log('Update from ' + version + ' to ' + newPkg);
    return gulp.src('./')
        .pipe(git.commit('Update from ' + version + ' to ' + newPkg));
});

// Git push.
gulp.task('push', function () {
    git.push('origin', function (err) {
        if (err) throw err;
    });
});

// Watch task.
gulp.task("sass:watch", function() {
	gulp.watch("./styles/**.scss", ["sass"]);
});

// Minify task.
gulp.task('minify', ['minify-css', 'uglify', 'imagemin']);

// Linting task.
gulp.task('lint', ['html5-lint', 'csslint', 'jshint']);

// Build task.
gulp.task('build', ['minify', 'lint', 'jasmine']);

// Deploy task.
gulp.task('deploy', ['build', 'version', 'add', 'commit', 'push']);

// Default.
gulp.task('default', function () {
    console.log(options.logLevel + ': ' + options.message);
});
