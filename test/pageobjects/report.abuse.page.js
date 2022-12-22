
class ReportAbusePage {


    get submitBtn() {
        return $("[type='submit']")
    }

    get subj() {
        return $("[style='position:relative']>div>input[type='text'][placeholder='What are you reporting?']")
    }

    get phoneNumAbus() {
        return $("[style = 'position:relative']> div > input[type = 'tel'][placeholder = 'Number causing the abuse']")
    }

    get phoneNumRecAbus() {
        return $("[style = 'position:relative'] > div > input[type = 'tel'][placeholder = 'Number receiving abuse']")
    }

    get dateTimeOfAbuse() {
        return $("input[type='text'][placeholder='MM/DD/YYYY HH:MM AM']")
    }

    get voiceCheckBox() {
        return $("div[class='sc-df3e57b4-4 gqBPrs']>[style='position:relative']>div>svg>rect:first-of-type")
        //return $("input[type='checkbox'][id='serviceAbusedVoice']")
    }

    get smsCheckBox() {
        return $("div[class='sc-df3e57b4-4 gqBPrs']>[style='position:relative']>div>svg>rect:last-child")
        //return $("input[type='checkbox'][id='serviceAbusedSms']")
    }
        
    get fullNameOpt() {
        return $("input[label='Full Name (optional)']")
    }


    get emailOpt() {
        return $("input[label='Email (optional)']")
    }

    async formAbuseNew({ subj, phoneAbuse, phoneAbuseRec, name, email }) {
        if (subj) {
            await this.subj.addValue(subj); 
        }
        if (phoneAbuse) {
            await this.phoneNumAbus.addValue(phoneAbuse)
        }
        if (phoneAbuseRec) {
            await this.phoneNumRecAbus.addValue(phoneAbuseRec);
        }
        if (name) {
            await this.fullNameOpt.addValue(name);
        }
        if (email) {
            await this.emailOpt.addValue(email);
        }
        await this.voiceCheckBox.click();
        await this.smsCheckBox.click();
    }
    
    async calendar() {
        await this.dateTimeOfAbuse.click();
        await this.dateTimeOfAbuse.clearValue()
        await this.dateTimeOfAbuse.addValue(calend)
    }
    
}

export default new ReportAbusePage();

//module.exports = new ReportAbusePage();