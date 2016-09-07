// spec.js content e.g.
describe('SC EMR App', function() {

	it( 'Internal: Checking forgot password', function () {
		browser.get('https://www.savantcare.com/internal/#/login');
		var forgotPasswordLinkText = element(by.className('forProtractorTestForgotPassword'));
		forgotPasswordLinkText.click();
		var forgotPasswordSubmitButton = element(by.buttonText('Submit'));
		var email = element(by.id('formly_3_input_email_0'));
		email.sendKeys('kiran@grmtech.com');
		forgotPasswordSubmitButton.click();

		loginURL = 'https://www.savantcare.com/internal/#/login';
		expect(browser.getCurrentUrl()).toEqual(loginURL);
	});

	it( 'My: Checking forgot password', function () {
		browser.get('https://www.savantcare.com/my/#/login');
		var forgotPasswordLinkText = element(by.className('forProtractorTestForgotPassword'));
		forgotPasswordLinkText.click();
		var forgotPasswordSubmitButton = element(by.buttonText('Submit'));
		var email = element(by.id('formly_2_input_email_0'));
		email.sendKeys('kiran@grmtech.com');
		var radioButtonClick = element(by.id('radio_0'));
		radioButtonClick.click();
		forgotPasswordSubmitButton.click();

		loginURL = 'https://www.savantcare.com/my/#/login/';
		expect(browser.getCurrentUrl()).toEqual(loginURL);
	});
});
