// spec.js content e.g.
describe('SC EMR goal panel', function() {
    it('able to load goal panel @Arjun Kumar', function() {
        browser.get('https://www.savantcare.com/internal/#/user/440');
        var getEmrTab = element(by.id('emrTabId_440')).click();
        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('goal');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        var goalPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Goal';
            });
        }).first();
        expect(goalPanelHeading.isPresent()).toBe(true);
    });

    it('add a new goal  @Arjun Kumar', function() {
        var goalPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Goal';
            });
        }).first();
        browser.actions().mouseMove(goalPanelHeading).perform();
        element(by.id('addGoalData')).click();

        var lastGoalRow = element.all(by.css('.allGoalDataTbody tr')).last();
        var goalName = lastGoalRow.element(by.css('.goalNameEditable')).getText();

        lastGoalRow.element(by.css('.goalNameEditable')).click(); //clicking on empty goal.
        var addedInputGoalName = lastGoalRow.element(by.css('textarea')).sendKeys('Goal for Protractor testing');
        lastGoalRow.element(by.css('.editable-buttons .btn-primary')).click();

        var addedGoalName = lastGoalRow.element(by.css('.goalNameEditable')).getText();
        expect(addedGoalName).toEqual('Goal for Protractor testing');
    });

    it('edit goal  @Arjun Kumar', function() {
        var lastGoalRow = element.all(by.css('.allGoalDataTbody tr')).last();
        var oldGoalName = lastGoalRow.element(by.css('.goalNameEditable')).getText();

        lastGoalRow.element(by.css('.goalNameEditable')).click(); //clicking on xeditable goal.
        var updatedGoalName = lastGoalRow.element(by.css('textarea')).sendKeys(' goal - Edited by Protractor');
        lastGoalRow.element(by.css('.editable-buttons .btn-primary')).click();

        var addedGoalName = lastGoalRow.element(by.css('.goalNameEditable')).getText();
        expect(addedGoalName).toEqual('Goal for Protractor testing goal - Edited by Protractor');
    });

    it('able to delete goal  @Arjun Kumar', function() {
        var lastGoalRow = element.all(by.css('.allGoalDataTbody tr')).last();
        //var deleteButtonInsideTblRow = lastGoalRow.element(by.css('td'));
        //var deleteButtonInsideTblRow = deleteButtonInsideTblRow.first();
        var deleteButton = lastGoalRow.element(by.css('.glyphicon-trash'));
        deleteButton.click();
        browser.sleep(1000);
        var confirmGoalDeletenBtn = element(by.css('.modal-body button'));
        confirmGoalDeletenBtn.click();
        expect(deleteButton);
    });

   /* it('able to add goal from scbrain', function() {
        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('goal Protractor test goal by - Scbrain Internal');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        var lastGoalRow = element.all(by.css('.allGoalDataTbody tr')).last();
        var addedGoalNameByScbrain = lastGoalRow.element(by.css('.goalNameEditable')).getText();

        expect(addedGoalNameByScbrain).toEqual('Protractor test goal by - Scbrain Internal');

    });

    it('able to delete goal', function() {
        var lastGoalRow = element.all(by.css('.allGoalDataTbody tr')).last();
        var deleteButton = lastGoalRow.element(by.css('.glyphicon-trash'));
        deleteButton.click();
        browser.sleep(1000);
        var confirmGoalDeletenBtn = element(by.css('.modal-body button'));
        confirmGoalDeletenBtn.click();
        expect(deleteButton);
    });*/

});
