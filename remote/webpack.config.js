const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require('path');
const deps = require("./package.json").dependencies;
const { MFLiveReloadPlugin } = require("@module-federation/fmr");

const shared = {
    ...deps,
    react: {
        singleton: true,
        requiredVersion: deps.react,
    },
    'react-dom': {
        singleton: true,
        requiredVersion: deps["react-dom"],
    }
};

module.exports = {
    entry: {
        main: path.resolve(__dirname, "./src", "index"),
    },
    mode: 'development',
    devServer: {
        port: 3002,
        historyApiFallback: true,
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        chunkFilename: '[name].bundle.js',
        publicPath: 'auto',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
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
        new MFLiveReloadPlugin({
            port: 3002,
            container: "remoteApp",
        }),
        new ModuleFederationPlugin({
            name: "remoteApp",
            filename: "remoteEntry.js",
            exposes: {
                './Button': './src/button',
                '.': './src/module/',
            },
            shared
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./public/index.html"),
            base: '/cart'
        })
],
    resolve: {
        extensions: [".js", ".jsx"],
    },
}
