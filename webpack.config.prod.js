const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const base = require('./webpack.config.base.js')

module.exports = {
    ...base,
    //生产模式
    mode: 'production',
    devtool: 'inline-source-map',

    plugins: [
        ...base.plugins,
        new HtmlWebpackPlugin({
            title: 'model',
            template: 'src/assets/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css",
            ignoreOrder: false,
        })
    ],

    module: {
        rules: [

            {
                test: /\.css$/i,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../',
                    },
                },

                    'css-loader',
                ],
                // use: ["style-loader", "css-loader"],
            },
        ],
    }
};
