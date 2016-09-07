// spec.js content e.g.
describe('SC EMR red flag panel', function() {
    it('able to load red flag panel @K.K', function() {
        browser.get('https://www.savantcare.com/internal/#/user/440');
        var getEmrTab = element(by.id('emrTabId_440')).click();
        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('rf');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        var redFlagPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Red Flags';
            });
        }).first();
        expect(redFlagPanelHeading.isPresent()).toBe(true);
    });
    /*it('able to add red flag from scBrain', function() {
        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('rf Patient is hard to deal with ');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        var firstRedFlagRow = element(by.id('redFlagDetailsRow_0'));
        browser.actions().mouseMove(firstRedFlagRow).perform();
        var deleteRedFlagButton = element(by.id('deleteRedFlagButton_0'));
        deleteRedFlagButton.click();
        expect(deleteRedFlagButton);
    });*/
    it('add a new red flag @K.K', function() {
        var redFlagPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Red Flags';
            });
        }).first();
        browser.actions().mouseMove(redFlagPanelHeading).perform();
        element(by.id('addRedFlagsData')).click();
        element(by.css('.redFlagTypeProtractorTest_0 a')).click();
        element(by.css('.redFlagTypeProtractorTest_0 input')).sendKeys('Testing by protracto').sendKeys(protractor.Key.ENTER);

        var firstRedFlagRow = element(by.id('redFlagDetailsRow_0'));
        browser.actions().mouseMove(firstRedFlagRow).perform();
        var lockRedFlagButton = element(by.id('lockRedFlagButton_0'));
        expect(lockRedFlagButton.isPresent()).toBe(true);
    });
    it('able to edit for red flag @K.K', function() {
        var firstRedFlagRow = element(by.id('redFlagDetailsRow_0'));
        browser.actions().mouseMove(firstRedFlagRow).perform();
        element(by.css('.redFlagTypeProtractorTest_0 a')).click();
        element(by.css('.redFlagTypeProtractorTest_0 input')).sendKeys('r').sendKeys(protractor.Key.ENTER);
        var updateFlagText = element(by.css('.redFlagTypeProtractorTest_0 a'));
        expect(updateFlagText.getText()).toEqual('Testing by protractor');
    });
    it('able to delete red flag @K.K', function() {
        var firstRedFlagRow = element(by.id('redFlagDetailsRow_0'));
        browser.actions().mouseMove(firstRedFlagRow).perform();
        var deleteRedFlagButton = element(by.id('deleteRedFlagButton_0'));
        deleteRedFlagButton.click();
        var confirmButton = element(by.css('.modal-body button.btn-success'));
        confirmButton.click();
        expect(deleteRedFlagButton);
    });


});
