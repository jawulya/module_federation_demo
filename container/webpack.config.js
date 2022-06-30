const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require('dotenv-webpack');
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');
const { MFLiveReloadPlugin } = require("@module-federation/fmr");

const path = require('path');
const deps = require("./package.json").dependencies;

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
        port: 3001,
        historyApiFallback: true,
    },
    output: {
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
        new Dotenv(),
        new ExternalTemplateRemotesPlugin(),
        new MFLiveReloadPlugin({
            port: 3001,
            container: "container",
        }),
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                remoteApp: 'remoteApp@http://localhost:3002/remoteEntry.js'
            },
                shared,
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            base: '/'
        })
    ],
    resolve: {
        extensions: [".js", ".jsx"],
    },
}