class SupportEnv{

    async goto() {
        await browser.url('https://telnyx.com/')
        await browser.setWindowSize(1940, 1080);
    }

    async suppPage() {
        await browser.url('https://support.telnyx.com/en/')
        await browser.setWindowSize(1940, 1080);
    }

    async signUp() {
        await browser.url('https://telnyx.com/sign-up')

    }

    async reportAbuse() {
        await browser.url('https://telnyx.com/report-abuse')
        await browser.setWindowSize(1940, 1080);
    }

    async dataPrivacy() {
        await browser.url('https://telnyx.com/company/data-privacy')
        await browser.setWindowSize(1940, 1080);
    }

    async careers() {
        await browser.url('https://telnyx.com/company/careers')
        await browser.setWindowSize(1940, 1080);

    }

    async about() {
        await browser.url('https://telnyx.com/company/about')
        await browser.setWindowSize(1940, 1080);
    }


    async resources() {
        await browser.url('https://telnyx.com/resources')
        await browser.setWindowSize(1940, 1080);
    }


async acceptCookie() {
    if ( this.acceptCookieModalWindow.isClickable()) {
        await this.acceptCookieModalWindow.click();
        
    }
    else {
        await browser.waitUntil({ timeout: 500 })
    }
}

    get acceptCookieModalWindow() {
        return $("//button[text()='Accept and close']")
    }
    get buttonClose() {
        return $("[aria-label='close and deny']")
    }  
}

export default new SupportEnv();

//module.exports = new SupportEnv();