const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'source-map',
    entry: {
        vendor: [
            'axios',
            'immutable',
            'moment',
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'react-router-redux',
            'redux',
            'redux-thunk',
            'reselect',
            'uuid',
            'redux-logger', 
        ], 
        'client.min': './client', 
    }, 
    output: {
        filename: 'bundle.min.js',
        path: path.join(__dirname, 'public'),
        publicPath: '/public/',
        chunkFilename: '[name]-[chunkhash].js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            {include: /\.json$/, loaders: ["json-loader"]}, 
            {
                test: /\.css$/i,
                loader: ExtractTextPlugin.extract('style',
                `css?modules&localIdentName=[name]_[local]__[hash:base64:5]!postcss`),
            },
        ]
    },
    postcss: [ 
        autoprefixer({ browsers: ['last 2 versions'] }) 
    ],
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ 
            name: 'vendor', 
            filename: 'vendor.min.js', 
            minChunks: Infinity,
        }),
        new ExtractTextPlugin('main.min.css', { allChunks: true }),
        //optimize webpack
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        //end optimize

    //define global module use
    new webpack.ProvidePlugin({
        'Helper': __dirname + '/src/helper.js',
        'types': __dirname + '/src/types.js',
        'makeAxios': __dirname + '/src/api/API.js',
        'apiService': __dirname + '/src/api/index.js',
        '_' : 'lodash',
        'axios': 'axios', 
        'config': __dirname + '/config.js',
        'moment': 'moment', 
        'immutable': 'immutable', 
        'selectors': __dirname + '/src/selectors',
    })
    //end define 
  ]
};