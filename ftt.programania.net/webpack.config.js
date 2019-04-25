'use strict';

const { resolve, join } = require('path');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const ENV = process.argv.find(arg => arg.includes('production'))
  ? 'production'
  : 'development';
const OUTPUT_PATH = ENV === 'production' ? resolve('dist') : resolve('src');
const INDEX_TEMPLATE = resolve('./src/index.html');

const webcomponentsjs = './node_modules/@webcomponents/webcomponentsjs';

const assets = [
  {
    from: resolve('./src/_redirects'),
    to: resolve('./dist/'),
  },
  {
    from: resolve('./src/assets'),
    to: resolve('dist/assets/')
  }
];

const polyfills = [
  {
    from: resolve(`${webcomponentsjs}/webcomponents-*.js`),
    to: join(OUTPUT_PATH, 'vendor'),
    flatten: true
  },
  {
    from: resolve(`${webcomponentsjs}/bundles/*.js`),
    to: join(OUTPUT_PATH, 'vendor', 'bundles'),
    flatten: true
  },
  {
    from: resolve(`${webcomponentsjs}/custom-elements-es5-adapter.js`),
    to: join(OUTPUT_PATH, 'vendor'),
    flatten: true
  },
  {
    from: resolve('./node_modules/whatwg-fetch/fetch.js'),
    to: join(OUTPUT_PATH, 'vendor')
  },
  {
    from: resolve('./node_modules/promise-polyfill/dist/polyfill.min.js'),
    to: join(OUTPUT_PATH, 'vendor')
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
        //
        //
        //
        // {
        //   test: /\.scss$/,
        //   use: ExtractTextPlugin.extract({
        //     filename: 'style.css',
        //     fallback: 'style-loader',
        //     use: [
        //       'css-loader',
        //       'sass-loader'
        //     ]
        //   })
        // },
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
      new ExtractTextPlugin('css/mystyles.css'),
      new CopyWebpackPlugin(polyfills),
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
      new ExtractTextPlugin('css/mystyles.css'),
      new CleanWebpackPlugin([OUTPUT_PATH], { verbose: true }),
      new CopyWebpackPlugin([...polyfills, ...assets]),
      new HtmlWebpackPlugin({
        template: INDEX_TEMPLATE,
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          minifyCSS: true,
          minifyJS: true
        }
      })


      // new WebpackPwaManifest({
      //   filename: 'manifest.json',
      //   name: 'From the trenches',
      //   short_name: 'Ftt',
      //   description: 'From the trenches app',
      //   background_color: '#ffffff',
      //   // crossorigin: 'use-credentials',
      //   icons: [
      //     {
      //       src: resolve('src/assets/android-launchericon-512-512.png'),
      //       sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
      //     },
      //     {
      //       src: resolve('src/assets/android-launchericon-512-512.png'),
      //       size: '1024x1024' // you can also use the specifications pattern
      //     }
      //   ]
      // })
    ]
  }
]);

module.exports = mode => {
  if (mode === 'production') {
    return merge(commonConfig, productionConfig, { mode });
  }

  return merge(commonConfig, developmentConfig, { mode });
};
