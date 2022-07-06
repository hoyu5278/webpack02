const path = require('path');
const MiniCssExtracrtPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    module: {
        rules: [{
            test: /\.css/,
            use: [{
                    loader: MiniCssExtracrtPlugin.loader,
                },
                {
                    loader: 'css-loader',
                },
            ],
        }, ],
    },
    plugins: [
        new MiniCssExtracrtPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
}
