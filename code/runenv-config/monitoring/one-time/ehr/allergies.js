// spec.js content e.g.
describe('SC EMR allergies panel', function() {
    it('able to load allergies panel', function() {
        browser.get('https://www.savantcare.com/internal/#/user/440');
        var getEmrTab = element(by.id('emrTabId_440')).click();
        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('allergies');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        var allergiesPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Allergies';
            });
        }).first();
        expect(allergiesPanelHeading.isPresent()).toBe(true);
    });
    it('add a new allergies', function() {
        var allergiesPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Allergies';
            });
        }).first();
        browser.actions().mouseMove(allergiesPanelHeading).perform();
        element(by.id('addallergiesdata')).click();

        element(by.css('.allergyNameInputClass_0')).sendKeys('Testing by protractor').sendKeys(protractor.Key.ENTER);
        var firstAllergiesRow = element(by.id('allergiesDetailsRow_0'));
        browser.actions().mouseMove(firstAllergiesRow).perform();
        var lockAllergiesButton = element(by.id('lockAllergiesButton_0'));
        expect(lockAllergiesButton.isPresent()).toBe(true);
    });
    it('able to edit for allergies', function() {
        var firstAllergiesRow = element(by.id('allergiesDetailsRow_0'));
        browser.actions().mouseMove(firstAllergiesRow).perform();
        var updateReactions = element(by.id('allergyReaction_0'));
        updateReactions.click();
        element(by.css('.allergyReactionInputClass_0')).sendKeys('edit by protractor').sendKeys(protractor.Key.ENTER);
        var updateOnset = element(by.id('allergyOnset_0'));
        updateOnset.click();
        element(by.css('.allergyOnsetInputClass_0')).sendKeys('Today').sendKeys(protractor.Key.ENTER);
        /*browser.wait(function (){
            return scBrainMessageReceive.isPresent();
        }, 1000);*/
        expect(updateReactions.getText()).toEqual('edit by protractor');
    });
    it('able to delete allergies', function() {
        var firstAllergiesRow = element(by.id('allergiesDetailsRow_0'));
        browser.actions().mouseMove(firstAllergiesRow).perform();
        var deleteAllergiesButton = element(by.id('deleteAllergiesButton_0'));
        deleteAllergiesButton.click();
        var confirmButton = element(by.css('.modal-body button'));
        confirmButton.click();
        expect(deleteAllergiesButton);
    });
});
