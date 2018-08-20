const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
/*
    -- TOP LEVEL FUNCTIONS --
    gulp.task  - Define tasks
    gulp.src   - Points to files to use
    gulp.dest  - Points to folder output
    gulp.watch - Watch files and folders for changes
*/

// Logs Message
gulp.task('message', () => {
    console.log('task running')
})

// Copy All HTML files
gulp.task('copyHtml', () => {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
})

// Optimize Images
gulp.task('imagemin', () => {
    gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
})

// Minify files
gulp.task('minify', () => {
    gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
})

// Compile sass 
gulp.task('sass', () => {
    gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
})

// Concat Files
gulp.task('concat', () => {
    gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
})

// Menyatukan semuanya
gulp.task('default', ['copyHtml','imagemin', 'sass', 'concat'])

// Watch
gulp.task('watch', () => {
    gulp.watch('src/js/*.js', ['scripts']);
    gulp.watch('src/images/*', ['imagemin']);
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('src/*.html', ['copyHtml']);

})