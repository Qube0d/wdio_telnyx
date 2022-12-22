import AdditionalScripts from "../pageobjects/additional.scripts";
import ResourcesPage from "../pageobjects/resources.page";
import HelperPage from "../../helper/helper";
const helperPage = new HelperPage();



describe('Check resources page filter', () => {
    it('Checking filter by product', async () => {
        await browser.url('/resources')
        await AdditionalScripts.acceptCookie();
        await ResourcesPage.filterBYMessaging();
        await expect(browser).toHaveUrlContaining(helperPage.URL.messaging);
        await ResourcesPage.filterBYVerifyAPI();
        await expect(browser).toHaveUrlContaining(helperPage.URL.api);
        await ResourcesPage.filterBYSIPTrunking();
        await expect(browser).toHaveUrlContaining(helperPage.URL.sip);
        await ResourcesPage.filterBYFax();
        await expect(browser).toHaveUrlContaining(helperPage.URL.fax);
        await ResourcesPage.filterBYWireless();
        await expect(browser).toHaveUrlContaining(helperPage.URL.wir);
        await browser.pause(1000)
    });
})

