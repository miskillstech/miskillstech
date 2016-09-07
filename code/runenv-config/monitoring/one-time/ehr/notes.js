// spec.js content e.g.
describe('SC EMR Note  @Kamlesh', function() {
    it('able to open notes panel from appointment panel internal @Kamlesh', function() {
        browser.get('https://www.savantcare.com/internal/#/user/440');
        var getEmrTab = element(by.id('emrTabId_440')).click();
        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('appt');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        var appointmentPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Appointments';
            });
        }).first();
        expect(appointmentPanelHeading.isPresent()).toBe(true);
    });
    it('able to load notes for test appointment', function() {
        var appointmentNotesLink = browser.findElement(by.className('notesLink0'));
        appointmentNotesLink.click();
        browser.wait(function() {
            return true;
        }, 1000);
        var subjectiveDiv = element(by.css('.subjective_div'));
        var assessmentDiv = element(by.css('.assessment_div'));
        var planDiv = element(by.css('.plan_div'));
        expect(subjectiveDiv.getText()).toEqual('subjective');
        expect(assessmentDiv.getText()).toEqual('assessment');
        expect(planDiv.getText()).toEqual('plan');

    });
    it('able to edit notes for test appointment', function() {

        var subjectiveDiv = element(by.css('.subjective_div'));
        var assessmentDiv = element(by.css('.assessment_div'));
        var planDiv = element(by.css('.plan_div'));
        subjectiveDiv.click().clear().sendKeys('For Protractor test');
        assessmentDiv.click().clear().sendKeys('For Protractor test');
        planDiv.click().clear().sendKeys('For Protractor test');
        browser.ignoreSynchronization = true;
        browser.sleep(65000);
        browser.ignoreSynchronization = false;
        browser.ignoreSynchronization = true;
        browser.wait(function() {
            return element.all(by.css('.panel-message-board-notes')).then(
                function() {
                    browser.get('https://www.savantcare.com/internal/#/user/440');
                    var getEmrTab = element(by.id('emrTabId_440')).click();
                    var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
                    scBrainInput.sendKeys('appt');
                    scBrainInput.sendKeys(protractor.Key.ENTER);
                    var appointmentNotesLink = browser.findElement(by.className('notesLink0'));
                    appointmentNotesLink.click();
                    expect(subjectiveDiv.getText()).toEqual('For Protractor test');
                    expect(assessmentDiv.getText()).toEqual('For Protractor test');
                    expect(planDiv.getText()).toEqual('For Protractor test');
                    return true;
                }, function() {
                    return false;
                }
            );
        }, 65000);
        browser.ignoreSynchronization = false;
    });

    it('able to edit notes from details appointment page', function() {
        var eventDetails = element(by.css('.eventDetailsLink0'));

        browser.actions().mouseMove(eventDetails).perform();
        eventDetails.click();

        var eventDetailsNotes = element(by.css('.forProtractorTestPluginId_32'));

        browser.actions().mouseMove(eventDetailsNotes).perform();
        eventDetailsNotes.click();
        var subjectiveEditButton = element(by.css('.editForProtractor_Subjective'));
        browser.actions().mouseMove(subjectiveEditButton).perform();
        subjectiveEditButton.click();
        var forProtractorTestUsed = element(by.css('iframe'));
        forProtractorTestUsed.click().sendKeys(' subjective');
        var detailsPageSaveClick = element.all(by.css('.forProtractorSaveClick'));
        detailsPageSaveClick.click();

        var assessmentEditButton = element(by.css('.editForProtractor_Assessment'));
        browser.actions().mouseMove(assessmentEditButton).perform();
        assessmentEditButton.click();
        var forProtractorTestUsed = element(by.css('iframe'));
        forProtractorTestUsed.click().sendKeys(' assessment');
        var detailsPageSaveClick = element.all(by.css('.forProtractorSaveClick'));
        detailsPageSaveClick.click();

        var planEditButton = element(by.css('.editForProtractor_Plan'));
        browser.actions().mouseMove(planEditButton).perform();
        planEditButton.click();
        var forProtractorTestUsed = element(by.css('iframe'));
        forProtractorTestUsed.click().sendKeys(' plan');
        var detailsPageSaveClick = element.all(by.css('.forProtractorSaveClick'));
        detailsPageSaveClick.click();

        browser.get('https://www.savantcare.com/internal/#/user/440');
        var getEmrTab = element(by.id('emrTabId_440')).click();
        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('appt');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        var appointmentNotesLink = browser.findElement(by.className('notesLink0'));
        appointmentNotesLink.click();

        var subjectiveDiv = element(by.css('.subjective_div'));
        var assessmentDiv = element(by.css('.assessment_div'));
        var planDiv = element(by.css('.plan_div'));
        subjectiveDiv.click().clear().sendKeys('subjective');
        assessmentDiv.click().clear().sendKeys('assessment');
        planDiv.click().clear().sendKeys('plan');

        var saveButtonOnTitleBar = element(by.css('.buttontitlebar .glyphicon-save'));
        browser.actions().mouseMove(saveButtonOnTitleBar).perform();
        saveButtonOnTitleBar.click();
        browser.ignoreSynchronization = true;
        browser.wait(function() {
            return element.all(by.css('.panel-message-board-notes')).then(
                function() {
                    expect(subjectiveDiv.getText()).toEqual('subjective');
                    expect(assessmentDiv.getText()).toEqual('assessment');
                    expect(planDiv.getText()).toEqual('plan');
                    return true;
                }, function() {
                    return false;
                }
            );
        }, 1000);
        browser.ignoreSynchronization = false;
    });
});
