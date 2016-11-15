var webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: './src/app.js',
  output: {
    path: __dirname + '/app/static',
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: /app\/src/,
      loaders: ['ng-annotate', 'babel-loader', 'eslint-loader']
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),

    // expose the environment to the front end
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    // uglfy / minify js
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: true,
      compress: {
        drop_console: true
      },
      mangle: {
        except: ['$super', '$', 'exports', 'require', '$q', '$ocLazyLoad']
      }
    })
  ]
};
