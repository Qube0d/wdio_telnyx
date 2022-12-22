
class SignUpPage {

    get emailInputField() {
        return $("[id='email']")
    }

    get fullNameInputField() {
        return $("[id='full_name']")
    }

    get passwordInputField() {
        return $("[id='password']")
    }

    get createAccountButton() {
        return $("[type='submit']")
    }

    //Err alert

    get emailErrore() {
        return $("[id='email_error']")
    }

    get fullNameReq() {
        return $("[id='full_name_error']")
    }

    get passRequirment() {
        return $("[id='password_requirements']")
    }

    get passLong() {
        return $("//div[contains(text(),'Be at least 12 characters long')]")
    }
    get passNumber() {
        return $("//div[contains(text(),'Contain at least one number')]")
    }
    get passSymbol() {
        return $("//div[contains(text(),'Contain at least one symbol')]")
    }
    get passCamCase() {
        return $("//div[contains(text(),'Contain at least one upper-case letter')]")
    }

    async fillAll({ email, name, pass }) {
        if (email) {
            await this.emailInputField.addValue(email); 
        }
        if (name) {
            await this.fullNameInputField.addValue(name)
        }
        if (pass) {
            await this.passwordInputField.addValue(pass);
        }
    }
    async signUp() {
        await browser.url('/sign-up')
        await browser.setWindowSize(1940, 1080);
    }
}

export default new SignUpPage();

//module.exports = new SignUpPage();

