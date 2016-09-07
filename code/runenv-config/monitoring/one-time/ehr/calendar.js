// spec.js content e.g.
describe('SC EMR Calendar', function() {
    it('Able to load calendar done by @Kiran', function() {
       browser.get('https://www.savantcare.com/internal/#/resourceManagement');
        var clickOnCalendarTab = element(by.id('emrTabId_0011'));
        browser.actions().mouseMove( clickOnCalendarTab ).perform();
        clickOnCalendarTab.click();
       var myElement = browser.findElement(by.css('.marginLR10 .fc-button-month'));
        browser.findElement(by.css('.marginLR10 .fc-button-next')).click();
        browser.findElement(by.css('.marginLR10 .fc-button-today')).click();
        browser.findElement(by.css('.marginLR10 .fc-button-agendaDay')).click();
        myElement.click();
        var calendarListTable =  element(by.css('#calendar .fc-border-separate thead'));
        expect(calendarListTable.isPresent()).toBe(true);
       browser.wait(function() {
           return myElement.getText().then(
               function() {  expect(myElement.getText()).toEqual('month'); return true;},
               function() { return false;}
           );
       }, 5000);
    });

    it('Able to load and add available for booking from Dr. VS calendar done by @Kiran', function() {
       browser.get('https://www.savantcare.com/internal/#/resourceManagement');
        var clickOnCalendarTab = element(by.id('emrTabId_0011'));
        browser.actions().mouseMove( clickOnCalendarTab ).perform();
        clickOnCalendarTab.click();
       var searchBox = element(by.model('query'));
       searchBox.sendKeys('vidushi savant');
       searchBox.sendKeys(protractor.Key.ENTER);
       browser.findElement(by.css('.marginLR10 .fc-button-month')).click();
        browser.findElement(by.css('.marginLR10 .fc-button-next')).click();
        browser.findElement(by.css('.marginLR10 .fc-button-today')).click();
        browser.findElement(by.css('.marginLR10 .fc-button-agendaDay')).click();
        browser.findElement(by.css('.marginLR10 .fc-button-month')).click();
        element.all(by.css('.fc-day-content')).first().click();
        element.all(by.css('.highlightEventType')).first().click();

       var clickOnProtractorTestEventTypeDropdown = element(by.id('forProtractorTestEventType'));
       clickOnProtractorTestEventTypeDropdown.click();
       clickOnProtractorTestEventTypeDropdown.sendKeys('Av');
       clickOnProtractorTestEventTypeDropdown.sendKeys(protractor.Key.ENTER);

       var selectDoctorName = element(by.id('forProtractorDoctorEdit'));
       selectDoctorName.click();
       var selectDoctorNameInput = element(by.css("#forProtractorDoctorEdit input"));
       selectDoctorNameInput.sendKeys('vidushi savant').sendKeys(protractor.Key.ENTER);

       var selectLocation = element(by.model('editEventForResource.location'));
       selectLocation.click();
       selectLocation.sendKeys('s');
       selectLocation.sendKeys(protractor.Key.ENTER);

       var selectDuration = element.all(by.css('.durationInputContainer .inputHour')).first();
       selectDuration.click();
       selectDuration.clear().sendKeys('1');
       element.all(by.id('forProtractorEdit_0')).click();

        var selectTimepickerName = element(by.css('#forProtractorTestTimepickerEdit input#inputBox'));
        selectTimepickerName.click();
        selectTimepickerName.clear().sendKeys('6:00 AM').sendKeys(protractor.Key.ENTER);

        var d = new Date();
        var inputDate = d.getDate()+'/'+((d.getMonth()+1))+'/'+d.getFullYear();
        element(by.model('editEventForResource.startDate')).clear().sendKeys(inputDate);

       var purposeOfVisit = element(by.id('forProtractorSave'));
       purposeOfVisit.click();
       expect(purposeOfVisit.isPresent()).toBe(false);
    });

    it('Able to add apointment from Dr. VS calendar done by @Kiran', function() {
        browser.get('https://www.savantcare.com/internal/#/resourceManagement');
        var clickOnCalendarTab = element(by.id('emrTabId_0011'));
        browser.actions().mouseMove( clickOnCalendarTab ).perform();
        clickOnCalendarTab.click();
        var searchBox = element(by.model('query'));
        searchBox.sendKeys('vidushi savant');
        searchBox.sendKeys(protractor.Key.ENTER);
        browser.findElement(by.css('.marginLR10 .fc-button-month')).click();

        browser.findElement(by.css('.marginLR10 .fc-button-next')).click();
        browser.findElement(by.css('.marginLR10 .fc-button-today')).click();
        browser.findElement(by.css('.marginLR10 .fc-button-month')).click();
        element.all(by.css('.fc-day-content')).first().click();
        element.all(by.css('.highlightEventType')).first().click();
        var clickOnProtractorTestEventTypeDropdown = element(by.id('forProtractorTestEventType'));
        clickOnProtractorTestEventTypeDropdown.click();
        clickOnProtractorTestEventTypeDropdown.sendKeys('A');
        clickOnProtractorTestEventTypeDropdown.sendKeys(protractor.Key.ENTER);
        var selectTimepickerName = element(by.css('#forProtractorTestTimepickerEdit input#inputBox'));
        selectTimepickerName.click();
        selectTimepickerName.clear().sendKeys('6:00 AM').sendKeys(protractor.Key.ENTER);
        var d = new Date();
        var inputDate = d.getDate()+'/'+((d.getMonth()+1))+'/'+d.getFullYear();
        element(by.model('editEventForResource.startDate')).clear().sendKeys(inputDate);
        var selectDoctorName = element(by.id('forProtractorDoctorEdit'));
        selectDoctorName.click();
        var selectDoctorNameInput = element(by.css("#forProtractorDoctorEdit input"));
        selectDoctorNameInput.sendKeys('vidushi savant').sendKeys(protractor.Key.ENTER);
        var selectAttendeeName = element(by.id('forProtractorAttendeeEdit'));
        selectAttendeeName.click();
        var selectAttendeeNameInput = element(by.css("#forProtractorAttendeeEdit input"));
        selectAttendeeNameInput.sendKeys('kiran').sendKeys(protractor.Key.ENTER);

        var selectDuration = element.all(by.css('.durationInputContainer .inputMinute')).first();
        selectDuration.click();
        selectDuration.clear().sendKeys('50');

        var clickOnProtractorTestAssetsDropdown = element(by.css('#forProtractorTestAssetAdd input'));
        clickOnProtractorTestAssetsDropdown.click();
        clickOnProtractorTestAssetsDropdown.sendKeys('sc');
        clickOnProtractorTestAssetsDropdown.sendKeys(protractor.Key.ENTER);

        var purposeOfVisit = element(by.id('forProtractorSave'));
        purposeOfVisit.click();
        expect(purposeOfVisit.isPresent()).toBe(false);
    });

    it('Able to edit an apointment from Dr. VS calendar done by @Kiran', function() {
        browser.get('https://www.savantcare.com/internal/#/resourceManagement');
        var clickOnCalendarTab = element(by.id('emrTabId_0011'));
        browser.actions().mouseMove( clickOnCalendarTab ).perform();
        clickOnCalendarTab.click();
        var searchBox = element(by.model('query'));
        searchBox.sendKeys('vidushi savant');
        searchBox.sendKeys(protractor.Key.ENTER);
        browser.findElement(by.css('.marginLR10 .fc-button-month')).click();
        browser.findElement(by.css('.marginLR10 .fc-button-next')).click();
        browser.findElement(by.css('.marginLR10 .fc-button-today')).click();
        browser.findElement(by.css('.marginLR10 .fc-button-agendaDay')).click();
        element.all(by.css('.fc-event-container .A')).last().click();
        var clickOnProtractorTestAssetsDropdown = element(by.css('#forProtractorTestAssetEdit input'));
        clickOnProtractorTestAssetsDropdown.click();
        clickOnProtractorTestAssetsDropdown.clear().sendKeys('sc');
        clickOnProtractorTestAssetsDropdown.sendKeys(protractor.Key.ENTER);
        var selectTimepickerName = element(by.css('#forProtractorTestTimepickerAdd input#inputBox'));
        selectTimepickerName.click();
        selectTimepickerName.clear().sendKeys('6:10 AM').sendKeys(protractor.Key.ENTER);
        var purposeOfVisit = element(by.id('forProtractorDelete'));
        purposeOfVisit.click();
        browser.switchTo().alert().accept();
    });

    it('Able to delete available for booking from Dr. VS calendar done by @Kiran', function() {
        browser.get('https://www.savantcare.com/internal/#/resourceManagement');
        var clickOnCalendarTab = element(by.id('emrTabId_0011'));
        browser.actions().mouseMove( clickOnCalendarTab ).perform();
        clickOnCalendarTab.click();
        var searchBox = element(by.model('query'));
        searchBox.sendKeys('vidushi savant');
        searchBox.sendKeys(protractor.Key.ENTER);
        element.all(by.css('.V')).first().click();
        var purposeOfVisit = element(by.id('forProtractorDelete'));
        purposeOfVisit.click();
        browser.switchTo().alert().accept();
    });
});
