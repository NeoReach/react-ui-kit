const path = require('path');
// const packageInfo = require('./package.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index-ui.ts',
    devtool: 'source-map',
    output: {
        // filename: "research-ui-react-library-" +
        //     packageInfo.version + ".js",
        filename: "index-ui.js",
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: "umd",
        clean: true
    },
    resolve: {
        extensions: ['.ts', '.tsx'],
    },
    externals: {
        "react": "react",
        "react-dom": "react-dom",
        "quickblox/quickblox": "quickblox/quickblox",
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/index.css',
            chunkFilename: 'styles/[id].css',
        }),
    ],
    module: {
        rules: [
            {
                test: [/\.css$/i],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true,
                        },
                    },
                    'css-loader'
                ],
            },
            {
                test: [/\.s[ac]ss$/i],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true,
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(ts|tsx)?$/,

                use: {
                    loader: 'ts-loader',
                    options: {
                        compilerOptions: {
                            noEmit: false,
                        },
                    }

                },

                exclude: ['/node_modules/', '/src/__tests__'],
            },
            {
              test: /\.svg$/i,
              issuer: /\.[jt]sx?$/,
              use: ['@svgr/webpack', 'url-loader'],
            },
        ],
    }
};
