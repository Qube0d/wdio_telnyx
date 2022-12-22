
import AboutPage from "../pageobjects/about.page";
import AdditionalScripts from "../pageobjects/additional.scripts";
import HelperPage from "../../helper/helper";
const helperPage = new HelperPage();


describe('About page', () => {
    // it('Check address of office Chicago on google map', async () => {
    //     await browser.url('/company/about');
    //     await AdditionalScripts.acceptCookie();
    //     await AboutPage.googleMapChicago();
    //     await expect(AboutPage.googleChicagoLoc).toHaveText(helperPage.address.Chicago)
    // });
    it('Check address of office Dublin on google map', async () => {
        await browser.url('/company/about');
        await AdditionalScripts.acceptCookie();
        await AboutPage.googleDublin();
        await expect(AboutPage.googleDublinLoc).toHaveText(helperPage.address.Dublin)
    });
    // it('Check address of office Warsawa on google map', async () => {
    //     await browser.url('/company/about');
    //     await AboutPage.googleWarsawa();
    //     await expect(AboutPage.googleWarsawaLoc).toHaveText(helperPage.address.Warsawa)
    // });
    // it('Check address of office SãoPaulo on google map', async () => {
    //     await AboutPage.googleSãoPaulo();
    //     await expect(AboutPage.googleSãoPauloLoc).toHaveText(helperPage.address.SãoPaulo)
    // });
    // it('Check address of office Amsterdam on google map', async () => {
    //     await AboutPage.googleAmsterdam();
    //     await expect(AboutPage.googleAmsterdamLoc).toHaveText(helperPage.address.Amsterdam);
    // });
    // it('Check address of office Denver on google map', async () => {
    //     await AboutPage.googleDenver();
    //     await expect(AboutPage.googleDenverLoc).toHaveText(helperPage.address.Denver);
    // });
})

