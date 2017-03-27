
const webpack = require('webpack')
const path = require('path')

const config = {
  context: path.resolve(__dirname, 'app'),
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
			{ 
				test: /\.jsx?$/,         // Match both .js and .jsx files
				exclude: /node_modules/,
				loader: "babel-loader", 
				query:
					{
						presets:['react']
					}
			}
    ]
  }
}

module.exports = config
