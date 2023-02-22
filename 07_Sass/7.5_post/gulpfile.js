const { src, dest, series } = require('gulp');
const postcss = require('gulp-postcss');
const postimport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');
const nested = require('postcss-nested');
const nano = require('gulp-cssnano');
const mixins = require('postcss-mixins');
const sourcemaps = require('gulp-sourcemaps');

const styles = () => {
	return src(['./src/css/main.css'])
		.pipe(sourcemaps.init())
    .pipe(postcss([
      postimport(),
      mixins(),
      nested(),
      postcssPresetEnv({
        stage: 0
      }),
      autoprefixer({overrideBrowserslist: ['last 2 versions']})
    ]))
    .pipe(nano())
		.pipe(sourcemaps.write('.'))
    .pipe(dest('./app/css/'))
};

const html = () => {
	return src(['./src/index.html'])
	.pipe(dest('./app'))
}

exports.styles = series(html, styles);