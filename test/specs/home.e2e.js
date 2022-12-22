import HomePage from "../pageobjects/home.page.js";
import HelperPage from "../../helper/helper.js";
import AdditionalScripts from "../pageobjects/additional.scripts.js";


describe('Home Page social links', () => { 
    it('Twitter for access and URL', async () => {
        await browser.url('/');
        await AdditionalScripts.acceptCookie();
        await HomePage.clickURLTwitter();
        await expect(browser).toHaveUrlContaining(HelperPage.SocialLink.twitter);
    });
    it('Facebook for access and URL', async () => {
        await browser.url('/');
        await HomePage.clickURLFacebook();
        await expect(browser).toHaveUrlContaining(HelperPage.SocialLink.facebook);
    });
    it('Linked for access and URL', async () => {
        await browser.url('/');
        await HomePage.clickURLLinkEd();
        await expect(browser).toHaveUrlContaining(HelperPage.SocialLink.linkedIn);
    });
})

