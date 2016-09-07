// spec.js content e.g.
describe('Create a new user', function() {

    it('from Master DB @M.K', function() {
		browser.get('https://www.savantcare.com/internal/#/masterdb');
		var getEmrTab = element(by.id('emrTabId_005'));
		getEmrTab.click();
		exports.getRandomEmail = function () {
			var strValues = "abcdefghijklmnopz123456789";
			var strEmail = "protector-";
			for (var i = 0; i < strValues.length; i++) {
				strEmail = strEmail + strValues.charAt(Math.round(strValues.length * Math.random()));
			}
			return strEmail + "@test.com";
		};
		element(by.id('userOfMasterDb')).click();
		element(by.id('addUserFromMdb')).click();
		element(by.id('fname')).sendKeys('Protractor');
		element(by.id('lname')).sendKeys('User');
		element(by.id('dob')).sendKeys('02-05-1995');
		element(by.id('email')).sendKeys(exports.getRandomEmail());
		element(by.id('gender')).click().sendKeys(protractor.Key.ARROW_DOWN).sendKeys(protractor.Key.ENTER);
		element(by.id('role')).click().sendKeys(protractor.Key.ARROW_DOWN).sendKeys(protractor.Key.ARROW_DOWN).sendKeys(protractor.Key.ARROW_DOWN).sendKeys(protractor.Key.ARROW_DOWN).sendKeys(protractor.Key.ARROW_DOWN).sendKeys(protractor.Key.ENTER);
		element(by.id('password')).click().sendKeys('123');
		element(by.buttonText('Submit')).click();
		var successOrNot = element(by.buttonText('Go to users list'));

		expect(successOrNot.isPresent()).toBe(true);
   });
});
