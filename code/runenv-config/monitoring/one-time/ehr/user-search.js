// spec.js content e.g.
describe('SC EMR User search panel @ SM', function() {
    it('able to load User search panel @ SM', function() {
        browser.get('https://www.savantcare.com/internal/#/user/440');
        var emrTabSearchLink = element(by.css('.ng-binding tab-heading i'));
        emrTabSearchLink.click();
        var userSearchPanelHeading = element(by.id('general_search')).sendKeys('souvik manna').sendKeys(protractor.Key.ENTER);
        expect(userSearchPanelHeading.isPresent()).toBe(true);
    });

    it('able to delete User tab @ SM', function() {
        var userTabLink = element.all(by.css('.ng-binding uib-tab-heading span')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Souvik Manna';
            });
        }).first();
        browser.actions().mouseMove(userTabLink).perform();
        var deleteTabLink = element(by.css('#emrTabId_976 .ng-binding uib-tab-heading #removeTab_1 .glyphicon-remove'));
        deleteTabLink.click();
        expect(deleteTabLink);
    });
});