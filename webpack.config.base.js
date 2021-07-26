const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {

    entry: './src/index.js',
    output: {
        filename: 'index.[contenthash].js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'model',
            template: 'src/assets/index.html'
        }),

    ],

    module: {

        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"],
            },
        ]
    }
};
