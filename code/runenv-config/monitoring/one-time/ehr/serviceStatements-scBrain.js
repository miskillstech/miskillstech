// spec.js content e.g.
describe('SC EMR Service Statements appointments @ SM', function() {
    it('able to load appointments from scBrain @ SM', function() {
        browser.get('https://www.savantcare.com/internal/#/user/440');
        var getEmrTab = element(by.id('emrTabId_440')).click();
        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('appts');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        var appointmentsPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Appointments';
            });
        }).first();
        expect(appointmentsPanelHeading.isPresent()).toBe(true);
    });
    it('able to active appointments from scBrain @ SM', function() {
        var getEmrTab = element(by.id('emrTabId_440')).click();
        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('start note 4792');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        expect(getEmrTab.isPresent()).toBe(true);
    });
    it('able to view service statements lists of appointments from scBrain @ SM', function() {
        var getEmrTab = element(by.id('emrTabId_440')).click();
        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('show ss for 4792');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        expect(getEmrTab.isPresent()).toBe(true);
    });
    it('able to add service statements to appointments from scBrain @ SM', function() {
        var getEmrTab = element(by.id('emrTabId_440')).click();
        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('ss Explained medication risks - benefits and side effects');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        expect(getEmrTab.isPresent()).toBe(true);
    });

    it('able to deactivate appointments from scBrain @ SM', function() {
        var getEmrTab = element(by.id('emrTabId_440')).click();
        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('end note 4792');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        expect(getEmrTab.isPresent()).toBe(true);
    });



});