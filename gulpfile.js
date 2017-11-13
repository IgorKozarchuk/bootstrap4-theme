const gulp = require('gulp'),
	browserSync = require('browser-sync'),
	sass = require('gulp-sass');

// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
	return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'app/sass/**/*.+(sass|scss)'])
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream());
});

// Move JS Files to app/js
gulp.task('js', function() {
	return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.stream());
});

// Watch Sass & Serve
gulp.task('serve', ['sass'], function() {
	browserSync({
		server: 'app',
		notify: false
	});
	gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'app/sass/**/*.+(sass|scss)'], ['sass']);
	gulp.watch('app/*.html').on('change', browserSync.reload);
});

// Move Fonts to app/fonts
gulp.task('fonts', function() {
	return gulp.src('node_modules/font-awesome/fonts/*')
		.pipe(gulp.dest('app/fonts'));
});

// Move Font Awesome CSS to app/css
gulp.task('fa', function() {
	return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
		.pipe(gulp.dest('app/css'));
});

// Default task
gulp.task('default', ['js', 'serve', 'fa', 'fonts']);