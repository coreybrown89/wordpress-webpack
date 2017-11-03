// gulp dependencies
const gulp = require('gulp');

// files and compression
const rename = require('gulp-rename');
const gzip = require('gulp-gzip');
const imagemin = require('gulp-imagemin');

// sass & css dependencies
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

// js dependencies
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');
const uglify = require('gulp-uglify');

// ===========
//  Gulp Tasks
// ===========

// compile sass files
gulp.task('sass', () => {
	console.log('compiling sass ...');

	return (
		gulp
			.src('resources/scss/app.scss')
			// compile sass
			.pipe(sass())
			// run autoprefixer
			.pipe(
				autoprefixer({
					browsers: ['last 2 versions'],
					cascade: false
				})
			)
			.pipe(gulp.dest('resources/css'))
			// minify css
			.pipe(cssmin())
			.pipe(rename({ suffix: '.min' }))
			.pipe(gulp.dest('public/css'))
			//gzip css
			.pipe(gzip())
			.pipe(gulp.dest('public/css'))
	);
});

// lint app.js
gulp.task('jshint', () => {
	console.log('linting javascript ...');

	return gulp
		.src('resources/js/app.js')
		.pipe(jshint())
		.pipe(jshint.reporter(stylish, { beep: true }))
		.pipe(jshint.reporter('fail'));
});

// transpile js
gulp.task('transpile', () => {
	console.log('transpiling javascript ...');

	return gulp
		.src('resources/js/app.js')
		.pipe(sourcemaps.init())
		.pipe(
			babel({
				presets: ['env']
			})
		)
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('public/js'))
		.pipe(gzip())
		.pipe(gulp.dest('public/js'));
});

// compress images
gulp.task('images', () => {
	console.log('compressing images ...');

	return gulp
		.src('resources/images/**')
		.pipe(
			imagemin(
				[
					imagemin.gifsicle({ interlaced: true }),
					imagemin.jpegtran({ progressive: true }),
					imagemin.optipng({ optimizationLevel: 5 }),
					imagemin.svgo({ plugins: [{ removeViewBox: true }] })
				],
				{
					verbose: true
				}
			)
		)
		.pipe(gulp.dest('public/images'));
});

// default gulp task
gulp.task('default', () => {
	gulp.watch('resources/scss/**/*.scss', ['sass']);
	gulp.watch('resources/js/app.js', ['transpile']);
});
