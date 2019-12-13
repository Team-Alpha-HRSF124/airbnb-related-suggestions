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
    console.log('build complete. Uploading to amazon s3...');
    run ('aws2 s3 cp ./public/client/app.bundle.js s3://fecservices2/').exec();
  }).catch((err) => {
    console.log('there was an error', err);
  });
}


exports.default = buildprocess;


