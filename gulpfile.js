var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');


gulp.task('sass', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('compiled'));
});



gulp.task('autoprefixer', function(){
	gulp.src('compiled/**/*.css')
		.pipe(autoprefixer())
		.pipe(gulp.dest('css'))
});




gulp.task('watch', function(){
	gulp.watch('sass/**/*.scss', ['sass']);
	gulp.watch('compiled/**/*.css', ['autoprefixer']);
});