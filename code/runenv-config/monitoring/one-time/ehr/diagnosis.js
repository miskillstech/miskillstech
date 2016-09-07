// spec.js content e.g.
describe('SC EMR Diagnosis panel', function() {
    it('able to load Diagnosis panel @M.K', function() {
        browser.get('https://www.savantcare.com/internal/#/user/440');
        var getEmrTab = element(by.id('emrTabId_440')).click();
        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('dx');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        var DiagnosisPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Diagnosis';
            });
        }).first();
        expect(DiagnosisPanelHeading.isPresent()).toBe(true);
    });
    it('add a new Diagnosis @M.K', function() {
        var DiagnosisPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Diagnosis';
            });
        }).first();
        browser.actions().mouseMove(DiagnosisPanelHeading).perform();
        element(by.id('addDiagnosisData')).click();

        element(by.id('diagnosisName_0')).click();
        element(by.css('.diagnosisNameInputClass_0')).sendKeys('Testing by protractor').sendKeys(protractor.Key.ENTER);
        var firstDiagnosisRow = element(by.id('diagnosisDetailsRow_0'));
        browser.actions().mouseMove(firstDiagnosisRow).perform();
        var lockDiagnosisButton = element(by.id('lockDiagnosisButton_0'));
        expect(lockDiagnosisButton.isPresent()).toBe(true);
    });
    it('able to edit for Diagnosis @M.K', function() {
        var firstDiagnosisRow = element(by.id('diagnosisDetailsRow_0'));
        browser.actions().mouseMove(firstDiagnosisRow).perform();
        var updateStartDate = element(by.id('diagnosisStartDate_0'));
        updateStartDate.click();
        element(by.css('.diagnosisStartDateInputClass_0')).sendKeys('1 day ago').sendKeys(protractor.Key.ENTER);

        var updateEndtDate = element(by.id('diagnosisEndDate_0'));
        updateEndtDate.click();
        element(by.css('.diagnosisEndDateInputClass_0')).sendKeys('today').sendKeys(protractor.Key.ENTER);
        /*var myDateFilter = angular.injector(["ng"]).get('dateFilter');
        var dateString = myDateFilter(new Date(), 'MMM dd, yyyy');*/
        expect(updateEndtDate);
    });
    it('able to delete Diagnosis @M.K', function() {
        var firstDiagnosisRow = element(by.id('diagnosisDetailsRow_0'));
        browser.actions().mouseMove(firstDiagnosisRow).perform();
        var deleteDiagnosisButton = element(by.id('deleteDiagnosisButton_0'));
        deleteDiagnosisButton.click();
        var confirmButton = element(by.css('.modal-body button.btn-success'));
        confirmButton.click();
        expect(deleteDiagnosisButton);
    });
});
