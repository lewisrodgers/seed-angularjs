module.exports = {
  context: __dirname + '/app',
  entry: './src/app.js',
  output: {
    path: __dirname + '/app/dist',
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: 'app/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: /app\/src/,
        loaders: ['ng-annotate', 'babel-loader'],
      },
    ],
  },
};
