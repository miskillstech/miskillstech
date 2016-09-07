// spec.js content e.g.
describe('SC EMR documents panel', function() {

    it('able to load documents panel @Arjun Kumar', function() {
        browser.get('https://www.savantcare.com/internal/#/user/440');
        var getEmrTab = element(by.id('emrTabId_440')).click();
        var scBrainInput = browser.findElement(by.className('withoutAutoCompleteInput'));
        scBrainInput.sendKeys('documents');
        scBrainInput.sendKeys(protractor.Key.ENTER);
        var documentsPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Documents';
            });
        }).first();
        expect(documentsPanelHeading.isPresent()).toBe(true);
    });

    it('documents list load first time from server @Arjun Kumar', function() {

        var documentsListTable =  element(by.css('#allDocumentsListTbl thead'));
        expect(documentsListTable.isPresent()).toBe(true);
    });

    it('should upload file', function() {

        var documentsPanelHeading = element.all(by.css('.panel-heading')).filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === 'Documents';
            });
        }).first();
        browser.actions().mouseMove(documentsPanelHeading).perform();
        element(by.css('.newDocumentsCls')).click();

        element(by.css('#documentsModalFormId #folder')).sendKeys("TestFolder adding by protractor.");

        //var fileToUpload = 'https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/leisa_christmas_false_color.png';
        //var absolutePath = path.resolve(__dirname,fileToUpload);
       // $('input[type="file"]').sendKeys(absolutePath);

        $('#uploadButton').click();

        var folderNameAdd = element(by.css('.folderName_0')).getText();
        expect(folderNameAdd).toEqual('TestFolder adding by protractor.');
    });


    it('should edit documents', function() {

        var folderNameAdd = element(by.css('.folderName_0'));
        folderNameAdd.click();
        var nameClickForProtractor = element(by.css('.nameClickForProtractor'));
        browser.actions().mouseMove(nameClickForProtractor).perform();
        nameClickForProtractor.click();

        element(by.css('#documentsModalFormId #folder')).clear().sendKeys("TestFolder -Edited b y Protractor.");

        $('#uploadButton').click();

        var folderNameAdd = element(by.css('.folderName_0')).getText();
        expect(folderNameAdd).toEqual('TestFolder -Edited b y Protractor.');

    });


    it('should delete documents', function() {

        var dltBtn = element(by.css('#allDocumentsListTbl #docsDlt_0')).click();
        browser.switchTo().alert().accept();
    });



});
