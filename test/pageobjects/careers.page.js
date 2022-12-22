class CareersPage{
    get iframe() {
    //return $("div[id='player']")
    return $("[src='https://player.vimeo.com/video/459002412?byline=false&title=false&portrait=false&autoplay=1&background=1&mute=1&loop=1']")
}

get flexibleGlobalTeamLabelTitle() {
        return $("//h3[contains(text(),'Flexible, global team')]")
    }

get ModernlifeLabelTitle() {
    return $("//h3[contains(text(),'Modern life, modern space')]")
}

get helpingYouGrowLabelTitle() {
    return $("//h3[contains(text(),'Helping you grow')]")
}
    
get weHaveFunTooLabelTitle() {
    return $("//h3[contains(text(),'We have fun too!')]")
}   
async labelTitle() {
    await this.flexibleGlobalTeamLabelTitle.getText();
    await this.ModernlifeLabelTitle.getText();
    await this.helpingYouGrowLabelTitle.getText();
    await this.weHaveFunTooLabelTitle.getText();
} 
async iframeCheck() {
    await this.iframe.isExisting();
    await this.iframe.scrollIntoView();
}
}

export default new CareersPage();

//module.exports = new CareersPage();