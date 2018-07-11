const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const WebpackRequireFrom = require('webpack-require-from')

module.exports = {
    entry: {
        app: [
            './webpackPreConfig.js',
            './index.js'
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(jpg)$/i,
                loaders: ['file-loader?name=assets/[name]' + '.[ext]']
            },
            {
                test: /.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    plugins: [
        new WebpackRequireFrom({
            methodName: "getChunkURL"
        }),
        new MiniCssExtractPlugin()
    ],
}
