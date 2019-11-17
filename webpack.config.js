module.exports = {
  entry: "./src/index.js",
  output: {
    path: "/dist/assets",
    filename: "bundle.js",
    publicPath: "assets"
  },
  devServer: {
    inline: true,
    contentBase: "./dist",
    port: 3000,
    host: '0.0.0.0'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test:/\.json$/,
        exclude: /(node_modules)/,
        loader: 'json-loader'
      }
    ]
  }
}