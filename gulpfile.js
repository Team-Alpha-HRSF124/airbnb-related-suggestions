const { series } = require('gulp');
const run = require('gulp-run');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

function buildprocess(cb) {
  return new Promise((resolve, reject) => {
    webpack(webpackConfig, (err, data) => {
      if (err) {
        return reject(err);
      } else {
        if (data.hasErrors()) {
          return reject(new Error(data.compilation.errors.join('\n')));
        }
      }
      return resolve();
    });
  }).then(() => {
    console.log('build complete');
  });
}


exports.default = buildprocess;


