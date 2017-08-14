module.exports = {
  entry: './app.js',

  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
};