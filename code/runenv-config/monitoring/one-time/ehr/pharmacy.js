// spec.js content e.g.
describe('SC EMR pharmacy panel', function() {
    it('able to load pharmacy panel @Arjun Kumar', function() {
        browser.get('https://www.savantcare.com/internal/#/user/440');
        var getEmrTab = element(by.id('emrTabId_440')).click();
        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('ph');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        var pharmacyPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Pharmacy';
            });
        }).first();
        expect(pharmacyPanelHeading.isPresent()).toBe(true);
    });


     it('add new pharmacy @Arjun Kumar', function() {
     var pharmacyPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
     return elem.getText().then(function(text) {
     return text === 'Pharmacy';
     });
     }).first();
     browser.actions().mouseMove(pharmacyPanelHeading).perform();
     element(by.css('.addPharmacyBtn')).click();

     var lastPharmacyRow = element.all(by.css('.editableDetailContainer .pharmacyListCls')).last();
     var pharmacyName = lastPharmacyRow.element(by.css('.phNameClass .input-group .phNameEditable')).click();
     var addedInputPharmacyName = lastPharmacyRow.element(by.css('.phNameClass .input-group form input')).sendKeys('PharmacyName by Protractor').sendKeys(protractor.Key.ENTER);
     var pharmacyNameAdded = lastPharmacyRow.element(by.css('.phNameClass .input-group .phNameEditable')).getText();

     expect(pharmacyNameAdded).toEqual('PharmacyName by Protractor');

     });

    it('edit in pharmacy @Arjun Kumar', function() {

        var lastPharmacyRow = element.all(by.css('.editableDetailContainer .pharmacyListCls')).last();
        var pharmacyName = lastPharmacyRow.element(by.css('.phNameClass .input-group .phNameEditable')).click();

        lastPharmacyRow.element(by.css('.phNameClass .input-group form input')).clear();

        var editedInputPharmacyName = lastPharmacyRow.element(by.css('.phNameClass .input-group form input')).sendKeys('PharmacyName edit by Protractor').sendKeys(protractor.Key.ENTER);
        var pharmacyNameEdited = lastPharmacyRow.element(by.css('.phNameClass .input-group .phNameEditable')).getText();

        expect(pharmacyNameEdited).toEqual('PharmacyName edit by Protractor');

    });

    it('delete in pharmacy @Arjun Kumar', function() {

        var lastPharmacyRow = element.all(by.css('.editableDetailContainer .pharmacyListCls')).last();
        var pharmacyDeleteBtn = lastPharmacyRow.element(by.css('.phChangeClass .phDeleteBtn button')).click();
        expect(pharmacyDeleteBtn);

    });


});
