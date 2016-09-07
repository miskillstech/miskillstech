/**
 * Created by Hemkanta on 25/05/16.
 */

describe('Savantcare Request Appointment App', function() {
    browser.ignoreSynchronization = false;
    var urlPath = "https://www.savantcare.com";
    //var urlPath = "https://172.16.54.129";
    it('Savantcare Intake: Able to open Savantcare @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().setSize(2600, 2100);
        browser.get(urlPath+'/');
        var getRequestAppointmentMenu= element(by.css('a[href*="/appt-request/#!/"]'));
        expect(getRequestAppointmentMenu.isPresent()).toBe(true);
    });
    it('Savantcare Request Appointment: Able to open Appointment request page @Hemkanta Mehra', function () {
        var getRequestAppointmentMenu= element(by.css('a[href*="/appt-request/#!/"]'));
        getRequestAppointmentMenu.click();
        var apptRequestURL = urlPath+'/appt-request/#!/';
        expect(browser.getCurrentUrl()).toEqual(apptRequestURL);
    });

    it('Savantcare Request Appointment: Able to open Book page @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        //var vsRequestApptButton= element(by.id('requestAppointment_1_vs'));
        var vsRequestApptButton = element.all(by.css('.requestAppointment_vs')).first();
        expect(vsRequestApptButton.isPresent()).toBe(true);
        vsRequestApptButton.click();
        var firstVisitButton= element(by.id('firstTimeVisitBtn'));
        expect(firstVisitButton.isPresent()).toBe(true);
    });

    it('Savantcare Request Appointment: Able to book appointment @Hemkanta Mehra', function () {
        var firstVisitButton = element(by.id('firstTimeVisitBtn'));
        firstVisitButton.click();
        var timeSlotButton= element(by.id('slotDetails-0'));
        browser.actions().mouseMove(timeSlotButton).perform();
        timeSlotButton.click();
        var unixTime=new Date().getTime();
        element(by.id('fullName')).sendKeys('Hemkanta Test '+unixTime);
        element(by.id('email')).sendKeys('hemkanta+'+unixTime+'@grmtech.com');
        element(by.id('password')).sendKeys('test1234');
        element(by.id('phoneNo')).sendKeys('+91 9932441103');
        element(by.id('dateOfBirth')).clear().sendKeys('07/31/1991');
        var submitButton = element(by.id('addNewPatientSubmitBtn'));
        submitButton.click();
        var getIntakeBtn= element(by.id('goToIntakeBtn'));
        expect(getIntakeBtn.isPresent()).toBe(true);
    });

    it('Savantcare Request Appointment: Able to login intake system @Hemkanta Mehra', function () {
        var getIntakeBtn= element(by.id('goToIntakeBtn'));
        getIntakeBtn.click();
        var welcomeTab = element.all(by.css('.nav-pills .cursorP')).first();
        expect(welcomeTab.getText()).toBe('Welcome');
    });
});