describe('Demo test suite', function () {

    var firstNo = element(by.model('first'));
    var secondNo = element(by.model('second'));
    var doOperation = element(by.id('gobutton'));
    var actualResult = element(by.tagName('h2'));


    beforeEach(function () {
        browser.get('https://juliemr.github.io/protractor-demo/');
        browser.sleep(2000);

    });


    it('should verify the title of the page', async function(){
        await firstNo.sendKeys('2');
        await secondNo.sendKeys('6');
        await doOperation.click();
        await expect(actualResult.getText()).toEqual('8');
        
      });
});
