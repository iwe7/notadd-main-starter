const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        polyfills: ['core-js/es7/reflect', 'zone.js/dist/zone', ],
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'src/assets/libs'),
        library: '_dll_[name]',
    },
    optimization: {
        minimize: true
    },
    plugins: [
        new webpack.DllPlugin({
            context: __dirname,
            name: '_dll_[name]',
            path: path.join(__dirname, 'src/assets/libs', "[name].manifest.json"),
        })
    ],
    mode: "production"
};