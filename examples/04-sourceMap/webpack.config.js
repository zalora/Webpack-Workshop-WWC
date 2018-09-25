'use strict';

const path = require('path');
const Webpack = require('webpack');

// Our configuration
module.exports = {

	// Define the entry point
	entry: path.resolve(__dirname, 'js/index.js'),

	// Output configuration
	output: {
		path: path.resolve(__dirname, 'dist/'),
        filename: 'bundle.js',
        publicPath: '/examples/05-dev-server/dist/',
    },
    devtool: 'inline-source-map',
	module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
};