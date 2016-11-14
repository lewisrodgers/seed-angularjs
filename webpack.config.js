module.exports = {
  context: __dirname + '/app',
  entry: './index.js',
  output: {
    path: __dirname + '/app/dist',
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
        loaders: ['ng-annotate', 'babel-loader', 'eslint-loader'],
      },
    ],
  },
};
