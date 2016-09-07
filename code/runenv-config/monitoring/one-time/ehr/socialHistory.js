// spec.js content e.g.
describe('SC EMR socialHistory panel', function() {
    it('able to load socialHistory panel @Arjun Kumar', function() {
        browser.get('https://www.savantcare.com/internal/#/user/440');
        var getEmrTab = element(by.id('emrTabId_440')).click();
        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('shx');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        var socialHistoryPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Social history';
            });
        }).first();
        expect(socialHistoryPanelHeading.isPresent()).toBe(true);
    });


    it('add a new social history @Arjun Kumar', function() {

        element.all(by.css('.classSocialHistory div #history_8 .trigger')).click();
        element.all(by.css('.classSocialHistory div #addMaritalData')).click();
        element.all(by.css('.classSocialHistory div #Marital_0 form input')).sendKeys('Testing by protractor').sendKeys(protractor.Key.ENTER);
        element.all(by.css('.classSocialHistory div #MaritalWhen_0 a')).click();
            //browser.sleep(3000);
        element.all(by.css('.classSocialHistory div #MaritalWhen_0 form input')).sendKeys('yesterday').sendKeys(protractor.Key.ENTER);

        var linkBtn = element(by.css('.classSocialHistory div .maritalData_0 .firstMaritalDataDiv #linkBtnForMaritalData .glyphicon-link'));
        expect(linkBtn.isPresent()).toBe(true);

    });

    it('edit a new social history @Arjun Kumar', function() {

        element.all(by.css('.classSocialHistory div #MaritalWhen_0 a')).click();
        element.all(by.css('.classSocialHistory div #MaritalWhen_0 form input')).clear();
        element.all(by.css('.classSocialHistory div #MaritalWhen_0 form input')).sendKeys('today').sendKeys(protractor.Key.ENTER);
        var maritalWhen = element.all(by.css('.classSocialHistory div #MaritalWhen_0 a'));
        //expect(maritalWhen.getText()).toBe('today');
        expect(maritalWhen.getText());

    });


    it('delete a new social history @Arjun Kumar', function() {

        element.all(by.css('.classSocialHistory div .maritalData_0 .firstMaritalDataDiv #linkBtnForMaritalData .glyphicon-trash')).click();
        element.all(by.css('.modal-body #submitbtn')).click();

        //expect(linkBtn.isPresent()).toBe(true);

    });




});
