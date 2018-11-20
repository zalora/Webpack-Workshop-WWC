# Example 01 Babel
Modern JavaScript mostly is in ES6+, however not all the browsers can understand these new syntax. 
Thus we need tools like [Babel](https://babeljs.io/) to transpiles ES6 to get browser-compatible JavaScript.

## Requirments

    npm install -D babel-loader @babel/core @babel/preset-env

## Configuration
Find more information about [Loaders](https://webpack.js.org/loaders/).
```javascript
    module: {
      rules: [
        {
          test: /\.js$/, // regex rule, only files match this rule will be transpiled
          exclude: /(node_modules)/, // exclude file in node_modules
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
```

## More readings
* [babel-preset-env](https://babeljs.io/docs/en/babel-preset-env)
* Webpack Official Documentation on [babel-loader](https://webpack.js.org/loaders/babel-loader/)
