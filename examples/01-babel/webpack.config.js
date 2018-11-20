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
                test: /\.js$/, // Regex that only for examining the which module should be applied
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }

};