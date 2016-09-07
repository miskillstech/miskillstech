// spec.js content e.g.
describe('SC EMR payer panel', function() {
    it('able to load payer panel from scBrain internal @M.K', function() {
        browser.get('https://www.savantcare.com/internal/#/user/440');
        var getEmrTab = element(by.id('emrTabId_440')).click();
        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('payer');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        var payerPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Payer';
            });
        }).first();
        expect(payerPanelHeading.isPresent()).toBe(true);
    });
    it('add a new payer @M.K', function() {
        var payerPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Payer';
            });
        }).first();

        browser.actions().mouseMove(payerPanelHeading).perform();
        element(by.id('addpayerdata')).click();

        element(by.id('payerName_0')).click();
        element(by.css('.payerNameClassInput_0')).sendKeys('Testing by protractor').sendKeys(protractor.Key.ENTER);
        var firstPayerRow = element(by.id('payerDetailsRow_0'));
        browser.actions().mouseMove(firstPayerRow).perform();
        var lockPayerButton = element(by.id('lockPayerButton_0'));
        expect(lockPayerButton.isPresent()).toBe(true);
    });
    it('able to edit for payer @M.K', function() {
        var firstPayerRow = element(by.id('payerDetailsRow_0'));
        browser.actions().mouseMove(firstPayerRow).perform();
        var getTupeField = element(by.id('payerType_0'));
        getTupeField.click();
        var update = element(by.css('.payerTypeInputClass_0')).click().sendKeys(protractor.Key.ARROW_DOWN).sendKeys(protractor.Key.ENTER);
        expect(update);
    });
    it('able to delete payer @M.K', function() {
        var firstPayerRow = element(by.id('payerDetailsRow_0'));
        browser.actions().mouseMove(firstPayerRow).perform();
        var deletePayerButton = element(by.id('deletePayerButton_0'));
        deletePayerButton.click();
        var confirmButton = element(by.css('.modal-body button'));
        confirmButton.click();
        expect(deletePayerButton);
    });
});
