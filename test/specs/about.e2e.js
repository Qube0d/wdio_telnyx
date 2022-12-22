import AboutPage from "../pageobjects/about.page.js";
import AdditionalScripts from "../pageobjects/additional.scripts.js";
import HelperPage from "../../helper/helper.js";



describe('About page', () => {
    it('Check address of office Dublin on google map', async () => {
        await browser.url('/company/about');
        await AdditionalScripts.acceptCookie();
        await AboutPage.googleDublin();
        await expect(AboutPage.googleDublinLoc).toHaveText(HelperPage.address.Dublin)
    });
})

