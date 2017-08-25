var gulp = require('gulp')
var pug = require('gulp-pug')
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer')
var stylus = require('gulp-stylus')
var prettify = require('gulp-prettify')

gulp.task('watch', ['styles-dev', 'views-dev'], function() {
	gulp.watch('src/**/*.pug', ['views-dev'])
	gulp.watch('src/**/*.styl', ['styles-dev'])
})

gulp.task('views-dev', function() {
	return gulp.src('src/**/*.pug')
		.pipe(pug({
			doctype: 'html'
		}))
		.pipe(prettify({
			indent_inner_html: true,
			indent_size: 4
		}))
		.pipe(gulp.dest('src'))
})

gulp.task('styles-dev', function() {
	return gulp.src('src/**/*.styl')
		.pipe(stylus())
		.pipe(postcss([ autoprefixer() ]))
		.pipe(gulp.dest('src'))
})