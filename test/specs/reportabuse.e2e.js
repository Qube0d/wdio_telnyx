import ReportAbusePage from "../pageobjects/report.abuse.page.js";
import AdditionalScripts from "../pageobjects/additional.scripts.js";
import HelperPage from "../../helper/helper.js";


describe('Report abuse page cheking form', () => {
        it('Testing form for positive result', async () => {
        await browser.url('/report-abuse');
        await AdditionalScripts.acceptCookie();
        await ReportAbusePage.formAbuseNew({
            subj: HelperPage.calend.Whatareyoureporting,
            phoneAbuse: HelperPage.calend.Numbercausingtheabuse,
            phoneAbuseRec: HelperPage.calend.Numberreceivingabuse,
            name: HelperPage.calend.FullNameOPT,
            email: HelperPage.calend.emailOPT
            });
        await ReportAbusePage.submitBtn.click();
        await browser.pause(1000);
    });
});





