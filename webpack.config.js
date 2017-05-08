var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    
    devServer: {
        inline: true,
        port: 80
    },
    
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:80/',
        'webpack/hot/only-dev-server',
        './src'
    ],
    output: {
        filename: 'bundle.js'
    },
    
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js']
    },
    module: {
        loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
        }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};