var HTMLWbbpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPLuginConfig = new HTMLWbbpackPlugin({
    template: __dirname + 'index.html',
    filename: 'index.html'
});


module.exports = {
    entry: __dirname + '/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        filename: 'transformed.js',
        path: __dirname + '/build'
    },
    plugins: [HTMLWebpackPLuginConfig]
};