// spec.js content e.g.
describe('SC EMR Service Statements panel @ SM', function() {
    it('able to load Service Statements panel @ SM', function() {
        browser.get('https://www.savantcare.com/internal/#/user/440');
        var emrTabSearchLink = element(by.css('.ng-binding tab-heading i'));
        emrTabSearchLink.click();
        var MasterDbPanel = element(by.id('general_search')).sendKeys('Master DB').sendKeys(protractor.Key.ENTER);
        var serviceStatementsLink = element(by.id('service-statements'));
        serviceStatementsLink.click();
        var serviceStatementsPageOpen = element(by.css('button#add-ss'));
        expect(serviceStatementsPageOpen.isPresent()).toBe(true);
    });
    it('add a new Service Statements panel @ SM', function() {
        var serviceStatementsAddLink = element(by.css('#add-ss'));
        serviceStatementsAddLink.click();
        var firstserviceStatementsRow = element.all(by.css('.cPointer td')).first();
        browser.actions().mouseMove(firstserviceStatementsRow).perform();
        firstserviceStatementsRow.element(by.id('ss_0')).click();
        var addserviceStatementsPanel = firstserviceStatementsRow.element(by.model('$data')).sendKeys('New Service Statements for Test').sendKeys(protractor.Key.ENTER);
        var serviceStatementsLink = element(by.id('ss_0'));
        expect(serviceStatementsLink.isPresent()).toBe(true);
    });
    it('Edit Service Statements panel @ SM', function() {
        var firstserviceStatementsRow = element.all(by.css('.cPointer td')).first();
        browser.actions().mouseMove(firstserviceStatementsRow).perform();
        firstserviceStatementsRow.element(by.id('ss_0')).click();
        var addserviceStatementsPanel = firstserviceStatementsRow.element(by.model('$data')).sendKeys(' Edit sucessfull').sendKeys(protractor.Key.ENTER);
        var serviceStatementsLink = element(by.id('ss_0'));
        expect(serviceStatementsLink.isPresent()).toBe(true);
    });
    it('Delete Service Statements panel @ SM', function() {
        var firstserviceStatementsRow = element.all(by.css('.cPointer td')).first();
        browser.actions().mouseMove(firstserviceStatementsRow).perform();
        var deleteFirstCareerHighlightsRow = firstserviceStatementsRow.element(by.id('remove-ss'));
        deleteFirstCareerHighlightsRow.click();
        browser.switchTo().alert().accept();
        expect(firstserviceStatementsRow.isPresent()).toBe(true);
    });

});