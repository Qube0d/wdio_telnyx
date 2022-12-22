class AboutPage{


    get officeUrlChicago() {
        return $("//a[@href='https://goo.gl/maps/Gse6uEqJa8NVXy2v5']")
        //div[class='sc-388f5438-5 dNOlSE']>div>div>p:nth-child(3)>a:first-of-type
        //a[contains(text(),'Locate on Google Maps')]
        //div[class="sc-388f5438-5 dNOlSE"]>div>div>p:nth-child(3)
        ////a[@href='https://goo.gl/maps/Gse6uEqJa8NVXy2v5']
    }


    async googleMapChicago() {
        await this.officeUrlChicago.click();
        await browser.pause(3000);
        await browser.switchWindow('www.google.com/maps/place/')
    }



    get locateChicago() {
        return $("//a[@href='https://goo.gl/maps/Gse6uEqJa8NVXy2v5']")
    }  
    get locateDublin() {
        return $("//a[@title='Telnyx Dublin Office']")
    }
    get locateWarsawa() {
        return $("p a[title='Telnyx Warsaw Office']")
    }

    get locateSãoPaulo() {
        return $("p a[title='Telnyx São Paolo Office']")
    }

    get locateAmsterdam() {
        return $("a[href='https://www.google.com/maps/place/Keizersgracht+221,+1016+DV+Amsterdam,+Netherlands/@52.3728035,4.8832875,17z/data=!3m1!4b1!4m5!3m4!1s0x47c609c487250cfd:0x5a97225b97b7a18a!8m2!3d52.3728035!4d4.8854762']")
    }

    get locateDenver() {
        return $("a[href='https://www.google.com/maps/place/WeWork+Office+Space+%26+Coworking/@39.7526867,-105.0043597,17z/data=!3m1!4b1!4m5!3m4!1s0x876c78c3e73790f1:0xe7febee689f48aa4!8m2!3d39.7524434!4d-105.0024793']")
    }


    get googleChicagoLoc() {
        return $("//div[contains(text(),'515 N State St, Chicago, IL 60654, Соединенные Штаты')]")
    }

    get googleDublinLoc() {
        return $("//div[contains(text(),'Waterways House, 6th Floor, Grand Canal Quay, Dublin, D02 PD39, Ireland')]")
    }

    get googleWarsawaLoc() {
        return $("//span[contains(text(),'Krucza 50, 00-024 Warszawa, Польша')]")
    }

    get googleSãoPauloLoc() {
        return $("//span[contains(text(),'Av. Paulista, 2028 - Bela Vista, São Paulo - SP, 01310-200, Бразилия')]")
    }

    get googleAmsterdamLoc() {
        return $("//span[contains(text(),'Keizersgracht 221, 1016 DV Amsterdam, Нидерланды')]")
    }
    get googleDenverLoc() {
        return $("//div[contains(text(),'1550 Wewatta St, Denver, CO 80202, Соединенные Штаты')]")
    }

    async googleDublin() {

        await this.locateDublin.click();
        await browser.pause(3000);
        await browser.switchWindow("www.google.com/maps/")
    }

    async googleWarsawa() {
        await this.locateWarsawa.click();
        await browser.pause(3000);
        await browser.switchWindow("google.com/maps/")
    }

    async googleSãoPaulo() {

        await this.locateSãoPaulo.click();
        await browser.pause(3000);
        await browser.switchWindow("www.google.com/maps/")
    }


    async googleAmsterdam() {

        await this.locateAmsterdam.click();
        await browser.pause(3000);
        await browser.switchWindow("www.google.com/maps/")
    }

    async googleDenver() {

        await this.locateDenver.click();
        await browser.pause(3000);
        await browser.switchWindow("www.google.com/maps/")
    }
}

export default new AboutPage();

//module.exports = new AboutPage();