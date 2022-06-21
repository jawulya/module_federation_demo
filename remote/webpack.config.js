const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require('path');
module.exports = {
    entry: {
        main: path.resolve(__dirname, "./src", "index.js"),
    },
    mode: 'development',
    devServer: {
        port: 3002,
        historyApiFallback: true,
    },
    output: {
        publicPath: 'auto',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-react", '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "remoteApp",
            filename: "remoteEntry.js",
            exposes: {
                './Button': './src/button',
                '.': './src/module/',
            },
            shared: {'react': {singleton: true },'react-dom': {singleton: true }, 'lodash': {singleton: true },'moment': {singleton: true }, },}),
new HtmlWebpackPlugin({
    template: "./public/index.html",
})
]
}
