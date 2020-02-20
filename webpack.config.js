const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "index.[hash].js"
  },
  devServer: {
    inline: true,
    contentBase: './public',
    historyApiFallback: true,
    port: 3000
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {

    rules: [
      { test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader",
          {
            loader: 'sass-resources-loader',
            options: {
              sourceMap: true,
              resources: [
                path.resolve(__dirname, 'src/assets/styles/variables.scss'),
                path.resolve(__dirname, 'src/assets/styles/mixins.scss')
              ]
            },
          },
        ]
      },
      { test: /\.tsx?$/, loader: "babel-loader" },
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
            { loader: 'url-loader' }
        ]
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  plugins:[
    new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "index.html"
    })
  ]
};