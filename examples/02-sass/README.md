# Example 02 SASS
This example shows you the loaders can also be chained by showing how to extract SASS to a file.

## Requirments

    npm install -D style-loader css-loader sass-loader node-sass
    
## Configuration
Find more about [styling loaders](https://webpack.js.org/loaders/#styling)

```javascript

// webpack.config.js
module.exports = {
    ...
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }]
    }
};
    
```

The file with `.scss` extension will be passed to `sass-loader` and compiled to CSS. Then the CSS will be passed to `css-loader`
and translated into CommonJS strings. Finally, `style-loader` will creates a style node in the markup file and inject the JS strings
into the node.

In summary, the loaders are executed in the reverse order, i.e. `sass-loader` -> `css-loader` -> `style-loader`

## More readings
[sass-loader](https://webpack.js.org/loaders/sass-loader/)
