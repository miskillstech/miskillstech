// spec.js content e.g.
describe('SC EMR report search panel @ SM', function() {
    it('able to load report search panel @ SM', function() {
        browser.get('https://www.savantcare.com/internal/#/user/440');
        var emrTabSearchLink = browser.findElement(by.css('.ng-binding tab-heading i'));
        emrTabSearchLink.click();
        var reportSearchPanelHeading = element(by.id('general_search')).sendKeys('payments report').sendKeys(protractor.Key.ENTER);
        expect(reportSearchPanelHeading.isPresent()).toBe(true);
    });

    it('able to delete report tab @ SM', function() {
        var reportTabLink = element.all(by.css('.ng-binding uib-tab-heading span')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Payments report';
            });
        }).first();
        browser.actions().mouseMove(reportTabLink).perform();
        var deleteReportTabLink = element(by.css('#emrTabId_003 .ng-binding uib-tab-heading #removeTab_1 .glyphicon-remove'));
        deleteReportTabLink.click();
        expect(deleteReportTabLink);
    });
});