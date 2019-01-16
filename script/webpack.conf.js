const webpack = require('webpack');
const path = require('path');
const rootPath = path.resolve(__dirname, '../');

module.exports = {
    mode: 'production',
    entry: path.resolve(rootPath, 'src', 'index.js'),
    output: {
        filename: 'museutils.min.js',
        path: path.resolve(rootPath, 'min'),
        library: 'MuseUtils',
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    }
};