const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

let config = {
	plugins: [
		new MiniCssExtractPlugin({
	    filename: "./css/[name].[hash].css",
	    chunkFilename: "[id].[chunkhash].css"
	  })
	],
	entry: {
		"home": path.resolve(__dirname, 'src/entries/home.js')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].[hash].js',
		publicPath: path.resolve(__dirname, 'dist')+"/",
		chunkFilename: 'js/[id].[chunkhash].js',
	},
	module: {
		rules: [
			{
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                }
            },
		    {
	        test: /\.css$/,
	        use: [
	          MiniCssExtractPlugin.loader,
	          "css-loader"
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
	}
}

module.exports = (env, argv) => {
	if (argv.mode === 'production') {
		config.plugins.push(
			new CleanWebpackPlugin()
		)
	}
	return config
}