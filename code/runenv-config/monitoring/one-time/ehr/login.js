// spec.js content e.g.
describe('SC EMR App', function() {


   it('EMR login should have a title', function() {
	browser.get('https://www.savantcare.com/internal/#/login');
	expect(browser.getTitle()).toEqual('Login');
   });

   it('EMR should redirect to the login page if trying to load protected page while not authenticated', function() {
	browser.get('https://www.savantcare.com/internal/#/user/440');
	loginURL = 'https://www.savantcare.com/internal/#/login';
	expect(browser.getCurrentUrl()).toEqual(loginURL);
   });

   it('SCEMR: Able to login', function() {
	browser.get('https://www.savantcare.com/internal/#/login');
       	var email = element(by.id('formly_1_input_email_0'));
	var password = element(by.id('formly_1_input_password_1'));
        var loginButton = element(by.buttonText('Login'));

        email.sendKeys('kedia.vikas@gmail.com');
	password.sendKeys('jaikalima');
        loginButton.click();
        var myElement = element(by.css('.profileButton'));
        expect(myElement.isPresent()).toBe(true);
    });

});


