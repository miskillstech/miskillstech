// spec.js content e.g.
describe('SC EMR scanned docs section: ', function() {

    it('upload file into ftp server @M.K', function() {
        browser.ignoreSynchronization = true;
        browser.get('https://www.savantcare.com/api/fileUploadIntoDroneFtpServer');
        var getFileUploadedMessage = element(by.css('body pre'));
        expect(getFileUploadedMessage.isPresent()).toBe(true);
    });
    it('able to load drive section @M.K', function() {
        browser.ignoreSynchronization = false;
        browser.get('https://www.savantcare.com/internal/#/drive');
        var getEmrTab = element(by.id('emrTabId_0021')).click();
        var getLoadedDrivePage = element(by.id('driveTitleID'));
        expect(getLoadedDrivePage.isPresent()).toBe(true);
    });
    it('upload scantoemr file in drive section @M.K', function() {
        var getSearchNameField = element(by.id('stNameIdForDrive')).click().sendKeys('scannedDocProtectorTest');
        //browser.sleep(15000);
        var getSearchRow = element(by.id('driveTableBodyRowIdUsePrTest_0'));
        expect(getSearchRow.isPresent()).toBe(true);
        /*browser.wait(function() {
            var getSearchRow = element(by.id('driveTableBodyRowIdUsePrTest_0'));
            return getSearchRow.isPresent().then(
                function() { expect(getSearchRow.isPresent()).toBe(true); return true;}
            );
        },30000);*/
    });
    it('able to delete scantoemr file from drive @M.K', function() {
        var firstScantoemrFileRow = element(by.id('driveTableBodyRowIdUsePrTest_0'));
        browser.actions().mouseMove(firstScantoemrFileRow).perform();
        var deleteDriveButton = element(by.id('videoFile_0'));
        deleteDriveButton.click();
        var confirmButton = element(by.css('.modal-body button.btn-success'));
        confirmButton.click();
        expect(deleteDriveButton);
    });

});


