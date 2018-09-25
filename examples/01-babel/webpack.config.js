'use strict';

const path = require('path');
const Webpack = require('webpack');

// Our configuration
module.exports = {

	// Define the entry point
	entry: path.resolve(__dirname, 'js/index.js'), // Absolute path

	// Output configuration
	output: {
		path: path.resolve(__dirname, 'dist'), // Absolute path
		filename: 'bundle.js'
    },

	module: {
        rules: [
            {
                test: /\.js$/, // Condition
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
   
};