// spec.js content e.g.
describe('SC EMR Body Measurement panel', function() {
    it('able to load Body measurement panel @K.K', function() {
        browser.get('https://www.savantcare.com/internal/#/user/440');
        var getEmrTab = element(by.id('emrTabId_440')).click();
        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('w');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        var weightBodyMeasurementPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Body measurement';
            });
        }).first();
        expect(weightBodyMeasurementPanelHeading.isPresent()).toBe(true);
    });
    it('Weight Data in Body Measurement Not loaded Please check if anyone recently change api on it @KK', function() {

        element(by.id('addWeightData')).click();
        var weightListTable =  element(by.css('#allWeightListTbl thead'));
        expect(weightListTable.isPresent()).toBe(true);
    });
    it('add a new weight @K.K', function() {
        element(by.id('closeWeightData')).click();
        var weightMeasurementPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Body measurement';
            });
        }).first();
        browser.actions().mouseMove(weightMeasurementPanelHeading).perform();
        var viewElemet = element(by.css('.weightMeasurementIdForProtractorTestForView'));
        viewElemet.click();
        var addElemet = element(by.css('.weightMeasurementIdForProtractorTestForAdd'));
        addElemet.click();
        var clickOnAnchor = element(by.css('.weightValForProtractorTest_0 a'));
        clickOnAnchor.click();
        var dataAdded = element(by.css('.weightValForProtractorTest_0 input'));
        dataAdded.clear().sendKeys('100').sendKeys(protractor.Key.ENTER);
        var lockWeightButton = element(by.css('.lockWeightButton_0'));
        expect(lockWeightButton.isPresent()).toBe(true);
    });
    it('able to edit weight @K.K', function() {
        var weightEdit = element(by.css('.weightValForProtractorTest_0 a'));
        weightEdit.click();
        var addData = element(by.css('.weightValForProtractorTest_0 input'));
        addData.clear().sendKeys('150').sendKeys(protractor.Key.ENTER);
        var updateWeightVal = element(by.css('.weightValForProtractorTest_0 a'));
        expect(updateWeightVal.getText()).toEqual('150.00');
    });
    it('able to delete weight @K.K', function() {
        var firstWeightValRow = element(by.css('.forProtractorHoverOnWeight_0'));
        browser.actions().mouseMove(firstWeightValRow).perform();
        var deleteWeightButton = element(by.css('.deleteWeightButton_0'));
        deleteWeightButton.click();
        var confirmButton = element(by.css('.modal-body button.btn-success'));
        confirmButton.click();
        expect(deleteWeightButton);
    });


});
