// spec.js content e.g.
describe('SC EMR substanceAbuse panel', function() {
    it('able to load substanceAbuse panel', function() {
        browser.get('https://www.savantcare.com/internal/#/user/440');
        var getEmrTab = element(by.id('emrTabId_440')).click();
        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('sa');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        var substanceAbusePanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Substance abuse';
            });
        }).first();
        expect(substanceAbusePanelHeading.isPresent()).toBe(true);
    });
});
