import CareersPage from "../pageobjects/careers.page.js";
import AdditionalScripts from "../pageobjects/additional.scripts.js";
import HelperPage from '../../helper/helper.js';
//const helperPage = new HelperPage();
// import CareersPage from '../pageobjects/careers.page';
// import AdditionalScripts from "../pageobjects/additional.scripts";
// import HelperPage from "../../helper/helper";
// const helperPage = new HelperPage();



describe('Careers page', () => {
    it('Check label of text and video player', async () => {
        await browser.url('/company/careers');
        await AdditionalScripts.acceptCookie();
        await CareersPage.iframeCheck();
        await CareersPage.labelTitle();
        await expect(CareersPage.flexibleGlobalTeamLabelTitle).toHaveText(HelperPage.CareersTitle.firstLabel);
        await expect(CareersPage.ModernlifeLabelTitle).toHaveText(HelperPage.CareersTitle.secondLabel);
        await expect(CareersPage.helpingYouGrowLabelTitle).toHaveText(HelperPage.CareersTitle.thirdLabel);
        await expect(CareersPage.weHaveFunTooLabelTitle).toHaveText(HelperPage.CareersTitle.fourLabel);
    });
}); 

