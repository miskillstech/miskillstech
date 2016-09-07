// spec.js content e.g.
describe('SC EMR Career Highlights panel @ SM', function() {

    it('able to load Career Highlights panel @ SM', function() {
        browser.get('https://www.savantcare.com/internal/#/user/440');
        var getEmrTab = element(by.id('emrTabId_440')).click();
        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('career');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        var careerHighlightsPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Career highlights';
            });
        }).first();
        expect(careerHighlightsPanelHeading.isPresent()).toBe(true);
    });

    it('add a new Career Highlights panel @ SM', function() {
        var careerHighlightsPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Career highlights';
            });
        }).first();

        browser.actions().mouseMove(careerHighlightsPanelHeading).perform();
        element(by.id('addCareerData')).click();
        var lastCareerHighlightsRow = element.all(by.css('#careerHighlightsRow')).last();
        browser.actions().mouseMove(lastCareerHighlightsRow).perform();
        lastCareerHighlightsRow.element(by.css('#careerHighlightsRow td .cPointer')).click();
        var addCareerHighlightsPanel = lastCareerHighlightsRow.element(by.model('$data')).sendKeys('New Career Highlights').sendKeys(protractor.Key.ENTER);
        expect(addCareerHighlightsPanel);
    });

    it('Edit Career Highlights panel @ SM', function() {
        var lastCareerHighlightsRow = element.all(by.css('#careerHighlightsRow')).last();
        browser.actions().mouseMove(lastCareerHighlightsRow).perform();
        var editCareerHighlightsPanel = lastCareerHighlightsRow.element(by.css('#careerHighlightsRow td .cPointer')).click();
        lastCareerHighlightsRow.element(by.model('$data')).sendKeys('Career Highlights are editable').sendKeys(protractor.Key.ENTER);
        expect(editCareerHighlightsPanel);
    });
    it('Delete Career Highlights panel @ SM', function() {
        var lastCareerHighlightsRow = element.all(by.css('#careerHighlightsRow')).last();
        browser.actions().mouseMove(lastCareerHighlightsRow).perform();
        var deleteLastCareerHighlightsRow = lastCareerHighlightsRow.element(by.id('remove-career-highlights'));
        deleteLastCareerHighlightsRow.click();
        var confirmButton = element(by.css('.modal-body button.btn-success'));
        confirmButton.click();
        expect(deleteLastCareerHighlightsRow);
    });

});