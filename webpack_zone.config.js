const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        Zone: ['zone.js/dist/zone'],
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
        })
    ],
    mode: "production"
};