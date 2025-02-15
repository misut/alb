const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    //libraryTarget: "commonjs2"
  },
  devtool: 'eval-cheap-source-map', // won't work on XD due to lack of eval
  externals: {
    uxp: 'commonjs2 uxp',
    indesign: 'commonjs2 indesign',
    os: 'commonjs2 os'
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          "presets": [
            "@babel/preset-env",
            "@babel/preset-typescript"
          ],
          plugins: [
            "@babel/transform-react-jsx",
            "@babel/plugin-syntax-class-properties",
            "@babel/plugin-transform-object-rest-spread"
          ]
        }
      },
      {
        test: /\.png$/,
        exclude: /node_modules/,
        loader: 'file-loader'
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: ["plugin"]
    })
  ]
};
