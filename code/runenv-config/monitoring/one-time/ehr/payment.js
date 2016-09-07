describe('SC EMR App', function() {

    it('able to load appointment panel', function() {
        browser.get('https://www.savantcare.com/internal/#/user/699');
        var getEmrTab = element(by.id('emrTabId_699'));
        getEmrTab.click();
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

    it('Event details not opening', function() {
        //browser.get('https://www.savantcare.com/internal/#/event/25651/1459535400000');
        var appointmentDetails = browser.findElement(by.className('appointmentDetailsRow0'));
        browser.actions().mouseMove(appointmentDetails).perform();

        var appointmentDetails = browser.findElement(by.className('eventDetailsLink0'));
        appointmentDetails.click();
        var myElement = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Event details';
            });
        }).first();
        expect(myElement.isPresent()).toBe(true);
    });
    it('Event details Coding not opening', function() {
        var codingPanel = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Coding';
            });
        }).first();
        expect(codingPanel.isPresent()).toBe(true);
    });
    it('Event details Coding not able to add new cpt code', function() {
        var codingPanel = element.all(by.css('.panel-heading')).filter(function (elem, index) {
            return elem.getText().then(function (text) {
                return text === 'Coding';
            });
        }).first();
        browser.actions().mouseMove(codingPanel).perform();
        var newCodingButton = element(by.id('addNewCptCode'));
        var EC = protractor.ExpectedConditions;
        var panelMinimized = element(by.css('.isPanelMinimized_33'));
        panelMinimized.isPresent().then(function (result) {
            if (result) {
                codingPanel.click();
                newCodingButton.click();
            }
            else {
                newCodingButton.click();
            }
        });

        var cptCodeLink = element(by.id('cptCodeLink0'));
        cptCodeLink.click();
        var selectCptCode = element(by.css('.selectCptCode0'));
        selectCptCode.click();
        selectCptCode.sendKeys('00000');
        selectCptCode.sendKeys(protractor.Key.ENTER);
        var amountReceivedLink = browser.findElement(by.id('amountReceivedLink0'));
        expect(amountReceivedLink.getText()).toEqual('$0.00');

    });
    it('Event details Coding not able to update cpt code', function() {
        var amountExpectedLink = element(by.id('amountExpectedLink0'));
        amountExpectedLink.click();

        var selectAmountExpected = element(by.css('.selectAmountExpected0'));
        selectAmountExpected.click();
        selectAmountExpected.clear().sendKeys('111');
        selectAmountExpected.sendKeys(protractor.Key.ENTER);
        var amountRemainingLink = browser.findElement(by.id('amountRemainingLink0'));
        expect(amountRemainingLink.getText()).toEqual('$111.00');

    });
    it('Event details Coding not able to delete cpt code', function() {
        var amountExpectedLink = element(by.id('removeCptCodeLink0'));
        amountExpectedLink.click();
        browser.wait(function() {
            return browser.switchTo().alert().then(
                function(alert) {
                    expect(alert.getText()).toEqual("Do you really want to remove this Cpt Code from database?");
                    alert.accept();
                    return true;
                },
                function() { return false; }
            );
        });
    });

    it('Not able to delete appointment', function() {
        browser.get('https://www.savantcare.com/internal/#/user/699');
        var getEmrTab = element(by.id('emrTabId_699'));
        getEmrTab.click();
        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('appt');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        getEmrTab.click();
        var firstAppointmentRow = element(by.css('.appointmentDetailsRow0'));
        browser.actions().mouseMove(firstAppointmentRow).perform();
        var deleteAppointmentButton = element(by.css('.deleteAppointmentButton0'));
        deleteAppointmentButton.click();
        var confirmButton = element(by.css('.modal-body button'));
        confirmButton.click();
        expect(deleteAppointmentButton);
    });
});