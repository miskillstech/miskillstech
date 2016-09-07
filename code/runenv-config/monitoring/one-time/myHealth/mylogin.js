// spec.js content e.g.
describe('SC my App', function() {

   it('myPortal login should have a title @Arjun Kumar', function() {
	browser.get('https://www.savantcare.com/my/#/login');
	expect(browser.getTitle()).toEqual('Login to my health');
   });
    
   it('myPortal should redirect to the login page if trying to load protected page while not authenticated @Arjun Kumar', function() {
	browser.get('https://www.savantcare.com/my/#/user/440');
	loginURL = 'https://www.savantcare.com/my/#/login';
	expect(browser.getCurrentUrl()).toEqual(loginURL);
   });


   it('myPortal: Able to login @Arjun Kumar', function() {
	browser.get('https://www.savantcare.com/my/#/login');
       	var email = element(by.id('formly_1_input_email_0'));
	var password = element(by.id('formly_1_input_password_1'));
        var loginButton = element(by.buttonText('Login'));

        email.sendKeys('kedia.vikas@gmail.com');
	password.sendKeys('jaikalima');
        loginButton.click();
        var myElement = element(by.css('.logoutButton'));
        expect(myElement.isPresent()).toBe(true);
    });
    
});
