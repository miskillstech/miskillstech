// spec.js content e.g.
describe('SC EMR medication panel', function() {
    it('able to load medication panel @Arjun Kumar', function() {
        browser.get('https://www.savantcare.com/internal/#/user/440');
        var getEmrTab = element(by.id('emrTabId_440')).click();
        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('meds');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        var medicationPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Medications';
            });
        }).first();
        expect(medicationPanelHeading.isPresent()).toBe(true);
    });


    it('medicine list load first time from server @Arjun Kumar', function() {

        var medicineListTable =  element(by.css('#allMedicineListTbl thead'));
        expect(medicineListTable.isPresent()).toBe(true);
    });

    it('add a new medication @Arjun Kumar', function() {
        var medicationPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Medications';
            });
        }).first();
        browser.actions().mouseMove(medicationPanelHeading).perform(); 
        element(by.id('addMedicationsData')).click();

        element(by.css('.medicationDetailsTbody_0 .medicationDetailsRow_0 .medNameClass_0 input')).sendKeys('ProtractorTestMed').sendKeys(protractor.Key.ENTER);

        var firstMedicationRow = element(by.css('.medicationDetailsTbody_0 .medicationDetailsRow_0'));
        browser.actions().mouseMove(firstMedicationRow).perform();

        var deleteMedicineButton = element(by.css('.medicationDetailsTbody_0 .medicationDetailsRow_0 .deleteMedicationButton_0'));
        expect(deleteMedicineButton.isPresent()).toBe(true);
    });

    it('edit medication @Arjun Kumar', function() {

     var firstMedicationRow = element(by.css('.medicationDetailsTbody_0 .medicationDetailsRow_0'));
     browser.actions().mouseMove(firstMedicationRow).perform();

     var editMedicineStrength = element(by.css('.medicationDetailsTbody_0 .medicationDetailsRow_0 .medStrengthClassEditableTag_0'));
        editMedicineStrength.click();

     element(by.css('.medicationDetailsTbody_0 .medicationDetailsRow_0 .medStrengthClassSelectBox_0 input')).sendKeys('10 mg').sendKeys(protractor.Key.ENTER);

     expect(editMedicineStrength.getText()).toEqual('10 mg');

     });

    it('able to delete medication @Arjun Kumar', function() {
        var firstMedicationRow = element(by.css('.medicationDetailsTbody_0 .medicationDetailsRow_0'));
        browser.actions().mouseMove(firstMedicationRow).perform();
        var deleteMedicationButton = element(by.css('.medicationDetailsTbody_0 .medicationDetailsRow_0 .deleteMedicationButton_0'));
        deleteMedicationButton.click();
        var confirmButton = element(by.css('.modal-body .confirmBoxTest .confirmClickMedIdAvailable'));
        browser.sleep(2000);
        confirmButton.click();
        browser.sleep(1000);
        expect(deleteMedicationButton);
    });

});
