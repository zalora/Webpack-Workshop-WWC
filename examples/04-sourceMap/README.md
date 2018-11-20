# Example 04 Source Map
A [source map](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) is a file that maps from the transformed source to the original source, enabling the browser to reconstruct the original source and present the reconstructed original in the debugger.

    
## Configuration
Find more about [devTool](https://webpack.js.org/configuration/devtool/)

```javascript

// webpack.config.js

module.exports = {
    ...
    devtool: 'inline-source-map',
};
    
```

There are a lot of options other than `inline-source-map`, you can find detailed explaination in [Webpack official documentation](https://webpack.js.org/configuration/devtool/#devtool)
