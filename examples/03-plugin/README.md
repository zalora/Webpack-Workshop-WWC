# Example 03 Plugin
This example shows you how plugin works in webpack bundling process.
Plugin can register hooks within webpacks build system and access (and modify) the compiler. Usually it works on the bundle/chunk level.

## Requirments

    npm install -D mini-css-extract-plugin
    
## Configuration
Find more about [plugins](https://webpack.js.org/plugins/)

```javascript

// webpack.config.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    ...
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader, // extracts CSS into separate files
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }]
    },
    plugins: [
    new MiniCssExtractPlugin() // you can add more options by adding the option object
  ],
};
    
```

Unlike `style-loader`, `mini-css-extract-plugin` will extract the CommonJs string into a seperate file. 

In summary, the loaders are still executed in the reverse order, i.e. `sass-loader` -> `css-loader` -> `MiniCssExtractPlugin.loader`

Note that, this plugin does **not** minimize the css output. To minify the output, you can use plugins like [optimize-css-assets-webpack-plugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin) and enable `optimization.minimizer`.

## More readings
[mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/)
