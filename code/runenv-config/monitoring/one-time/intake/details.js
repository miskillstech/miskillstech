/**
 * Created by Hemkanta on 25/05/16.
 */

describe('Savantcare Intake App', function() {
    browser.ignoreSynchronization = false;
    var urlPath = "https://www.savantcare.com";
    //var urlPath = "https://172.16.54.129";
    var unixTime=new Date().getTime();
    it('Savantcare Intake: Able to load welcome page @Hemkanta Mehra', function () {
        browser.driver.manage().window().setSize(2600, 2100);
        browser.get(urlPath+'/my/#/intake/');
        expect(element(by.linkText('Here is a list of minimum required information for me to confirm your appointment')).getTagName()).toBe('a');
    });

    it('Savantcare Intake: Able to load required for Doctor\'s review page @Hemkanta Mehra', function () {
        element(by.linkText('Here is a list of minimum required information for me to confirm your appointment')).click();
        element(by.partialLinkText('Purpose of visit')).click();
        var writePurposeBtn = element(by.buttonText('Write purpose'));
        expect(writePurposeBtn.isPresent()).toBe(true);
    });
    it('Savantcare Intake: Able to go next page (Personal Contact) @Hemkanta Mehra', function () {
        element(by.linkText('Welcome')).click();
        element(by.partialLinkText('Start')).click();
        var writePurposeBtn = element(by.buttonText('Update Picture'));
        expect(writePurposeBtn.isPresent()).toBe(true);
    });
    it('Savantcare Intake: Able to update personal cell phone number (Personal Contact) @Hemkanta Mehra', function () {
        var writePurposeBtn = element(by.id('phoneNumber'));
        writePurposeBtn.clear().sendKeys('+91 8759526452');
        writePurposeBtn.sendKeys(protractor.Key.ENTER);
        //check update success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.css('#localMessage .alert-success'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('updated successfully'); return true;},
                function() { return false;}
            );
        },30000);
        //browser.sleep(1000);
        //var msgText = element(by.css('#localMessage .alert-success'));
        //expect(msgText.getText()).toBe('updated successfully');
    });
    it('Savantcare Intake: Able to update work landline phone number (Personal Contact) @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        var writePurposeBtn = element(by.id('workNumber'));
        writePurposeBtn.clear().sendKeys('+91 9932441103');
        writePurposeBtn.sendKeys(protractor.Key.ENTER);
        //check update success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.css('#localMessage .alert-success'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('updated successfully'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to update personal email (Personal Contact) @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        element(by.id('personalEmail')).click();
        var addPersonalEmail = element(by.id('addPersonalEmail'));
        addPersonalEmail.clear().sendKeys('hemkanta+personal+'+unixTime+'@grmtech.com');
        addPersonalEmail.sendKeys(protractor.Key.ENTER);
        //check update success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.css('#localMessage .alert-success'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('updated successfully'); return true;},
                function() { return false;}
            );
        },30000);
    });

    it('Savantcare Intake: Able to update work email (Personal Contact) @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        element(by.id('workEmail')).click();
        var addPersonalEmail = element(by.id('addWorkEmail'));
        addPersonalEmail.clear().sendKeys('hemkanta+work+'+unixTime+'@grmtech.com');
        addPersonalEmail.sendKeys(protractor.Key.ENTER);
        //check update success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.css('#localMessage .alert-success'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('updated successfully'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to add address @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        var addAddressBtn = element(by.partialLinkText('Add address'));
        addAddressBtn.click();
        var addressTypeBtn = element.all(by.name('addressType')).first();
        addressTypeBtn.click();
        var selectAddressBtn = element.all(by.name('selectAddressType')).first();
        selectAddressBtn.click();
        selectAddressBtn.sendKeys('Home');
        selectAddressBtn.sendKeys(protractor.Key.ENTER);
        //check add success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.id('addressAddUpdateMessage'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('Successfully added'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to add address line 1 (Personal contact --> Add address) @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        element.all(by.name('addressLine1')).first().click();
        var addAddressBtn = element.all(by.name('addAddressLine1')).first();
        addAddressBtn.sendKeys('Test Address Line 1');
        addAddressBtn.sendKeys(protractor.Key.ENTER);
        //check add success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.id('addressAddUpdateMessage'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('Successfully updated'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to add address line 2 (Personal contact --> Add address) @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        element.all(by.name('addressLine2')).first().click();
        var addAddressBtn = element.all(by.name('addAddressLine2')).first();
        addAddressBtn.sendKeys('Test Address Line 2');
        addAddressBtn.sendKeys(protractor.Key.ENTER);
        //check add success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.id('addressAddUpdateMessage'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('Successfully updated'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to add city (Personal contact --> Add address) @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        element.all(by.name('city')).first().click();
        var insertAddressBtn = element.all(by.name('addCity')).first();
        insertAddressBtn.sendKeys('Test City');
        insertAddressBtn.sendKeys(protractor.Key.ENTER);
        //check add success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.id('addressAddUpdateMessage'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('Successfully updated'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to add state (Personal contact --> Add address) @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        element.all(by.name('state')).first().click();
        var insertAddressBtn = element.all(by.name('addState')).first();
        insertAddressBtn.sendKeys('Test State');
        insertAddressBtn.sendKeys(protractor.Key.ENTER);
        //check add success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.id('addressAddUpdateMessage'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('Successfully updated'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to add city (Personal contact --> Add address) @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        element.all(by.name('country')).first().click();
        var insertAddressBtn = element.all(by.name('addCountry')).first().click();
        insertAddressBtn.sendKeys('Test Country');
        insertAddressBtn.sendKeys(protractor.Key.ENTER);
        //check add success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.id('addressAddUpdateMessage'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('Successfully updated'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to add zip code (Personal contact --> Add address) @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        element.all(by.name('zipCode')).first().click();
        var insertZipCodeBtn = element.all(by.name('addZipCode')).first();
        insertZipCodeBtn.sendKeys('12345');
        insertZipCodeBtn.sendKeys(protractor.Key.ENTER);
        //check add success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.id('addressAddUpdateMessage'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('Successfully updated'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to add another address (Personal contact --> Add address) @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        var addAddressBtn = element(by.partialLinkText('Add address'));
        addAddressBtn.click();
        var addressTypeBtn = element.all(by.name('addressType')).first();
        addressTypeBtn.click();
        var selectAddressBtn = element.all(by.name('selectAddressType')).first();
        selectAddressBtn.click();
        selectAddressBtn.sendKeys('Mail');
        selectAddressBtn.sendKeys(protractor.Key.ENTER);
        //check add success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.id('addressAddUpdateMessage'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('Successfully added'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to delete address (Personal contact --> Add address) @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        element.all(by.buttonText('Delete')).first().click();
        element(by.css('.btn-success .glyphicon-ok')).click();
        var text = element.all(by.name('addressType')).first();
        browser.wait(function() {
            return text.getText().then(
                function() { expect(text.getText()).toBe('Home'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to go next page (Emergency Contact) @Hemkanta Mehra', function () {
        element(by.partialLinkText('Next')).click();
        browser.ignoreSynchronization = false;
        var plusBtn = element(by.css('.plus-btn-white'));
        expect(plusBtn.isPresent()).toBe(true);
    });
    it('Savantcare Intake: Able to add Emergency Contact @Hemkanta Mehra', function () {
        var plusBtn = element(by.css('.plus-btn-white'));
        plusBtn.click();
        var emergencyContactNameBtn = element(by.id('emergencyContactName'));
        emergencyContactNameBtn.click();
        var insertEmergencyContactNameBtn = element(by.id('insertEmergencyContactName'));
        insertEmergencyContactNameBtn.sendKeys('Test Emergency Contact');
        insertEmergencyContactNameBtn.sendKeys(protractor.Key.ENTER);
        //check add success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.id('emergencyContactAddUpdateMessage'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('Created successfully'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to update Emergency Contact (Phone Number) @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        var emergencyPhoneNoBtn = element(by.id('emergencyPhoneNo_0'));
        emergencyPhoneNoBtn.click();
        emergencyPhoneNoBtn.sendKeys('+91 9932441103');
        emergencyPhoneNoBtn.sendKeys(protractor.Key.TAB);
        //check add success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.id('emergencyContactAddUpdateMessage'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('Updated successfully'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to go next page (Diagnoses) @Hemkanta Mehra', function () {
        element(by.partialLinkText('Next')).click();
        browser.ignoreSynchronization = false;
        var btn = element(by.id('hasSuicideDetail_yes'));
        expect(btn.isPresent()).toBe(true);
    });
    it('Savantcare Intake: Able to update diagnoses (medical or psychiatric disorder) @Hemkanta Mehra', function () {
        var progressbarSuccess = element(by.css('.progress-bar-success'));
        var previousSize = progressbarSuccess.getSize();
        var yesBtn = element(by.id('hasDiagnosesDetail_yes'));
        yesBtn.click();
        var presentSize = progressbarSuccess.getSize();
        expect(previousSize).not.toEqual(presentSize);
    });
    it('Savantcare Intake: Able to update diagnoses (attempted suicide) @Hemkanta Mehra', function () {
        var progressbarSuccess = element(by.css('.progress-bar-success'));
        var previousSize = progressbarSuccess.getSize();
        var noBtn = element(by.id('hasSuicideDetail_no'));
        noBtn.click();
        var presentSize = progressbarSuccess.getSize();
        expect(previousSize).not.toEqual(presentSize);
    });
    it('Savantcare Intake: Able to update diagnoses (climb stairs) @Anirban Ghosh', function () {
        var progressbarSuccess = element(by.css('.progress-bar-success'));
        var previousSize = progressbarSuccess.getSize();
        var yesBtn = element(by.id('canClimbStairs_yes'));
        yesBtn.click();
        var presentSize = progressbarSuccess.getSize();
        expect(previousSize).not.toEqual(presentSize);
    });
    it('Savantcare Intake: Able to go next page (Treatment) @Hemkanta Mehra', function () {
        element(by.partialLinkText('Next')).click();
        browser.ignoreSynchronization = false;
        var btn = element(by.id('hasMentalTreatmentDetail_no'));
        expect(btn.isPresent()).toBe(true);
    });
    it('Savantcare Intake: Able to update treatment @Hemkanta Mehra', function () {
        var progressbarSuccess = element(by.css('.progress-bar-success'));
        var previousSize = progressbarSuccess.getSize();
        var noBtn = element(by.id('hasMentalTreatmentDetail_no'));
        noBtn.click();
        var presentSize = progressbarSuccess.getSize();
        expect(previousSize).not.toEqual(presentSize);
    });
    it('Savantcare Intake: Able to go next page (Medications) @Hemkanta Mehra', function () {
        element(by.partialLinkText('Next')).click();
        browser.ignoreSynchronization = false;
        var btn = element(by.id('hasMedicineDetail_yes'));
        expect(btn.isPresent()).toBe(true);
    });
    it('Savantcare Intake: Able to add Medications @Hemkanta Mehra', function () {
        var yesbtn = element(by.id('hasMedicineDetail_yes'));
        yesbtn.click();
        element(by.id('addMedicineDetails')).click();
        var selectMedicine = element(by.model('query'));
        selectMedicine.click();
        selectMedicine.sendKeys('Le');
        selectMedicine.sendKeys(protractor.Key.TAB);
        //check add success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.id('medicineDetailsMessage'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('Successfully created'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to update Medications @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        var medicineFrom = element(by.id('medicineFrom'));
        medicineFrom.click();
        var selectMedicineFrom = element(by.id('selectMedicineFrom'));
        selectMedicineFrom.click();
        selectMedicineFrom.sendKeys('Oral solution');
        selectMedicineFrom.sendKeys(protractor.Key.TAB);
        //check add success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.id('medicineDetailsMessage'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('Successfully updated'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to remove Medications @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        var selectMedicine = element(by.buttonText('Remove'));
        selectMedicine.click();
        //check add success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.id('medicineDetailsMessage'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('Successfully deleted'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to go next page (Social) @Hemkanta Mehra', function () {
        element(by.partialLinkText('Next')).click();
        browser.ignoreSynchronization = false;
        var btn = element(by.id('highestEducation'));
        expect(btn.isPresent()).toBe(true);
    });
    it('Savantcare Intake: Able to add Social Details (Birth Place) @Hemkanta Mehra', function () {
        element(by.id('bornPlace')).click();
        var addBornPlace = element(by.id('addBornPlace'));
        addBornPlace.clear().sendKeys('Test Place');
        addBornPlace.sendKeys(protractor.Key.ENTER);
        //check add success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.id('socialDetailsMessage'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('Successfully saved'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to update Social Details (Birth Place) @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        element(by.id('bornPlace')).click();
        var addBornPlace = element(by.id('addBornPlace'));
        addBornPlace.clear().sendKeys('Test Place Updated');
        addBornPlace.sendKeys(protractor.Key.ENTER);
        //check add success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.id('socialDetailsMessage'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('Successfully updated birth place'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to add Social Details (Highest Qualification) @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        element(by.id('highestEducation')).click();
        var addHighestEducation = element(by.id('addHighestEducation'));
        addHighestEducation.clear().sendKeys('Test Qualification');
        addHighestEducation.sendKeys(protractor.Key.ENTER);
        //check add success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.id('socialDetailsMessage'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('Successfully saved'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to add Social Details (Highest Qualification) @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        element(by.id('highestEducation')).click();
        var addHighestEducation = element(by.id('addHighestEducation'));
        addHighestEducation.clear().sendKeys('Test Qualification Updated');
        addHighestEducation.sendKeys(protractor.Key.ENTER);
        //check add success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.id('socialDetailsMessage'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('Successfully updated education'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to go next page (Appointments) @Hemkanta Mehra', function () {
        element(by.partialLinkText('Next')).click();
        browser.ignoreSynchronization = false;
        var btn = element(by.id('objAppointment_0'));
        expect(btn.isPresent()).toBe(true);
    });
    it('Savantcare Intake: Able to go next page (Purpose of visit) @Hemkanta Mehra', function () {
        element(by.partialLinkText('Next')).click();
        var purposeOfVisit = element(by.id('purposeOfVisit_0'));
        expect(purposeOfVisit.isPresent()).toBe(true);
    });
    it('Savantcare Intake: Able to go next page (Purpose of visit) @Hemkanta Mehra', function () {
        var purposeOfVisit = element(by.id('purposeOfVisit_0'));
        purposeOfVisit.click();
        var progressbarSuccess = element(by.css('.progress-bar-success'));
        var previousSize = progressbarSuccess.getSize();
        var addHighestEducation = element(by.id('addPurposeOfVisit_0'));
        addHighestEducation.clear().sendKeys('Test Purpose');
        element(by.css('.editable-buttons .btn-primary .glyphicon-ok')).click();
        var presentSize = progressbarSuccess.getSize();
        expect(previousSize).not.toEqual(presentSize);
    });
    it('Savantcare Intake: Able to load Signature page (Policies) @Hemkanta Mehra', function () {
        element(by.partialLinkText('Next')).click();
        var load = element(by.css('.m-signature-pad'));
        expect(load.isPresent()).toBe(true);
    });
    it('Savantcare Intake: Able to load Financial policy page @Hemkanta Mehra', function () {
        element(by.partialLinkText('Next')).click();
        var load = element(by.css('.modal-body'));
        expect(load.isPresent()).toBe(true);
    });
    it('Savantcare Intake: Able to load Privicy policy page @Hemkanta Mehra', function () {
        element(by.partialLinkText('Next')).click();
        var load = element(by.css('.modal-body'));
        expect(load.isPresent()).toBe(true);
    });
    it('Savantcare Intake: Able to load Treatment contract page @Hemkanta Mehra', function () {
        element(by.partialLinkText('Next')).click();
        var load = element(by.css('.modal-body'));
        expect(load.isPresent()).toBe(true);
    });
    it('Savantcare Intake: Able to add payment option and signature in policies @Hemkanta Mehra', function () {
        element(by.partialLinkText('Signature')).click();
        var progressbarSuccess = element(by.css('.progress-bar-success'));
        var previousSize = progressbarSuccess.getSize();
        element(by.id('option_insurance')).click();
        element(by.css('.m-signature-pad > canvas')).click().click();
        element(by.css('.modal-footer .btn-primary')).click();
        var presentSize = progressbarSuccess.getSize();
        /*browser.wait(function() {
            return previousSize.not.toEqual(presentSize).then(
                function() { expect(previousSize).not.toEqual(presentSize); return true;},
                function() { return false;}
            );
        },30000);*/
    });
    it('Savantcare Intake: Able to load Why page (Payment options)', function(){
        element(by.partialLinkText('4. Payment options')).click();
        expect(element(by.tagName('footer')).getText()).toBe('Savant Care Team');
    });
    it('Savantcare Intake: Able to go next page (Bank authorization) @Hemkanta Mehra', function () {
        element(by.partialLinkText('Next')).click();
        var bankNameField = element(by.id('bankName'));
        expect(bankNameField.isPresent()).toBe(true);
    });
    it('Savantcare Intake: Able to add Account number (Bank authorization) @Hemkanta Mehra', function () {
        element(by.id('acNumber')).click();
        var addBornPlace = element(by.id('addAcNumber'));
        addBornPlace.clear().sendKeys('Test012345');
        addBornPlace.sendKeys(protractor.Key.ENTER);
        //check add success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.id('bankDetailsMessage'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('Bank account number has been saved.'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to add Routing number (Bank authorization) @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        element(by.id('routingNumber')).click();
        var addBornPlace = element(by.id('addRoutingNumber'));
        addBornPlace.clear().sendKeys('123456');
        addBornPlace.sendKeys(protractor.Key.ENTER);
        //check add success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.id('bankDetailsMessage'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('Bank routing number has been saved.'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to add Bank name (Bank authorization) @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        element(by.id('bankName')).click();
        var addBornPlace = element(by.id('addBankName'));
        addBornPlace.clear().sendKeys('Test Bank Name');
        addBornPlace.sendKeys(protractor.Key.ENTER);
        //check add success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.id('bankDetailsMessage'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('Name has been saved.'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to update Account number (Bank authorization) @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        element(by.id('acNumber')).click();
        var addBornPlace = element(by.id('addAcNumber'));
        addBornPlace.clear().clear().sendKeys('TEST0123456');
        addBornPlace.sendKeys(protractor.Key.ENTER);
        //check add success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.id('bankDetailsMessage'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('Bank account number has been changed.'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to update Routing number (Bank authorization) @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        element(by.id('routingNumber')).click();
        var addBornPlace = element(by.id('addRoutingNumber'));
        addBornPlace.clear().clear().sendKeys('1234567890');
        addBornPlace.sendKeys(protractor.Key.ENTER);
        //check add success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.id('bankDetailsMessage'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('Bank routing number has been changed.'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to update Bank name (Bank authorization) @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        element(by.id('bankName')).click();
        var addBornPlace = element(by.id('addBankName'));
        addBornPlace.clear().clear().sendKeys('Test Bank Name Update');
        addBornPlace.sendKeys(protractor.Key.ENTER);
        //check add success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.id('bankDetailsMessage'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('Name has been changed.'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to go next page (Credit Card) @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        element(by.partialLinkText('Credit card information')).click();
        var bankNameField = element(by.name('billingZipCode'));
        expect(bankNameField.isPresent()).toBe(true);
    });
    it('Savantcare Intake: Able to add Credit card number & check invalid card number (Credit Card) @Hemkanta Mehra', function () {
        var cardNo = element(by.name('CardNumber'));
        cardNo.click();
        cardNo.clear().sendKeys('1111111111111111');
        cardNo.sendKeys(protractor.Key.ENTER);
        //check add success message
        browser.ignoreSynchronization = true;

        var getAddMessage = element(by.id('creditCardDetailsMessage'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('Successfully created'); return true;},
                function() { return false;}
            );
        },30000);
        var cardStatus = element(by.className('unknown'));
        expect(cardStatus.isPresent()).toBe(true);
    });
    it('Savantcare Intake: Able to add Expiry date (Credit Card) @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        var cardExpiryDate = element(by.name('CardExpiry'));
        cardExpiryDate.click();
        cardExpiryDate.clear().sendKeys('11/2020');
        cardExpiryDate.sendKeys(protractor.Key.ENTER);
        //check add success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.id('creditCardDetailsMessage'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('Successfully updated expiration'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to add Card identification number (Credit Card) @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        var CardCvc = element(by.name('CardCvc'));
        CardCvc.click();
        CardCvc.clear().sendKeys('456');
        CardCvc.sendKeys(protractor.Key.ENTER);
        //check add success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.id('creditCardDetailsMessage'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('Successfully updated card identification number'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to update Credit card number & check valid card number (Credit Card) @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        var cardNo = element(by.name('CardNumber'));
        cardNo.click();
        cardNo.clear().sendKeys('4111111111111111');
        cardNo.sendKeys(protractor.Key.ENTER);
        //check add success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.id('creditCardDetailsMessage'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('Successfully updated credit card number'); return true;},
                function() { return false;}
            );
        },30000);
        var cardStatus = element(by.className('unknown'));
        expect(cardStatus.isPresent()).toBe(false);
    });
    it('Savantcare Intake: Able to add Billing zip code (Credit Card) @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        element(by.name('billingZipCode')).click();
        var addBillingZipCode = element(by.name('addBillingZipCode'));
        addBillingZipCode.clear().sendKeys('12345');
        addBillingZipCode.sendKeys(protractor.Key.ENTER);
        //check add success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.id('creditCardDetailsMessage'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('Successfully updated billing zip code'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to go next page (Insurance) @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        element(by.partialLinkText('Next')).click();
        var bankNameField = element(by.id('insuranceCompany'));
        expect(bankNameField.isPresent()).toBe(true);
    });
    it('Savantcare Intake: Able to add Insurance company name (Insurance) @Hemkanta Mehra', function () {
        element(by.id('insuranceCompany')).click();
        var addInsuranceCompany = element(by.id('addInsuranceCompany'));
        addInsuranceCompany.click();
        addInsuranceCompany.sendKeys('MHN/Health Net');
        addInsuranceCompany.sendKeys(protractor.Key.ENTER);
        //check add success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.id('InsuranceDetailsMessage'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('Successfully created'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to add Policy Number (Insurance) @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        element(by.id('policyNumber')).click();
        var addInsuranceCompany = element(by.id('addPolicyNumber'));
        addInsuranceCompany.clear().sendKeys('MHN01234567TEST');
        addInsuranceCompany.sendKeys(protractor.Key.ENTER);
        //check add success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.id('InsuranceDetailsMessage'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('Successfully updated policy Number'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to add Policy Name (Insurance) @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        element(by.id('policyName')).click();
        var addInsuranceCompany = element(by.id('addPolicyName'));
        addInsuranceCompany.clear().sendKeys('TEST POLICY NAME');
        addInsuranceCompany.sendKeys(protractor.Key.ENTER);
        //check add success message
        browser.ignoreSynchronization = true;
        var getAddMessage = element(by.id('InsuranceDetailsMessage'));
        browser.wait(function() {
            return getAddMessage.getText().then(
                function() { expect(getAddMessage.getText()).toBe('Successfully updated policy name'); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to click "Submit information for doctors review" @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        element(by.buttonText('Submit information for doctors review')).click();
        var getMessage = element(by.id('intakeComplete'));
        browser.wait(function() {
            return getMessage.getText().then(
                function() { expect(getMessage.getText()).toBe('Your documents are currently being reviewed by the medical team. Feel free to add more information. '); return true;},
                function() { return false;}
            );
        },30000);
    });
    it('Savantcare Intake: Able to go to Appointments page (Med/psych information)', function(){
        browser.ignoreSynchronization = false;
        element(by.partialLinkText('2. Med/psych information')).click();
        element(by.partialLinkText('Appointments')).click();
        var btn = element(by.id('objAppointment_0'));
        expect(btn.isPresent()).toBe(true);
    });
    it('Savantcare Intake: First appointment is in un-approved stage (Med/psych information) @Anirban Ghosh', function(){
        browser.ignoreSynchronization = false;
        var msg = element(by.id('firstAppointmentIsNotConfirmed'));
        expect(msg.isPresent()).toBe(true);
    });
    /*it('Savantcare Intake: Able to go request another appointment page @Hemkanta Mehra', function () {
        element(by.id('bookAnotherAppointmentBtn')).click();
        var firstVisitButton = element(by.id('firstTimeVisitBtn'));
        browser.wait(function() {
            return firstVisitButton.isPresent().then(
                function() { expect(firstVisitButton.isPresent()).toBe(true); return true;},
                function() { return false;}
            );
        },10000);
    });*/
    /*it('Savantcare Intake: Able to book another appointment @Hemkanta Mehra', function () {

        var timeSlotButton= element(by.id('slotDetails-0'));
        browser.wait(function() {
            return timeSlotButton.isPresent().then(
                function() {
                    browser.actions().mouseMove(timeSlotButton).perform();
                    timeSlotButton.click();
                    return true;
                },
                function() { return false; }
            );
        },10000);
        element(by.id('loginPass')).sendKeys('test1234');
        var submitButton = element(by.id('existingPatientSubmitBtn'));
        submitButton.click();
        /!*browser.wait(function() {
         return element.all(by.css('.nav-pills .cursorP')).first().then(
         function() {
         var welcomeTab = element.all(by.css('.nav-pills .cursorP')).first();
         expect(welcomeTab.getText()).toBe('Welcome');
         return true;
         },
         function() { return false; }
         );
         },10000);*!/
        var appointmentObject = element(by.id('objAppointment_0'));
        browser.wait(function() {
            return appointmentObject.isPresent().then(
                function() {
                    expect(appointmentObject.isPresent()).toBe(true);
                    return true;
                },
                function() { return false; }
            );
        },30000);
    });*/
    /*it('Savantcare Intake: Able to go to Appointment page and new appointment successfully added @Hemkanta Mehra', function(){
     element(by.partialLinkText('2. Med/psych information')).click();
     element(by.partialLinkText('Appointments')).click();
     var cancelButton = element(by.buttonText('Cancel'));
     expect(cancelButton.isPresent()).toBe(true);
     });*/
    /*it('Savantcare Intake: Able to cancel appointment @Hemkanta Mehra', function () {
        var cancelButton = element(by.buttonText('Cancel'));
        cancelButton.click();
        browser.wait(function() {
            return browser.switchTo().alert().then(
                function(alert) {
                    expect(alert.getText()).toEqual("Do you really want to cancel this appointment? Click OK to proceed. ");
                    alert.accept();
                    return true;
                },
                function() { return false; }
            );
        });
        expect(cancelButton.isPresent()).toBe(false);
    },30000);*/
    it('Savantcare Intake: Able to logout from intake app @Hemkanta Mehra', function () {
        browser.ignoreSynchronization = false;
        var logout = element(by.buttonText('Logout'));
        logout.click();
        var loginURL = urlPath+"/my/#/login";
        expect(browser.getCurrentUrl()).toEqual(loginURL);
    });
});
