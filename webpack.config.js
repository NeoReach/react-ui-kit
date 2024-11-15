const path = require('path');
const packageInfo = require('./package.json');

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
    module: {
        rules: [
            {
                test: [/\.(css|scss|sass)$/i],
                use: [
                    // Creates style nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Prefix CSS selectors
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: {
                                    "postcss-prefix-selector": {
                                        prefix: packageInfo?.name || 'qb-react-ui-kit',
                                        transform: (prefix, selector, prefixedSelector, filePath, rule) => {
                                            if (selector.match(/^(html|body)/)) {
                                                return selector.replace(/^([^\s]*)/, `$1 ${prefix}`);
                                            }

                                            if (filePath.match(/node_modules/)) {
                                                return selector; // Do not prefix styles imported from node_modules
                                            }

                                            const annotation = rule.prev();
                                            if (annotation?.type === 'comment' && annotation.text.trim() === 'no-prefix') {
                                                return selector; // Do not prefix style rules that are preceded by: /* no-prefix */
                                            }

                                            return prefixedSelector;
                                        }
                                    },
                                    autoprefixer: {}
                                }
                            }
                        }
                    },
                    // Compiles Sass to CSS (only for .scss/.sass files)
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
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
