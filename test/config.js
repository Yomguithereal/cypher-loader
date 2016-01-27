module.exports = {
  entry: __dirname + '/entry.js',
  output: {
    path: __dirname + '/../build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.cypher$/,
        loader: require.resolve('../loader.js')
      }
    ]
  }
};
