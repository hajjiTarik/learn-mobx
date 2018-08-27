import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";
import {serverConfig} from "./webpack/config/serverConfig";
import {webpackConf} from "./webpack/webpack.babel.server";

WebpackDevServer.addDevServerEntrypoints(webpackConf, serverConfig);
const compiler = webpack(webpackConf);
const server = new WebpackDevServer(compiler, serverConfig);

server.listen(9000, 'localhost', ()=>{
    console.log('dev server listening on localhost:9000');
});