// spec.js content e.g.
describe('SC Chat', function() {
    it('Able to load SC Chat', function() {
	// since this ia  non angular page
	browser.ignoreSynchronization = true; 
	browser.get('http://www.savantcare.com:3000/');
	expect(browser.getTitle()).toEqual('SC Chat');
   });
    
});
