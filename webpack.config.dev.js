module.exports = {
  devtool: 'eval',
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
  devServer: {
    contentBase: 'app/'
  }
};
