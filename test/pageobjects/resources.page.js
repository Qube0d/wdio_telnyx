import HelperPage from "../../helper/helper"
const helperPage = new HelperPage();


class ResourcesPage{

    get messagBtn() {
        return $("//button[contains(text(),'Messaging')]")
    }

    get apiBtn() {
        return $("//button[contains(text(),'Verify API')]")
    }

    get sipBtn() {
        return $("//button[contains(text(),'SIP Trunking')]")
    }

    get faxBtn() {
        return $("//button[contains(text(),'Fax')]")
    }
    
    get wirBtn() {
        return $("//button[contains(text(),'Wireless')]")
    }
    

    async filterBYMessaging() {
        await this.messagBtn.click();
        await browser.switchWindow(helperPage.URL.messaging);
    }

    async filterBYVerifyAPI() {
        await this.apiBtn.click();
        await browser.switchWindow(helperPage.URL.api);
    }

    async filterBYSIPTrunking() {
        await this.sipBtn.click();
        await browser.switchWindow(helperPage.URL.sip);
    }
    
    async filterBYFax() {
        await this.faxBtn.click();
        await browser.switchWindow(helperPage.URL.fax);
    }
    
    async filterBYWireless() {
        await this.wirBtn.click();
        await browser.switchWindow(helperPage.URL.wir);
    }    
    


    //button[contains(text(),'New Products & Features')]

    //button[contains(text(),'Guides & Tutorials')]

    //button[contains(text(),'News & Events')]

    //button[contains(text(),'Insights & Resources')]

}

export default new ResourcesPage();

//module.exports = new ResourcesPage();
