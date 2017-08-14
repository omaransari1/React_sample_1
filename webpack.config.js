module.exports = {
  entry: './app.jsx',

  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
};