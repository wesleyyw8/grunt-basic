var gulp = require('gulp'),
uglify = require('gulp-uglify'),
concat = require('gulp-concat');
gulp.task('compress', function(){
	gulp.src('src/js/*.js')
	.pipe(concat("script.js"))
	.pipe(gulp.dest('dist'))
	.pipe(uglify())
	.pipe(gulp.dest('dist'))
});

gulp.task('watch', function(){
	gulp.watch('src/js/*.js', ['compress']);
});

gulp.task('default', ['compress','watch']);