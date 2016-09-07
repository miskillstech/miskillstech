// spec.js content e.g.
describe('SC EMR careTeam panel', function() {
    it('able to load careTeam panel @Arjun Kumar', function() {
        browser.get('https://www.savantcare.com/internal/#/user/440');
        var getEmrTab = element(by.id('emrTabId_440')).click();
        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('care');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        var careTeamPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Care team';
            });
        }).first();
        expect(careTeamPanelHeading.isPresent()).toBe(true);
    });

    it('add a new careteam @Arjun Kumar', function() {
        var careTeamPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Care team';
            });
        }).first();
        browser.actions().mouseMove(careTeamPanelHeading).perform();
        element(by.css('.addCareTeam')).click();

        //browser.sleep(7000);
        var lastCareTeamList = element.all(by.css('.careTeamContainer .careTeamList')).last();
            lastCareTeamList.element(by.css('.input-group .input-group-addon')).click();
        //browser.sleep(7000);

        var teamListOption = lastCareTeamList.element(by.css('.input-group form select'));
            teamListOption.element(by.cssContainingText('option', 'Primary team')).click();
        //browser.sleep(9000);

        /*var doctorsListOption = lastCareTeamList.element(by.css('.input-group oi-select'));
            doctorsListOption.click();
            doctorsListOption.element(by.css('.select-search ul .select-search-list-item_input input')).sendKeys('Dr. Test Doctor team').sendKeys(protractor.Key.ENTER);
        browser.sleep(9000);*/

     expect(careTeamPanelHeading.isPresent()).toBe(true);

    });

    it('edit careteam @Arjun Kumar', function() {

        var lastCareTeamList = element.all(by.css('.careTeamContainer .careTeamList')).last();

        var doctorsListOption = lastCareTeamList.element(by.css('.input-group oi-select'));
        doctorsListOption.click();
        doctorsListOption.element(by.css('.select-search ul .select-search-list-item_input input')).sendKeys('Dr. Test Doctor team').sendKeys(protractor.Key.ENTER);
        //browser.sleep(9000);

        expect(doctorsListOption.isPresent()).toBe(true);

    });


});
