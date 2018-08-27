import merge from 'merge';
import {serverEntries} from "./entries/index";
import {serverOutputs} from "./output/index";
import {devLoaders} from "./loaders/index";
import {dev} from "./plugins";
import {devOptions} from "./options";

export const webpackConf = merge(
    devOptions(),
    serverEntries(),
    serverOutputs(),
    dev(),
    devLoaders()
);