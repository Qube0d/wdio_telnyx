import { config } from '../config/wdio.conf.js';


const edgeHeadlessConfig = {
    ...config,
    services: [['selenium-standalone', { chromiumedge: 'latest' }]], 
    capabilities: [{
        maxInstances: 2,
        browserName: "MicrosoftEdge",
        'ms:edgeOptions': {
            args: ['--headless', '--start-maximized', '--no-sandbox', '--disable-gpu', '--window-size=1940,1080', '--allow-insecure-localhost']
        },
    }],

   
};

const _config = edgeHeadlessConfig;
export { _config as config };