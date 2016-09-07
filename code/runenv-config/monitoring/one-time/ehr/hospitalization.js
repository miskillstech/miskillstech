// spec.js content e.g.
describe('SC EMR hospitalizations panel', function() {
    it('able to load hospitalizations panel from scBrain internal @M.K', function() {
        browser.get('https://www.savantcare.com/internal/#/user/440');
        var getEmrTab = element(by.id('emrTabId_440')).click();
        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('hospitalizations');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        var hospitalizationsPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Hospitalizations';
            });
        }).first();
        expect(hospitalizationsPanelHeading.isPresent()).toBe(true);
    });
    it('add a new hospitalizations @M.K', function() {
        var hospitalizationsPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Hospitalizations';
            });
        }).first();

        browser.actions().mouseMove(hospitalizationsPanelHeading).perform();
        element(by.id('addhospitalizationdata')).click();

        //element(by.id('hospitalizationsDescription_0')).click();
        element(by.css('.hospitalizationsDescriptionClassInput_0')).sendKeys('Testing by protractor').sendKeys(protractor.Key.ENTER);
        var firstHospitalizationsRow = element(by.id('hospitalizationsDetailsRow_0'));
        browser.actions().mouseMove(firstHospitalizationsRow).perform();
        var lockHospitalizationsButton = element(by.id('lockHospitalizationsButton_0'));
        expect(lockHospitalizationsButton.isPresent()).toBe(true);
    });
    it('able to edit for hospitalizations @M.K', function() {
        var firstHospitalizationsRow = element(by.id('hospitalizationsDetailsRow_0'));
        browser.actions().mouseMove(firstHospitalizationsRow).perform();
        element(by.id('hospitalizationsCommand_0')).click();
        var update = element(by.css('.hospitalizationsCommandClassInput_0')).sendKeys('Protractor').sendKeys(protractor.Key.ENTER);
        expect(update);
    });
    it('able to delete hospitalizations @M.K', function() {
        var firstHospitalizationsRow = element(by.id('hospitalizationsDetailsRow_0'));
        browser.actions().mouseMove(firstHospitalizationsRow).perform();
        var deleteHospitalizationsButton = element(by.id('deleteHospitalizationsButton_0'));
        deleteHospitalizationsButton.click();
        var confirmButton = element(by.css('.modal-body button.btn-success'));
        confirmButton.click();
        expect(deleteHospitalizationsButton);
    });
    /*it('add a new hospitalizations from scBrain internal', function() {

        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('h protractorTestByScBrainInternal, today, 2 day ago, scBrain');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        var firstDescription = element(by.id('hospitalizationsDescription_0'));
        expect(firstDescription.getText()).toEqual('protractorTestByScBrainInternal');
    });

    it('able to delete hospitalizations for created by scBrain internal', function() {
        var hospitalizationsPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Hospitalizations';
            });
        }).first();

        var firstHospitalizationsRow = element(by.id('hospitalizationsDetailsRow_0'));
        browser.actions().mouseMove(firstHospitalizationsRow).perform();
        var deleteHospitalizationsButton = element(by.id('deleteHospitalizationsButton_0'));
        deleteHospitalizationsButton.click();
        var confirmButton = element(by.css('.modal-body button.btn-success'));
        confirmButton.click();
        expect(deleteHospitalizationsButton);
    });*/
});
