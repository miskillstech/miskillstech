/**
 * Created by Hemkanta on 26/05/16.
 */
describe('Savantcare Intake App', function() {
    browser.ignoreSynchronization = false;
    var urlPath = "https://www.savantcare.com";
    it('Savantcare Intake: Login should have a title @Hemkanta Mehra', function() {
        browser.driver.manage().window().setSize(2600, 2100);
        browser.get(urlPath+'/my/#/login');
        expect(browser.getTitle()).toEqual('Login to my health');
    });

    it('Savantcare Intake: Intake should redirect to the login page if trying to load protected page while not authenticated @Hemkanta Mehra', function() {
        browser.get(urlPath+'/my/#/intake/');
        loginURL = urlPath+'/my/#/login';
        expect(browser.getCurrentUrl()).toEqual(loginURL);
    });

    it('Savantcare Intake: Able to login intake app @Hemkanta Mehra', function () {
        browser.get(urlPath+'/my/#/login');
        element(by.id('formly_1_input_email_0')).sendKeys('hemkanta@grmtech.com');
        element(by.id('formly_1_input_password_1')).sendKeys('kanta9932');
        //element(by.id('formly_1_input_email_0')).sendKeys('hemkanta+1464244470496@grmtech.com');
        //element(by.id('formly_1_input_email_0')).sendKeys('hemkanta+11@grmtech.com');
        //element(by.id('formly_1_input_password_1')).sendKeys('test1234');
        element(by.buttonText('Login')).click();
        var logout = element(by.buttonText('Logout'));
        expect(logout.isPresent()).toBe(true);
    });

    it('Savantcare Intake: Able to logout from intake app @Hemkanta Mehra', function () {
        var logout = element(by.buttonText('Logout'));
        logout.click();
        var loginURL = urlPath+"/my/#/login";
        expect(browser.getCurrentUrl()).toEqual(loginURL);
    });
});