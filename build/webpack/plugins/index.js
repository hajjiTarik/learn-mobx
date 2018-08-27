import webpack from 'webpack';

export const dev = () => {
    return {
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    }
};
