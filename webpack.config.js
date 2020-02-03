const path = require('path');

 const bundelScriptConfig = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist/assets"),
    filename: "bundle.js",
    publicPath: "assets",
  },
  devServer: {
    inline: true,
    contentBase: "./dist",
    port: 3000,
    host: '0.0.0.0',
    historyApiFallback: true,
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

const embedScriptConfig = {
  entry: "./embed.js",
  output: {
    path: path.resolve(__dirname, "dist/assets"),
    filename: "embed.js",
    publicPath: "assets",
    library: "IVideo",
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  devServer: {
    inline: true,
    contentBase: "./dist",
    port: 3000,
    host: '0.0.0.0',
    historyApiFallback: true,
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

// module.exports = [ bundelScriptConfig, embedScriptConfig ]
module.exports = [ bundelScriptConfig ]