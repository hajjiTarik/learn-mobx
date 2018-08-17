export const devLoaders = () => {
    return {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ["react"]
                        },
                    }
                }
            ]
        }
    }
};