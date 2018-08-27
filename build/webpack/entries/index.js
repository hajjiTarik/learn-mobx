export const clientEntries = () => {
    return {
        entry :{
            app : '../'
        }
    }
};

export const serverEntries = () => {
    return {
        entry :{
            app : [
                'webpack/hot/only-dev-server',
                './src/index.js'
            ]
        }
    }
};
