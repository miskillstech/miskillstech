// spec.js content e.g.
describe('SC EMR Official Letters panel @ SM', function() {
    it('able to load Official Letters panel @ SM', function() {
        browser.get('https://www.savantcare.com/internal/#/user/440');
        var getEmrTab = element(by.id('emrTabId_440')).click();
        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('official letters');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        var officialLettersPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Official letters';
            });
        }).first();
        expect(officialLettersPanelHeading.isPresent()).toBe(true);
    });

    it('add a new Official Letters panel @ SM', function() {
        var officialLettersPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Official letters';
            });
        }).first();

        browser.actions().mouseMove(officialLettersPanelHeading).perform();
        element(by.id('addOfficialLetters')).click();
        var firstOfficialLettersRow = element(by.id('addOfficialLetters_0'));
        browser.actions().mouseMove(firstOfficialLettersRow).perform();
        element(by.css('#officialLettersDescription_0')).click();
        element(by.css('#addOfficialLetters_0 td .editable-controls select')).click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        var addOfficialLetter = browser.actions().sendKeys(protractor.Key.ENTER).perform();
        expect(addOfficialLetter);
    });

    it('Edit Official Letters panel @ SM', function() {
        var firstOfficialLettersRow = element(by.id('addOfficialLetters_0'));
        browser.actions().mouseMove(firstOfficialLettersRow).perform();
        element(by.css('#officialLettersDescription_0')).click();
        element(by.css('#addOfficialLetters_0 td .editable-controls select')).click();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        var editOfficialLetter = browser.actions().sendKeys(protractor.Key.ENTER).perform();
        expect(editOfficialLetter);
    });
    it('Delete Official Letters panel @ SM', function() {
        var firstOfficialLettersRow = element(by.id('addOfficialLetters_0'));
        browser.actions().mouseMove(firstOfficialLettersRow).perform();
        var deleteFirstOfficialLettersRow = firstOfficialLettersRow.element(by.id('remove-official-letters-row'));
        deleteFirstOfficialLettersRow.click();
        var confirmButton = element(by.css('.modal-body button.btn-success'));
        confirmButton.click();
        expect(deleteFirstOfficialLettersRow);
    });
});