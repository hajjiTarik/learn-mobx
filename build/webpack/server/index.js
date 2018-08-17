import path from 'path';

export const serverDev = () => {
    return {
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 9000
        }
    }
};