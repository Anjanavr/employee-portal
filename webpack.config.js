const path = require('path'),
webpack = require('webpack'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function makeWebpackConfig() {

    var config = {};
    config.context = path.resolve(__dirname, './src');

    // app entry point
    config.entry = {
        'app': './main.ts'
    };

    // output
    config.output = {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/app.bundle.js'
    };

    config.resolve = {
        // only discover files that have those extensions
        extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html'],
    };

    // loaders
    config.module = {
        rules: [{
                test: /\.ts$/,
                use: ['awesome-typescript-loader', 'angular2-template-loader'],
                exclude: [/\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/]
            },
            {
                test: /\.css$/,
               use: ['to-string-loader', 'style-loader', 'css-loader']
            },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.(png|woff|woff2|svg|gif)$/, use: 'url-loader?limit=100000' }, 
            { test: /\.(eot|ttf|wav|mp3|pdf)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: 'file-loader' }
        ]
    };

    // plugins
    config.plugins = [
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname // location of your src
        )
    ];

    config.plugins.push(
        new HtmlWebpackPlugin({
            template: './index.html',
            chunksSortMode: 'dependency'
        })
    );

    config.devServer = {
        contentBase: path.resolve(__dirname, './src'),
        historyApiFallback: true,
        quiet: true,
        stats: 'minimal'
    };

    return config;
}();