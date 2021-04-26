const webpack = require('webpack');
const path = require('path');
const WebpackMonitor = require('webpack-monitor');

var exp = {
    mode: 'development',
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        historyApiFallback: {
            index: '/'
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    entry: {
        webpack: 'webpack-dev-server/client?http://0.0.0.0:81',
        webpackHot: 'webpack/hot/only-dev-server',
        bundle: './index.js'
    },
    output: {
        path: path.join(__dirname, 'assets'),
        filename: '[name].js',
        publicPath: 'assets/',
    },
    amd: {
        jQuery: true
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [
                                '@babel/proposal-class-properties',
                                '@babel/proposal-optional-chaining',
                            ],
                            presets: [
                                ['@babel/preset-env', {
                                    'targets': {
                                        'browsers': ['last 2 versions'],
                                    },
                                    'modules': false,
                                }],
                                '@babel/react',
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            minetype: 'image/png',
                        },
                    },
                ],
            },
            {
                test: /\.jpg$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            minetype: 'image/jpg',
                        },
                    },
                ],
            },
            {
                test: /\.gif$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            minetype: 'image/gif',
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
                use: 'url-loader',
            },
        ],
    },
    plugins: [
        new WebpackMonitor({
            port: 8081,
        }),
        new webpack.NamedModulesPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    performance: {
        hints: false,
    },
};

module.exports = exp;