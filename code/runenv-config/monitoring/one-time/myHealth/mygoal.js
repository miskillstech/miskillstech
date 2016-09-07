// spec.js content e.g.
describe('SC myPortal goal panel', function() {


   /* it('myPortal: Able to login in myPortal @Arjun Kumar', function() {                          // before entering goal login inside myPortal.
        browser.get('https://www.savantcare.com/my/#/login');
        var email = element(by.id('formly_1_input_email_0'));
        var password = element(by.id('formly_1_input_password_1'));
        var loginButton = element(by.buttonText('Login'));

        email.sendKeys('kedia.vikas@gmail.com');
        password.sendKeys('jaikalima');
        loginButton.click();
        var myElement = element(by.css('.logoutButton'));
        expect(myElement.isPresent()).toBe(true);
    });*/


    it('add a new goal from myPortal @Arjun Kumar', function() {

        var goalPlugin = element.all(by.css('.medicalFileList .GoalPlugin')).click();

        var goallAddButton = element.all(by.css('.addNewGoalClass .btn-primary')).click();

        var emptyGoalLast =  element.all(by.css('#goalTbl #alternateColors tr')).last();

        var editableGoal = emptyGoalLast.element(by.css('.goalNameEditable'));
            editableGoal.click();

        var textAreaForGoal = emptyGoalLast.element(by.css('form textarea')).sendKeys('Goal for Protractor testing');
            emptyGoalLast.element(by.css('form .editable-buttons .btn-primary')).click();

        var addedGoalName = emptyGoalLast.element(by.css('.goalNameEditable')).getText();
        expect(addedGoalName).toEqual('Goal for Protractor testing');
    });

    it('edit goal from myPortal @Arjun Kumar', function() {

        var lastGoalRow = element.all(by.css('#goalTbl .ui-sortable tr')).last();
        var oldGoalName = lastGoalRow.element(by.css('.goalNameEditable')).getText();

        lastGoalRow.element(by.css('.goalNameEditable')).click(); //clicking on xeditable goal.
        var updatedGoalName = lastGoalRow.element(by.css('textarea')).sendKeys(' goal - Edited by Protractor');
        lastGoalRow.element(by.css('.editable-buttons .btn-primary')).click();

        var addedGoalName = lastGoalRow.element(by.css('.goalNameEditable')).getText();
        expect(addedGoalName).toEqual('Goal for Protractor testing goal - Edited by Protractor');

    });

    /*it('SCEMR: Able to login', function() {                              //not required already login.
        browser.get('https://172.16.54.129/internal/#/login');
        var email = element(by.id('formly_1_input_email_0'));
        var password = element(by.id('formly_1_input_password_1'));
        var loginButton = element(by.buttonText('Login'));

        email.sendKeys('arjun+test@test.com');
        password.sendKeys('123456');
        loginButton.click();
        var myElement = element(by.css('.profileButton'));
        expect(myElement.isPresent()).toBe(true);
    });*/

   /* it('able to load goal panel @Arjun Kumar', function() {
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
    });*/

    it('able to load EMR goal panel @Arjun Kumar', function() {
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

    it('able to delete goal  @Arjun Kumar', function() {
        var lastGoalRow = element.all(by.css('.allGoalDataTbody tr')).last();
        var deleteButton = lastGoalRow.element(by.css('.glyphicon-trash'));
        deleteButton.click();
        browser.sleep(1000);
        var confirmGoalDeletenBtn = element(by.css('.modal-body button'));
        confirmGoalDeletenBtn.click();
        expect(deleteButton);
    });


    it('myPortal logout @Arjun Kumar', function() {
        browser.get('https://www.savantcare.com/my/#/my-file');
        var logout = element(by.buttonText('Logout'));
            logout.click();
        var loginURL = "https://www.savantcare.com/my/#/login";

        expect(browser.getCurrentUrl()).toEqual(loginURL);
    });



});
