'use strict';

const chalk = require('chalk');

const gulp = require('gulp');
const gutil = require('gulp-util');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.js');

const eslint = require('gulp-eslint');
const plumber = require('gulp-plumber');
const nodemon = require('gulp-nodemon');

// Source Paths
const paths = {
  source: './src/',
  dist: './dist'
};
paths.srcJS = paths.source + 'js/**/*.js';
paths.src = paths.source + '/**/*.*';

// Error Handlers
var errorHandler = function (error) {
  let taskMessage = chalk.bold.red('Task Finished With Errors:',error.name,' with',error.message);
  this.emit('end');
};

// Watchers
var watchSourceBuildProduction = gulp.watch(paths.src, ['webpack:build']);
var watchSourceBuildDebug = gulp.watch(paths.src, ['lint:eslint', 'webpack:build-debug']);

gulp.task('default', () => {
  watchSourceBuildProduction;
});

// Lint
gulp.task('lint:eslint', (callback) => {
  return gulp.src(paths.srcJS)
    .pipe(plumber({ errorHandler: errorHandler }))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.result((result) => {
      let fileLog = chalk.blue('ESLint for file:', result.filePath);
      let messageLog = chalk.bold.gray(' #Messages:', result.messages.length);
      let warningLog = chalk.bold.yellow(' #Warnings:', result.warningCount);
      let errorLog = chalk.bold.red(' #Errors:', result.errorCount);
      gutil.log(fileLog + messageLog + warningLog + errorLog);
    }));
});

// WebPack
gulp.task('webpack:build', ['lint:eslint'], (callback) => {
  'use strict';

	let buildConfig = Object.create(webpackConfig);

	buildConfig.plugins = buildConfig.plugins.concat(
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	);

	webpack(buildConfig, (err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack:build', err);
    }

		gutil.log('[webpack:build]', stats.toString({
			colors: true
		}));

		callback();
	});
});


gulp.task('webpack:build-debug', (callback) => {
  let debugConfig = Object.create(webpackConfig);
  debugConfig.devtool = 'sourcemap';
  debugConfig.debug = true;

  let debugCompiler = webpack(debugConfig);

	debugCompiler.run((err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack:build-debug', err);
    }

		gutil.log('[webpack:build-debug]', stats.toString({
			colors: true
		}));

		callback();
	});
});

// Nodemon - start server with build-dev and jslint
gulp.task('nodemon', (callback) => {
  nodemon({
    script: 'server.js',
    ext: 'js',
    env: {
      'NODE_ENV': 'development'
    }
  })
  .on('start', watchSourceBuildDebug)
  .on('change', watchSourceBuildDebug)
  .on('restart', watchSourceBuildDebug);
});
