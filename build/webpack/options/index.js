export const devOptions = () => {
    return {
        mode: process.env.NODE_ENV,
        devtool : 'source-map'
    }
};