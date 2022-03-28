const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/js/index.js',
        // login: './src/login.js',
        // todo: './src/todo.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: false,
    },
    devtool: 'eval-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9999,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
};
