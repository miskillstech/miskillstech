describe('SC My health web App', function() {

    it('My health should have a title', function() {
	browser.get('https://www.savantcare.com/my/#/login');
	expect(browser.getTitle()).toEqual('Login to my health');
    });

    it('My health should redirect to the login page if trying to load protected page while not authenticated', function() {
	browser.get('https://www.savantcare.com/my/#/goals');
	loginURL = 'https://www.savantcare.com/my/#/login';
	expect(browser.getCurrentUrl()).toEqual(loginURL);
    });

});
