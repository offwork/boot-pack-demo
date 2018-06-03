const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  devtool: 'cheap-eval-source-map',
  context: path.join(__dirname, 'src'),
  entry: {
    index: './index.js',
    about: './about/about.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      chunksSortMode: 'dependency',
      title: 'Index Page',
      template: path.join(__dirname, 'src', 'index.html'),
      hash: true,
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      chunksSortMode: 'dependency',
      title: 'About Page',
      template: path.join(__dirname, 'src', 'index.html'),
      filename: 'about.html',
      hash: true,
      chunks: ['about']
    })
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    stats: "errors-only"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [require('autoprefixer')];
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      },
      {
        // Loads a SASS/SCSS file and compiles it to CSS
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        // Loads a SASS/SCSS file and compiles it to CSS
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.html$/,
        use: [{ loader: "html-loader" }]
      }
    ]
  }
};
