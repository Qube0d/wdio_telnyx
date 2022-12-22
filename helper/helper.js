class HelperPage {

    constructor(help) {
        this.help = help;
        this.address = {
            Chicago: "515 N State St, Chicago, IL 60654, Соединенные Штаты",
            Dublin: "Waterways House, 6th Floor, Grand Canal Quay, Dublin, D02 PD39, Ireland",
            Warsawa: "Krucza 50, 00-024 Warszawa, Польша",
            SãoPaulo: "Av. Paulista, 2028 - Bela Vista, São Paulo - SP, 01310-200, Бразилия",
            Amsterdam: "Keizersgracht 221, 1016 DV Amsterdam, Нидерланды",
            Denver: "1550 Wewatta St, Denver, CO 80202, Соединенные Штаты"
        };
        this.validatorSignUp = {
            invalidEmailAddress: "Please enter a valid email address.",
            emailFieldReq: "This field is required.",
            fullNameReq: "This field is required.",
            passLong: "Be at least 12 characters long",
            passContNum: "Contain at least one number",
            passConSym: "Contain at least one symbol",
            passCamel: "Contain at least one upper-case letter",
        };
        //Checking login with wrong credentials (pass)
        this.passReq = {
            passLong: "Be at least 12 characters long",
            passContNum: "Contain at least one number",
            passConSym: "Contain at least one symbol",
            passCamel: "Contain at least one upper-case letter",
        };
        //Checking filter URL by product
        this.URL = {
            messaging: "topic=Messaging",
            api: "topic=Verify%20API",
            sip: "topic=SIP%20Trunking",
            fax: "topic=Fax",
            wir: "topic=Wireless"
        };
        //Report abuse page cheking form
        this.calend = {
            Whatareyoureporting: "Spam from tel",
            Numbercausingtheabuse: "+38000999888123",
            Numberreceivingabuse: "+312300999888123",
            FullNameOPT: "John Doe",
            emailOPT: "testqa@gmail.com"
        }
        //Home Page social links//
        this.SocialLink = {
            twitter: "twitter.com/telnyx",
            facebook: "facebook.com/Telnyx/",
            linkedIn: ".linkedin.com"
        }
        //Data Privacy page
        this.title = {
            product: "Telnyx Product Updates",
            faq: "GDPR Frequently Asked Questions",
            compliance: "Compliance",
            TransferImpactAssessment: "Data Transfer Impact Assessment"
        }
        this.titleURL = {
            product: "data-privacy#productupdates",
            faq: "data-privacy#faq",
            compliance: "data-privacy#compliance",
            TransferImpactAssessment: "data-privacy#dtia"
        }
        //Careers page
        this.CareersTitle = {
            firstLabel: "Flexible, global team",
            secondLabel: "Modern life, modern space",
            thirdLabel: "Helping you grow",
            fourLabel: "We have fun too!"
        }
        //URLS page
        this.URLPage = {
            browserAbout: "/about",
            browserCareers: "/"
        }
        //Cookie Window
        this.cookieWindow = {
            async acceptCookie() {
                if ( this.acceptCookieModalWindow.isClickable()) {
                    await this.acceptCookieModalWindow.click();
                    
                }
                else {
                    await browser.waitUntil({ timeout: 500 })
                }
            }
        }
    }
}

export default new HelperPage;

//module.exports = HelperPage;

