class DataPrivacyPage{

    get productsUPD() {
        return $("ul li [href='#productupdates']")
    }

    get productTitle() {
        return $("//h2[contains(text(),'Telnyx Product Updates')]")
    }

    get faq() {
        return $("[href='#faq']")
    }

    get faqTitle() {
        return $("//h2[contains(text(),'GDPR Frequently Asked Questions')]")
    }

    get compliance() {
        return $("//a[@href='#compliance']")
    }

    get complianceTitle() {
        return $("//h2[contains(text(),'Compliance')]")
    }

    get dataTransferImpactAssessment() {
        return $("[href='#dtia']")
    }

    get dataTransferImpactAssessmentTitle() {
        return $("//h2[contains(text(),'Data Transfer Impact Assessment')]")
    }




    async switch() {
        await browser.switchWindow("https://telnyx.com/company/data-privacy")
    }

    async product() {
        await this.productsUPD.click();
        await browser.switchWindow("data-privacy#productupdates");
    }

    async askedQwestions() {
        await this.faq.click();
        await browser.switchWindow("data-privacy#faq")
    }

    async complianceCheck() {
        await this.compliance.click();
        await browser.switchWindow("data-privacy#compliance")
    }

    async dataTrans() {
        await this.dataTransferImpactAssessment.click()
        await browser.switchWindow("data-privacy#dtia")
    }





}

export default new DataPrivacyPage();

//module.exports = new DataPrivacyPage();