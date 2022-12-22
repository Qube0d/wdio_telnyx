import AdditionalScripts from './additional.scripts.js'


class SupportPage{

    get searchField() {
        return $("input[type='text']")
    }



    get telnyxHomePage() {
        return $("[href='https://telnyx.com']")
    }

    get sectionContent() {
        return $("[class='section__content']")
    }
    
    async urlSupportPage() {
        await browser.url("https://support.telnyx.com/en/?q=")
        await browser.switchWindow("https://support.telnyx.com/en/?q=")
    }

    async searchFieldCheck() {
        await this.searchField.click();
        await this.searchField.addValue('Text');
        await browser.keys("\uE007")
    }

    async goToTelnyx() {
        await this.telnyxHomePage.isClickable();
        await this.telnyxHomePage.click();
        await browser.switchWindow("https://telnyx.com")
        await AdditionalScripts.acceptCookie();
    }



}

export default new SupportPage();

//module.exports = new SupportPage();
