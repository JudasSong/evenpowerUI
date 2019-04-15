/**
 * 打包UI样式
 */
let autoprefixer = require('autoprefixer');
let cssnano = require('cssnano');

let gulp = require('gulp');
let less = require('gulp-less');
let postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
let gulpAutoprefixer = require('gulp-autoprefixer');
let cssmin = require('gulp-cssmin'); //压缩成一行
let concat = require('gulp-concat'); // 合并css
let gulpif = require('gulp-if'); // 有条件的执行gulp任务

gulp.task('compile', function() {
  return gulp.src('./src/*.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(postcss([cssnano()]))
    .pipe(gulpAutoprefixer({
      browsers: ['last 5 versions', 'Android >= 4.0'],
      cascade: true, //是否美化属性值 默认：true 像这样：
      remove: true //是否去掉不必要的前缀 默认：true
    }))
    .pipe(cssmin())
    // gulpif 第一个参数为true时,合并css,当false时,不合并css
    .pipe(gulpif(false, concat('index.css')))
    .pipe(gulp.dest('../../dist/evenpowerui/theme-set/lib'));
});

gulp.task('iconfont', function() {
  return gulp.src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('../../dist/evenpowerui/theme-set/lib/fonts'));
});

gulp.task('build', ['compile', 'iconfont']);

gulp.task('watch', function() {
  gulp.watch('./src/*.less', ['compile']);
});
