// spec.js content e.g.
describe('Create a new user', function() {
    it('from My Portal @M.K', function() {
		browser.get('https://www.savantcare.com/my/#/login');
		element(by.id('createNewAccount')).click();
		element(by.id('formly_2_input_firstName_0')).click().sendKeys('ProtractorTest');
		element(by.id('formly_2_input_lastName_1')).click().sendKeys('UserMy');
		exports.getRandomEmail = function () {
			var strValues = "abcdefghijklmnopz123456789";
			var strEmail = "protector-";
			for (var i = 0; i < strValues.length; i++) {
				strEmail = strEmail + strValues.charAt(Math.round(strValues.length * Math.random()));
			}
			return strEmail + "@test.com";
		};
		element(by.id('formly_2_input_email_0')).click().sendKeys(exports.getRandomEmail());
		element(by.id('formly_2_input_password_1')).click().sendKeys('1234567890');
		element(by.id('formly_2_input_phoneNumber_0')).click().sendKeys('1234567890');
		element(by.id('formly_2_select_gender_1')).click();
		element(by.id('select_option_2')).click();
		element(by.id('createButton')).click();

		var loginURL = 'https://www.savantcare.com/my/#/login/';
		expect(browser.getCurrentUrl()).toEqual(loginURL);
   });

});
