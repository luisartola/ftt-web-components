'use strict';

const { resolve, join } = require('path');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');


const ENV = process.argv.find(arg => arg.includes('production'))
  ? 'production'
  : 'development';
const OUTPUT_PATH = ENV === 'production' ? resolve('dist') : resolve('src');
const INDEX_TEMPLATE = resolve('./src/index.html');

const assets = [
  {
    from: resolve('./src/assets'),
    to: resolve('dist/assets/')
  }
];

const commonConfig = merge([
  {
    entry: './src/lit-app.js',
    output: {
      path: OUTPUT_PATH,
      filename: '[name].[chunkhash:8].js'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['css-to-string-loader', 'css-loader', 
            { loader: 'postcss-loader', options: {
                ident: 'postcss',
                plugins: () => [
                  postcssPresetEnv()
                ]
              } 
            }
          ]
        },


        {
          test: /\.scss$/,
          use: [
            'css-to-string-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.sass$/,
          use: [
            'css-to-string-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                babelrc: true,
                extends: join(__dirname + '/.babelrc'),
                cacheDirectory: true,
                envName: ENV
              }
            }
          ]
        }
      ]
    }
  }
]);

const developmentConfig = merge([
  {
    devtool: 'cheap-module-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        template: INDEX_TEMPLATE
      })
    ],

    devServer: {
      contentBase: OUTPUT_PATH,
      compress: true,
      overlay: true,
      port: 3000,
      historyApiFallback: true,
      host: 'localhost',
      proxy: {
        '/api': {
          target: 'http://localhost:8000/',
          secure: false
        },
        '/auth': {
          target: 'http://localhost:8000/',
          secure: false
        }
      }
    }
  }
]);

const productionConfig = merge([
  {
    devtool: 'nosources-source-map',
    plugins: [
      new CleanWebpackPlugin([OUTPUT_PATH], { verbose: true }),
      new CopyWebpackPlugin(assets),
      new HtmlWebpackPlugin({
        template: INDEX_TEMPLATE,
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          minifyCSS: true,
          minifyJS: true
        }
      })
    ]
  }
]);

module.exports = mode => {
  if (mode === 'production') {
    return merge(commonConfig, productionConfig, { mode });
  }

  return merge(commonConfig, developmentConfig, { mode });
};