const path = require('path')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const plugins = [
  // new MiniCssExtractPlugin({
  //   filename: "css/[name].css",
  //   chunkFilename: "[id].css"
  // })
]

module.exports = {
  mode: 'development',
  entry: {
    "home": path.resolve(__dirname, 'src/entries/home.js'),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'js/[name].js',
    publicPath: 'dist/',
  },
  devServer: {
    port: 9000,
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        // use: [{
        //   loader: MiniCssExtractPlugin.loader,
        // },
        // ]
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [{
                loader: 'url-loader',
                options: {
                  limit: 1000000,
                  fallback: 'file-loader',
                  name: 'images/[name].[hash].[ext]'
                }
        }]
      }
    ]
  },
  plugins
}