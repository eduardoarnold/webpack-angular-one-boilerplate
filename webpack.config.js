'use strict';
var path = require("path");
var webpack = require("webpack");

module.exports = {
	cache: true,
	entry: './src/entry.js',
	output: {
    path: path.join(__dirname, 'www/dist/'),
		publicPath: ".www/",
    filename: 'bundle.js'
	},
	module: {
    loaders: [
      {
        test: path.join(__dirname, 'src'),
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
			{
				test: /\.html$/,
				loader: "raw",
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			}
    ]
	},
	plugins: [
		new webpack.ProvidePlugin({
		})
	]
};
