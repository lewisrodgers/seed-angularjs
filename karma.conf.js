var webpackConfig = require('./webpack.config.dev.js');
webpackConfig.entry = {};

// Karma configuration
// Generated on Sun Nov 13 2016 20:55:26 GMT-0500 (EST)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'], // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    browsers: ['Chrome'], // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    files: ['app/src/**/*.spec.js'],
    preprocessors: { // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      'app/src/**/*.spec.js': ['webpack', 'babel']
    },
    webpack: webpackConfig,
    wepackMiddleware: {noInfo: true},
    exclude: [],
    reporters: ['dots'], // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    port: 9876,
    colors: true,
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity
  })
};
