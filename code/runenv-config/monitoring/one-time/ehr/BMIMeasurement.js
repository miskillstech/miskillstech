// spec.js content e.g.
describe('SC EMR Body Measurement panel', function() {
    it('able to load Body measurement panel @K.K', function() {
        browser.get('https://www.savantcare.com/internal/#/user/440');
        var getEmrTab = element(by.id('emrTabId_440')).click();
        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('bmi');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        var bmiBodyMeasurementPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Body measurement';
            });
        }).first();
        expect(bmiBodyMeasurementPanelHeading.isPresent()).toBe(true);
    });
    it('BMI Data in Body Measurement Not loaded Please check if anyone recently change api on it @KK', function() {

        element(by.id('addBMIData')).click();
        var weightListTable =  element(by.css('#allBMIListTbl thead'));
        expect(weightListTable.isPresent()).toBe(true);
    });
    it('add a new bmi @K.K', function() {
        element(by.id('closeBMIData')).click();
        var bmiMeasurementPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Body measurement';
            });
        }).first();
        browser.actions().mouseMove(bmiMeasurementPanelHeading).perform();
        var viewData = element(by.css('.bmiMeasurementIdForProtractorTestForView'));
        viewData.click();
        var addData = element(by.css('.bmiMeasurementIdForProtractorTestForAdd'));
        addData.click();
        var clickOnAnchor = element(by.css('.bmiValForProtractorTest_0 a'));
        clickOnAnchor.click();
        var addDataInInput = element(by.css('.bmiValForProtractorTest_0 input'));
        addDataInInput.clear().sendKeys('100').sendKeys(protractor.Key.ENTER);
        var lockBmiButton = element(by.css('.lockBmiButton_0'));
        expect(lockBmiButton.isPresent()).toBe(true);
    });
    it('able to edit bmi @K.K', function() {
        var clickOnAnchor = element(by.css('.bmiValForProtractorTest_0 a'));
        clickOnAnchor.click();
        var addDataInInput = element(by.css('.bmiValForProtractorTest_0 input'));
        addDataInInput.clear().sendKeys('150').sendKeys(protractor.Key.ENTER);
        var updateBmiVal = element(by.css('.bmiValForProtractorTest_0 a'));
        expect(updateBmiVal.getText()).toEqual('150.00');
    });
    it('able to delete bmi @K.K', function() {
        var firstBmiValRow = element(by.css('.forProtractorHoverOnBMI_0'));
        browser.actions().mouseMove(firstBmiValRow).perform();
        var deleteBmiButton = element(by.css('.deleteBmiButton_0'));
        deleteBmiButton.click();
        var confirmButton = element(by.css('.modal-body button.btn-success'));
        confirmButton.click();
        expect(deleteBmiButton);
    });
    it('Waist Data in Body Measurement Not loaded Please check if anyone recently change api on it @KK', function() {

        element(by.id('addWaistData')).click();
        var weightListTable =  element(by.css('#allWaistListTbl thead'));
        expect(weightListTable.isPresent()).toBe(true);
    });
    it('add a new waist circumference @K.K', function() {
        element(by.id('closeWaistData')).click();
        var waistCircumferenceMeasurementPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Body measurement';
            });
        }).first();
        browser.actions().mouseMove(waistCircumferenceMeasurementPanelHeading).perform();
        var viewData = element(by.css('.waistCircumferenceMeasurementIdForProtractorTestForView'));
        viewData.click();
        var addData = element(by.css('.waistCircumferenceMeasurementIdForProtractorTestForAdd'));
        addData.click();
        var clickOnAnchor = element(by.css('.waistCircumferenceValForProtractorTest_0 a'));
        clickOnAnchor.click();
        var addDataInInput = element(by.css('.waistCircumferenceValForProtractorTest_0 input'));
        addDataInInput.clear().sendKeys('100').sendKeys(protractor.Key.ENTER);
        var lockWaistCircumferenceButton = element(by.css('.lockWaistCircumferenceButton_0'));
        expect(lockWaistCircumferenceButton.isPresent()).toBe(true);
    });
    it('able to edit waist circumference @K.K', function() {
        var clickOnAnchor = element(by.css('.waistCircumferenceValForProtractorTest_0 a'));
        clickOnAnchor.click();
        var addDataInInput = element(by.css('.waistCircumferenceValForProtractorTest_0 input'));
        addDataInInput.clear().sendKeys('150').sendKeys(protractor.Key.ENTER);
        var updateWaistCircumferenceVal = element(by.css('.waistCircumferenceValForProtractorTest_0 a'));
        expect(updateWaistCircumferenceVal.getText()).toEqual('150.00');
    });
    it('able to delete waist circumference @K.K', function() {
        var firstWaistCircumferenceValRow = element(by.css('.forProtractorHoverOnWaist_0'));
        browser.actions().mouseMove(firstWaistCircumferenceValRow).perform();
        var deleteWaistCircumferenceButton = element(by.css('.deleteWaistCircumferenceButton_0'));
        deleteWaistCircumferenceButton.click();
        var confirmButton = element(by.css('.modal-body button.btn-success'));
        confirmButton.click();
        expect(deleteWaistCircumferenceButton);
    });
    it('Blood Sugar Data in Body Measurement Not loaded Please check if anyone recently change api on it @KK', function() {

        element(by.id('addBloodSugarData')).click();
        var weightListTable =  element(by.css('#allBloodSugarListTbl thead'));
        expect(weightListTable.isPresent()).toBe(true);
    });
    it('add a new blood sugar measurement @K.K', function() {
        element(by.id('closeBloodSugarData')).click();
        var bloodSugarMeasurementPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Body measurement';
            });
        }).first();
        browser.actions().mouseMove(bloodSugarMeasurementPanelHeading).perform();
        element(by.css('.bloodSugarMeasurementIdForProtractorTestForView')).click();
        element(by.css('.bloodSugarMeasurementIdForProtractorTestForAdd')).click();
        element(by.css('.bloodSugarValForProtractorTest_0 a')).click();
        element(by.css('.bloodSugarValForProtractorTest_0 input')).clear().sendKeys('100').sendKeys(protractor.Key.ENTER);
        var lockBloodSugarButton = element(by.css('.lockBloodSugarButton_0'));
        expect(lockBloodSugarButton.isPresent()).toBe(true);
    });
    it('able to edit blood sugar measurement @K.K', function() {
        element(by.css('.bloodSugarValForProtractorTest_0 a')).click();
        element(by.css('.bloodSugarValForProtractorTest_0 input')).clear().sendKeys('150').sendKeys(protractor.Key.ENTER);
        var updateBloodSugarVal = element(by.css('.bloodSugarValForProtractorTest_0 a'));
        expect(updateBloodSugarVal.getText()).toEqual('150.00');
    });
    it('able to delete blood sugar measurement @K.K', function() {
        var firstBloodSugarValRow = element(by.css('.forProtractorHoverOnBloodSugar_0'));
        browser.actions().mouseMove(firstBloodSugarValRow).perform();
        var deleteBloodSugarButton = element(by.css('.deleteBloodSugarButton_0'));
        deleteBloodSugarButton.click();
        var confirmButton = element(by.css('.modal-body button.btn-success'));
        confirmButton.click();
        expect(deleteBloodSugarButton);
    });


});
