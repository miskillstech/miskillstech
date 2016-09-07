// spec.js content e.g.
describe('SC EMR self harm panel', function() {
    it('able to load self harm panel @K.K', function() {
        browser.get('https://www.savantcare.com/internal/#/user/440');
        var getEmrTab = element(by.id('emrTabId_440')).click();
        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('sh');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        var selfHarmPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Self harm';
            });
        }).first();
        expect(selfHarmPanelHeading.isPresent()).toBe(true);
    });
    it('add a new self harm @K.K', function() {
        var selfHarmPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Self harm';
            });
        }).first();
        browser.actions().mouseMove(selfHarmPanelHeading).perform();
        element(by.id('addSelfHarmData')).click();
        element(by.css('.selfHarmTypeProtractorTest a')).click();
        element(by.css('.selfHarmTypeProtractorTest select')).click().sendKeys(protractor.Key.ARROW_DOWN).sendKeys(protractor.Key.ENTER);
        var firstSelfHarmRow = element(by.id('selfHarmDetailsRow_0'));
        browser.actions().mouseMove(firstSelfHarmRow).perform();
        var lockSelfHarmButton = element(by.id('lockSelfHarmButton_0'));
        expect(lockSelfHarmButton.isPresent()).toBe(true);
    });
    it('able to edit for self harm @K.K', function() {
        var firstSelfHarmRow = element(by.id('selfHarmDetailsRow_0'));
        browser.actions().mouseMove(firstSelfHarmRow).perform();
        element(by.css('.selfHarmDescriptionRow_0 a')).click();
        element(by.css('.selfHarmDescriptionRow_0 textarea')).sendKeys('edit by protractor');
        element(by.css('.selfHarmDescriptionRow_0 button')).click();
        var updateDescription = element(by.css('.selfHarmDescriptionRow_0 a'));
        expect(updateDescription.getText()).toEqual('edit by protractor');
    });
    it('able to delete self harm @K.K', function() {
        var firstSelfHarmRow = element(by.id('selfHarmDetailsRow_0'));
        browser.actions().mouseMove(firstSelfHarmRow).perform();
        var deleteSelfHarmButton = element(by.id('deleteSelfHarmButton_0'));
        deleteSelfHarmButton.click();
        var confirmButton = element(by.css('.modal-body button.btn-success'));
        confirmButton.click();
        expect(deleteSelfHarmButton);
    });
});
