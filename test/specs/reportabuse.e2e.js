import AdditionalScripts from "../pageobjects/additional.scripts";
import ReportAbusePage from '../pageobjects/report.abuse.page';
import HelperPage from "../../helper/helper";
const helperPage = new HelperPage();

describe('Report abuse page cheking form', () => {
        it('Testing form for positive result', async () => {
        await browser.url('/report-abuse');
        await AdditionalScripts.acceptCookie();
        await ReportAbusePage.formAbuseNew({
            subj: helperPage.calend.Whatareyoureporting,
            phoneAbuse: helperPage.calend.Numbercausingtheabuse,
            phoneAbuseRec: helperPage.calend.Numberreceivingabuse,
            name: helperPage.calend.FullNameOPT,
            email: helperPage.calend.emailOPT
            });
        await ReportAbusePage.submitBtn.click();
        await browser.pause(1000);
    });
});





