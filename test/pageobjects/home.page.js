
class HomePage{
    get headerSignUP() {
            return $("header li div a[href='/sign-up']")
        }
    get followTwitter() {
            return $("[href='https://twitter.com/telnyx']")
        }
    get followFacebook() {
            return $("[href='https://www.facebook.com/Telnyx/']")
    }
    get connectLinked() {
            return $("[href='https://www.linkedin.com/company/telnyx/']")
    }
    

    async clickURLTwitter() {
        await this.followTwitter.click();
        await browser.switchWindow("https://twitter.com/telnyx")
    }

    async clickURLFacebook() {
        await this.followFacebook.click();
        await browser.switchWindow("https://www.facebook.com/Telnyx/")
    }

    async clickURLLinkEd() {
        await this.connectLinked.click();
        await browser.switchWindow('linkedin.com')
    }





}

export default new HomePage();
//module.exports = new HomePage();