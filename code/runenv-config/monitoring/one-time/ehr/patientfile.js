describe('SC EMR Patient file', function() {
   it('Able to load patient', function() {
       browser.get('https://www.savantcare.com/internal/#/user/440');
       var getEmrTab = element(by.id('emrTabId_440'));
       expect(getEmrTab);
    });


   it('Able to open appointment note', function() {
       
   });
});
