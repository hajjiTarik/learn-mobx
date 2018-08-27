import paths from "./paths";

export const serverConfig = {
    hot: true,
    inline: true,
    stats: {
        colors: true
    },
    historyApiFallback: true,
    contentBase: paths.src,
    port: 9000,
    host: 'localhost',
    setup: (app) => {
        app.set('views', paths.templateDirectory);
        app.set('view engine', 'ejs');
        app.get('/', (_, res) => (
            res.render('index', {
                asset: 'bundle.js',
            })
        ));
    },
}