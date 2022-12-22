const { config } = require('../config/wdio.conf.js');
require('../config/wdio.conf')

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

exports.config = chromeConfig;