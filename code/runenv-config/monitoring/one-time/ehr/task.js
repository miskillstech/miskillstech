// spec.js content e.g.
describe('SC EMR task panel', function() {
    it('able to load task panel from scBrain internal', function() {
        browser.get('https://www.savantcare.com/internal/#/user/440');
        var getEmrTab = element(by.id('emrTabId_440')).click();
        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('task');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        var taskPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Task';
            });
        }).first();
        expect(taskPanelHeading.isPresent()).toBe(true);
    });
    it('add a new task', function() {
        var taskPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Task';
            });
        }).first();
        browser.actions().mouseMove(taskPanelHeading).perform();
        element(by.id('addtaskdata')).click();

        element(by.id('taskSummary_0')).click();
        element(by.css('.taskSummaryClassInput_0')).sendKeys('Testing by protractor').sendKeys(protractor.Key.ENTER);
        var firstTaskRow = element(by.id('taskDetailsRow_0'));
        browser.actions().mouseMove(firstTaskRow).perform();
        var lockTaskButton = element(by.id('lockTaskButton_0'));
        expect(lockTaskButton.isPresent()).toBe(true);
    });
    it('able to edit for task', function() {
        var firstTaskRow = element(by.id('taskDetailsRow_0'));
        browser.actions().mouseMove(firstTaskRow).perform();
        var Assigned = element(by.id('taskAssigned_0'));
        Assigned.click();
        element(by.id('taskAssignedInput_0')).click();
        var update = element(by.css('.select-dropdown-optgroup li')).click();
        expect(update);
    });
    it('able to delete task', function() {
        var firstTaskRow = element(by.id('taskDetailsRow_0'));
        browser.actions().mouseMove(firstTaskRow).perform();
        var deleteTaskButton = element(by.id('deleteTaskButton_0'));
        deleteTaskButton.click();
        var confirmButton = element(by.css('.modal-body button'));
        confirmButton.click();
        expect(deleteTaskButton);
    });
});
