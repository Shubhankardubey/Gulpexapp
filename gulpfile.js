const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
// // const sass = require('gulp-sass');
const concat = require('gulp-concat');
/*
gulp.task - Degine tasks
gulp.src - point to files to use 
gulp.dest - points to the folder to output
gulp.watch - watch files and folders for changes
*/

//Logs Message
gulp.task('message', function(){
	return console.log('Hey Gulp is running...');
});



//copy all html files
gulp.task('copyHtml', function(){
	gulp.src('src/*.html')
	.pipe(gulp.dest('dist'));
	
});

//optimising images
gulp.task('imageMin', ()=>
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
);

//minimising js file
gulp.task('minify', ()=>
	gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
);

//minimising js file
gulp.task('scripts', ()=>
	gulp.src('src/js/*.js')
		.pipe(concat(main.js))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
);

// //compile sass
// gulp.task('sass', ()=>
	// gulp.src('src/sass/*.scss')
		// .pipe(sass().on('error', sass.logError))
		// .pipe(gulp.dest('dist/css'))
// );

gulp.task('default', function(){
	return console.log('Hey Gulp is running...');
});