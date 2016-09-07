// spec.js content e.g.
describe('SC EMR Note', function() {
    it('able to load appointment panel', function() {
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
    it('add test appointment', function() {
        var appointmentPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Appointments';
            });
        }).first();
        //browser.actions().mouseMove($('cbn-slider')).perform();
        browser.actions().mouseMove(appointmentPanelHeading).perform();
        var appointmentAddButton = element(by.id('addappointmentenewdata'));
        appointmentAddButton.click();
        var appointmentDurationLink = element(by.id('appointmentDurationLink0'));
        appointmentDurationLink.click();
        var appointmentDurationMinuteInput = element(by.id('minuteInput0'));
        appointmentDurationMinuteInput.sendKeys('1');
        var appointmentHostLink = element(by.id('appointmentHostLink0'));
        appointmentHostLink.click();
        var appointmentHostInput = element(by.css('.oiSelect0 input'));
        appointmentHostInput.sendKeys('Test Doctor');
        appointmentHostInput.sendKeys(protractor.Key.ENTER);
        var appointmentNotesLink = browser.findElement(by.className('notesLink0'));
        expect(appointmentNotesLink.getText()).toEqual('0');
    });
    it('able to load notes panel for test appointment', function() {
        var appointmentNotesLink = browser.findElement(by.className('notesLink0'));
        appointmentNotesLink.click();
        browser.ignoreSynchronization = true;
        browser.wait(function() {
            return true;
        }, 1000);
        browser.ignoreSynchronization = false;
        //var appointmentNotesLink = element(by.css('.panel_notes'));
        var subjectiveDiv = element(by.css('.subjective_div'));
        var assessmentDiv = element(by.css('.assessment_div'));
        var planDiv = element(by.css('.plan_div'));
        subjectiveDiv.sendKeys('Auto save note testing...');
        assessmentDiv.sendKeys('Wait 1 min to see the test report...');
        planDiv.sendKeys('1 min means 60000 millisecond + 5000 extra milisecond = you have to wait 65000 miliseconds ... ^.^ by Kamlesh');
        browser.ignoreSynchronization = true;
        browser.wait(function() {
            return element(by.css('.panel-message-board-notes')).then(
                function() {
                    appointmentNotesLink = element(by.css('.notesLink0'));
                    expect(appointmentNotesLink.getText()).toEqual('3');
                    return true;
                }, function() {
                    return false;
                }
            );
        }, 65000);
        browser.ignoreSynchronization = false;
        /*browser.wait(function() {
            appointmentNotesLink = element(by.css('.notesLink0'));
            expect(appointmentNotesLink.getText()).toEqual('3');
        }, 62000);*/
        //expect(appointmentNotesLink);
    });
    it('able to delete appointment', function() {
        var firstAppointmentRow = element(by.css('.appointmentDetailsRow0'));
        browser.actions().mouseMove(firstAppointmentRow).perform();
        var deleteAppointmentButton = element(by.css('.deleteAppointmentButton0'));
        deleteAppointmentButton.click();
        var confirmButton = element(by.css('.modal-body button'));
        confirmButton.click();
        expect(deleteAppointmentButton);
    });
});
