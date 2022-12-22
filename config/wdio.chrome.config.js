import { config } from '../config/wdio.conf.js';


const chromeConfig = {
    ...config,
    services: [['selenium-standalone', {chrome: 'latest'}]],
    capabilities: [{
        maxInstances: 10,
        browserName: "chrome",
        'goog:chromeOptions': {
            args: ['--headless', '--start-maximized', '--no-sandbox', '--disable-gpu', '--window-size=1940,1080', '--allow-insecure-localhost']
        },
    }, ],
    path: "/wd/hub",
};

const _config = chromeConfig;
export { _config as config };