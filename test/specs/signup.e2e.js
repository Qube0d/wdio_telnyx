import SignUpPage from "../pageobjects/signup.page.js";
import AdditionalScripts from "../pageobjects/additional.scripts.js";
import HelperPage from "../../helper/helper.js";



describe('Checking SignUp page', () => {
    it('Checking signup form with wrong credentials', async () => {
        await browser.url('/sign-up');
        await AdditionalScripts.acceptCookie();
        await SignUpPage.fillAll({ email: "11", name: "223", pass: "4qada" });
        await expect(SignUpPage.passCamCase).toHaveText(HelperPage.passReq.passCamel)
    });
});
