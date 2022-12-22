import HomePage from '../pageobjects/home.page';
import HelperPage from "../../helper/helper";
import AdditionalScripts from '../pageobjects/additional.scripts';
const helperPage = new HelperPage();

describe('Home Page social links', () => { 
    it('Twitter for access and URL', async () => {
        await browser.url('/');
        await AdditionalScripts.acceptCookie();
        await HomePage.clickURLTwitter();
        await expect(browser).toHaveUrlContaining(helperPage.SocialLink.twitter);
    });
    it('Facebook for access and URL', async () => {
        await browser.url('/');
        await HomePage.clickURLFacebook();
        await expect(browser).toHaveUrlContaining(helperPage.SocialLink.facebook);
    });
    it('Linked for access and URL', async () => {
        await browser.url('/');
        await HomePage.clickURLLinkEd();
        await expect(browser).toHaveUrlContaining(helperPage.SocialLink.linkedIn);
    });
})

