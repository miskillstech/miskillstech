// spec.js content e.g.
describe('SC EMR screening panel', function() {
    it('able to load screening panel from scBrain internal @M.K', function() {
        browser.get('https://www.savantcare.com/internal/#/user/440');
        var getEmrTab = element(by.id('emrTabId_440')).click();
        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('screening');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        var screeningPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Screening';
            });
        }).first();
        expect(screeningPanelHeading.isPresent()).toBe(true);
    });
    it('add a new screening @M.K', function() {
        var screeningPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Screening';
            });
        }).first();

        var firstScreeningData = element(by.id('screeningPerData_0')).getText();
        browser.actions().mouseMove(screeningPanelHeading).perform();
        element(by.id('addscreeningdata')).click();

        var addScreening = element(by.css('.select-dropdown ul.select-dropdown-optgroup li.active'));
        if(addScreening.isPresent()){
            addScreening.click();

            var scoundScreeningData = element(by.id('screeningPerData_1'));
            expect(scoundScreeningData.getText()).toEqual(firstScreeningData);
        }
    });
    it('able to edit for screening @M.K', function() {
        element(by.id('screeningPerData_0')).click();

        var update = element(by.id('answerForScreening_0'));
        update.click();

        var answerList = element(by.css('.answerForScreeningInputClass_0'));
        answerList.click();
        expect(update);
    });
    it('able to delete screening @M.K', function() {
        element(by.id('allForScreening')).click();
        var firstScreeningRow = element(by.id('screeningPerData_0'));
        browser.actions().mouseMove(firstScreeningRow).perform();
        var deleteScreeningButton = element(by.id('deleteScreening_0'));
        deleteScreeningButton.click();
        var confirmButton = element(by.css('.modal-content div.modal-header button.btn-success'));
        confirmButton.click();
        expect(deleteScreeningButton);
    });
    /*it('add a new screening from scBrain internal', function() {

        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('h protractorTestByScBrainInternal, today, 2 day ago, scBrain');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        var firstDescription = element(by.id('screeningDescription_0'));
        expect(firstDescription.getText()).toEqual('protractorTestByScBrainInternal');
    });

    it('able to delete screening for created by scBrain internal', function() {
        var firstScreeningRow = element(by.id('screeningPerData_0'));
        browser.actions().mouseMove(firstScreeningRow).perform();
        var deleteScreeningButton = element(by.id('deleteScreeningButton_0'));
        deleteScreeningButton.click();
        var confirmButton = element(by.css('.modal-body button.btn-success'));
        confirmButton.click();
        expect(deleteScreeningButton);
    });*/
});
