import { config } from "../config/wdio.conf.js";

const firefoxConfig = {
    ...config,
    services: [['selenium-standalone', {firefox: 'latest'}]],
    capabilities: [{
        maxInstances: 1,
        browserName: "firefox",
        'moz:firefoxOptions': {
            args: ['--width=1940',
                '--height=1080', '-headless']
        },
    }],
    "windowSize": "maximize",
    path: "/wd/hub",
};

const _config = firefoxConfig;
export { _config as config };