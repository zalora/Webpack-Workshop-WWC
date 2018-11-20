# Example 05 Dev Server
There are many ways to improve your development efficiency. In the previous example, we introduced `source map`. In this example, we'd like to introduce `webpack-dev-server`. 

## Requirments

    npm install -D webpack-dev-server

Note that `webpack-dev-server` does not come with `webpack` and you need to install it separately. 

## Usage
To start the dev server, you can either run the command the following command in your terminal: 

    node_modules/.bin/webpack-dev-server

or, you can also add a script in your `package.json`:

```json
"scripts": {
  "start:dev": "webpack-dev-server"
}

```

## Configurations 

There are many options available for webpack-dev-server, e.g. You can set the port number of your server, you can also enable webpack's Hot Module Replacement feature, etc.

You can se these configurations by add flags to your cli. Alternatively, you can add these configurations to your `webpack.config.js` file:

```javascript

// webpack.config.js

module.exports = {
  //...
  devServer: {
    hot: true,
    port: 8080
  }
};
    
```

## More readings
[dev-server](https://webpack.js.org/configuration/dev-server/)

[webpack-dev-server](https://github.com/webpack/webpack-dev-server)

