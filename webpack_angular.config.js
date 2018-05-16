const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        ng: ['core-js/es7/reflect', '@angular/core', '@angular/forms', '@angular/common', '@angular/router', '@angular/common/http', '@angular/animations', '@angular/platform-browser/animations', '@angular/elements', '@angular/cdk']
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'src/assets/libs'),
        library: '[name]',
    },
    optimization: {
        minimize: true
    },
    plugins: [
        new webpack.DllPlugin({
            context: __dirname,
            name: '[name]',
            path: path.join(__dirname, 'src/assets/libs', "[name].manifest.json"),
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require("./src/assets/libs/Rx.manifest.json"),
            name: "Rx"
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require("./src/assets/libs/_.manifest.json"),
            name: "_"
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require("./src/assets/libs/hammer.manifest.json"),
            name: "hammer"
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require("./src/assets/libs/Zone.manifest.json"),
            name: "Zone"
        }),
    ],
    mode: "production"
};