const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = (env) => {
  const plugins = [
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
      chunkFilename: "[id].[hash].css",
    }),
  ]
  // if (env.NODE_ENV === 'production') {
  //   plugins.push (
  //     new CleanWebpackPlugin(['dist'], { root: __dirname })
  //   )
  // }

  return {
    mode: 'production',
    optimization: {
      minimizer: [
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            discardComments: {
              removeAll: true
            },
            safe: true
          }
        })
      ]
    },
    entry: {
      "home": path.resolve(__dirname, 'src/entries/home.js'),
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: 'js/[name].[hash].js',
      publicPath: 'dist/',
      chunkFilename: 'js/[id].[chunkhash].js',
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
          }
        },
        {
          test: /\.css$/,
          use: [{
            loader: MiniCssExtractPlugin.loader,
          },
            'css-loader',
          ]
        },
        {
	        test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
	        use: {
	          loader: 'url-loader',
	          options: {
	            limit: 1000000,
	            fallback: 'file-loader',
	            name: 'images/[name].[hash].[ext]',
	          }
	        },
	      }
      ]
    },
    plugins
  }
}