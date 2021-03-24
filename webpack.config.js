const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { pathToFileURL } = require('url')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude:'/node_modules/',
        use : 'babel-loader'  
      },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        }, 
      ]
  },
  devServer: {
    contentBase: path.join(__dirname,'public'),
    historyApiFallback:true,
    port: 9000,
  },
  plugins:[
    new HtmlWebpackPlugin({
      template : './public/index.html'
    })
  ]
}