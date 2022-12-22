import SignUpPage from '../pageobjects/signup.page'
import HelperPage from '../../helper/helper'
import AdditionalScripts from '../pageobjects/additional.scripts'
const helperPage = new HelperPage();


describe('Checking SignUp page', () => {
    it('Checking signup form with wrong credentials', async () => {
        await browser.url('/sign-up');
        await AdditionalScripts.acceptCookie();
        await SignUpPage.fillAll({ email: "11", name: "223", pass: "4qada" });
        await expect(SignUpPage.passCamCase).toHaveText(helperPage.passReq.passCamel)
    });
});
