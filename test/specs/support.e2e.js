import SupportPage from "../pageobjects/support.page";
import AdditionalScripts from "../pageobjects/additional.scripts";


describe('Support Page check', () => {
    it('Ability to search and get results', async () => {
        await browser.url('https://support.telnyx.com/en/')
        await AdditionalScripts.acceptCookie();
        await SupportPage.searchFieldCheck();
        await SupportPage.urlSupportPage();
        await expect(browser).toHaveUrlContaining("?q=");
    });
    it('Ability to return to home page', async () => {
        await SupportPage.goToTelnyx();
        await expect(browser).toHaveUrl("https://telnyx.com/");
    });
});
