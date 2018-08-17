import path from 'path';

export const client =() => {
    return {
        output :{
            path: path.resolve(__dirname, "dist"),
            filename: "bundle.js",
            publicPath: "/assets/",
            libraryTarget: "umd",
        }
    }
};
export const serverOutputs =() => {
    return {
        output : {
            path: path.resolve(__dirname, "dist"),
            filename: "bundle.js",
            publicPath: "/assets/",
            libraryTarget: "umd",
        }
    }
}