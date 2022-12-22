import DataPrivacyPage from "../pageobjects/data.privacy.page.js";
import AdditionalScripts from "../pageobjects/additional.scripts.js";
import HelperPage from "../../helper/helper.js";


describe('Data Privacy page', () => {
    it('Check URL and title of Telnyx Product Update', async () => {
        await browser.url('/company/data-privacy');
        await AdditionalScripts.acceptCookie();
        await DataPrivacyPage.product();
        await expect(DataPrivacyPage.productTitle).toHaveText(HelperPage.title.product)
        await expect(browser).toHaveUrlContaining(HelperPage.titleURL.product);
    });
    it('Check URL and title of GDPR Frequently Asked Questions', async () => {
        await browser.url('/company/data-privacy');
        await DataPrivacyPage.askedQwestions();
        await expect(DataPrivacyPage.faqTitle).toHaveText(HelperPage.title.faq)
        await expect(browser).toHaveUrlContaining(HelperPage.titleURL.faq);
    });
    it('Check URL and title of Compliance', async () => {
        await browser.url('/company/data-privacy');
        await DataPrivacyPage.complianceCheck();
        await expect(DataPrivacyPage.complianceTitle).toHaveText(HelperPage.title.compliance)
        await expect(browser).toHaveUrlContaining(HelperPage.titleURL.compliance);
    });
    it('Check URL and title of Data Transfer Impact Assessment', async () => {
        await browser.url('/company/data-privacy');
        await DataPrivacyPage.dataTrans();
        await expect(DataPrivacyPage.dataTransferImpactAssessmentTitle).toHaveText(HelperPage.title.TransferImpactAssessment)
        await expect(browser).toHaveUrlContaining(HelperPage.titleURL.TransferImpactAssessment);
    });
});

