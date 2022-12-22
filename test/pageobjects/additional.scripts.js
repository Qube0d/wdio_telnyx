

class AdditionalScripts{



  
async acceptCookie() {
    if (this.acceptCookieModalWindow.isClickable()) {
        await this.acceptCookieModalWindow.click();
    }   
    // else {
    //     await browser.waitUntil({ timeout: 500 })
    // }
}

    get acceptCookieModalWindow() {
        return $("//button[text()='Accept and close']")
    }

}

export default new AdditionalScripts();

//module.exports = new AdditionalScripts();