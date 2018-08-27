import path from 'path';
import paths from "./../config/paths";
export const client =() => {
    return {
        output :{
            path: paths.src,
            filename: "bundle.js",
            libraryTarget: "umd",
        }
    }
};
export const serverOutputs =() => {
    return {
        output : {
            path: paths.src,
            filename: "bundle.js",
            libraryTarget: "umd",
        }
    }
}