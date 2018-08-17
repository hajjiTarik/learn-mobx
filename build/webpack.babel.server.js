import { serverEntries } from "./webpack/entries";
import { serverOutputs } from "./webpack/output";
import { serverDev } from "./webpack/server";
import { devLoaders } from "./webpack/loaders";
import merge from 'merge';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

console.log("Start Bundling...");
const serverConf = merge(
    serverEntries(),
    serverOutputs(),
    devLoaders(),
    serverDev()
);
const compiler = webpack(serverConf);
const server = new WebpackDevServer(compiler);

server.listen(8080, 'localhost');