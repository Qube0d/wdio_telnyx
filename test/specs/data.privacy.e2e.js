import DataPrivacyPage from '../pageobjects/data.privacy.page';
import HelperPage from "../../helper/helper";
import AdditionalScripts from '../pageobjects/additional.scripts';
const helperPage = new HelperPage();


describe('Data Privacy page', () => {
    it('Check URL and title of Telnyx Product Update', async () => {
        await browser.url('/company/data-privacy');
        await AdditionalScripts.acceptCookie();
        await DataPrivacyPage.product();
        await expect(DataPrivacyPage.productTitle).toHaveText(helperPage.title.product)
        await expect(browser).toHaveUrlContaining(helperPage.titleURL.product);
    });
    it('Check URL and title of GDPR Frequently Asked Questions', async () => {
        await browser.url('/company/data-privacy');
        await DataPrivacyPage.askedQwestions();
        await expect(DataPrivacyPage.faqTitle).toHaveText(helperPage.title.faq)
        await expect(browser).toHaveUrlContaining(helperPage.titleURL.faq);
    });
    it('Check URL and title of Compliance', async () => {
        await browser.url('/company/data-privacy');
        await DataPrivacyPage.complianceCheck();
        await expect(DataPrivacyPage.complianceTitle).toHaveText(helperPage.title.compliance)
        await expect(browser).toHaveUrlContaining(helperPage.titleURL.compliance);
    });
    it('Check URL and title of Data Transfer Impact Assessment', async () => {
        await browser.url('/company/data-privacy');
        await DataPrivacyPage.dataTrans();
        await expect(DataPrivacyPage.dataTransferImpactAssessmentTitle).toHaveText(helperPage.title.TransferImpactAssessment)
        await expect(browser).toHaveUrlContaining(helperPage.titleURL.TransferImpactAssessment);
    });
});

