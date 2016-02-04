var gulp = require('gulp'),
uglify = require('gulp-uglify');
gulp.task('compress', function(){
	gulp.src('src/js/*.js').pipe(uglify()).pipe(gulp.dest('dist'))
});