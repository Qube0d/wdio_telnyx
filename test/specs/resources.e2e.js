import ResourcesPage from "../pageobjects/resources.page.js";
import AdditionalScripts from "../pageobjects/additional.scripts.js";
import HelperPage from "../../helper/helper.js";



describe('Check resources page filter', () => {
    it('Checking filter by product', async () => {
        await browser.url('/resources')
        await AdditionalScripts.acceptCookie();
        await ResourcesPage.filterBYMessaging();
        await expect(browser).toHaveUrlContaining(HelperPage.URL.messaging);
        await ResourcesPage.filterBYVerifyAPI();
        await expect(browser).toHaveUrlContaining(HelperPage.URL.api);
        await ResourcesPage.filterBYSIPTrunking();
        await expect(browser).toHaveUrlContaining(HelperPage.URL.sip);
        await ResourcesPage.filterBYFax();
        await expect(browser).toHaveUrlContaining(HelperPage.URL.fax);
        await ResourcesPage.filterBYWireless();
        await expect(browser).toHaveUrlContaining(HelperPage.URL.wir);
        await browser.pause(1000)
    });
})

