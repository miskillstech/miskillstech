// spec.js content e.g.
describe('SC-Brain Internal Chat', function() {

    it('Able to load SC-Brain Internal Chat @M.K', function() {
		browser.get('https://www.savantcare.com/internal/#/user/440');
		var getEmrTab = element(by.id('emrTabId_440'));
		getEmrTab.click();
		var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
		scBrainInput.sendKeys('help');
		scBrainInput.sendKeys(protractor.Key.ENTER);

		var scBrainMessageReceive = element(by.css('.msg_receive'));
		browser.wait(function (){
		 	return scBrainMessageReceive.isPresent();
		 }, 2000);
		 expect(scBrainMessageReceive.isPresent()).toBe(true);
		/*browser.ignoreSynchronization = true;
		browser.wait(function() {
			return element(by.css('.msg_receive')).then(
				function() {
					var scBrainMessageReceive = element(by.css('.msg_receive'));
					expect(scBrainMessageReceive.isPresent()).toBe(true);
					return true;
				}, function() {
					return false;
				}
			);
		}, 2000);
		browser.ignoreSynchronization = false;*/

   });

});
