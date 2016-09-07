// spec.js content e.g.
describe('SC EMR contacts panel', function() {
    it('able to load contacts panel from scBrain internal @M.K', function() {
        browser.get('https://www.savantcare.com/internal/#/user/440');
        var getEmrTab = element(by.id('emrTabId_440')).click();
        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('contacts');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        var contactsPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Contacts';
            });
        }).first();
        expect(contactsPanelHeading.isPresent()).toBe(true);
    });
    it('add a new contacts @M.K', function() {
        var contactsPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Contacts';
            });
        }).first();

        browser.actions().mouseMove(contactsPanelHeading).perform();
        element(by.id('addcontactsdata')).click();

        element(by.id('contactsType_0')).click();
        element(by.css('.contactsTypeClassInput_0')).click().sendKeys(protractor.Key.ARROW_DOWN).sendKeys(protractor.Key.ENTER);
        var firstContactsRow = element(by.id('contactsDetailsRow_0'));
        browser.actions().mouseMove(firstContactsRow).perform();
        var lockContactsButton = element(by.id('lockContactsButton_0'));
        expect(lockContactsButton.isPresent()).toBe(true);
    });
    it('able to edit for contacts @M.K', function() {
        var firstContactsRow = element(by.id('contactsDetailsRow_0'));
        browser.actions().mouseMove(firstContactsRow).perform();
        element(by.id('contactsName_0')).click();
        var update = element(by.css('.contactsNameClassInput_0')).sendKeys('Testing by protractor').sendKeys(protractor.Key.ENTER);
        expect(update);
    });
    it('able to delete contacts @M.K', function() {
        var firstContactsRow = element(by.id('contactsDetailsRow_0'));
        browser.actions().mouseMove(firstContactsRow).perform();
        var deleteContactsButton = element(by.id('deleteContactsButton_0'));
        deleteContactsButton.click();
        var confirmButton = element(by.css('.modal-body button.btn-success'));
        confirmButton.click();
        expect(deleteContactsButton);
    });
});
