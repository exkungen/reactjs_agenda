/* global __dirname */
/* eslint-disable */

var path = require('path');

var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var dir_js = path.resolve(__dirname, 'js');
var dir_html = path.resolve(__dirname, 'html');
var dir_img = path.resolve(__dirname, 'img');
var dir_build = path.resolve(__dirname, 'build');

module.exports = {
    entry : path.resolve(dir_js, 'main.jsx'),
    resolve : {
        root : __dirname + '/js',
        modulesDirectories : [ 'node_modules' ],
        extensions : [ '', '.js', '.jsx' ]
    },
    output : {
        path : dir_build,
        filename : 'bundle.js'
    },
    devServer : {
        contentBase : dir_build,
        outputPath: path.join(__dirname, 'build')
    },
    module : {
        loaders : [
            {
                loader : 'babel-loader',
                test : /\.jsx?$/,
                exclude : /node_modules/,
                query : { presets : [ 'es2015', 'react', 'stage-2' ] }
            },
            {
                test : /\.scss$/,
                loader : ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    plugins : [
        // Simply copies the files over
        new CopyWebpackPlugin([
            { from : dir_html },
            { from : dir_img, to : 'img' }
        ]),
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin(),
        // Move generated styles into a dedicated file
        new ExtractTextPlugin('style.css', {
            allChunks : true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV' : JSON.stringify('production')
        })
    ],
    stats : {
        // Nice colored output
        colors : true
    },
    // Create Sourcemaps for the bundle
    devtool : 'source-map'
};
