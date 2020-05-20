describe('Demo test suite', function () {

    var firstNo = element(by.model('first'));
    var secondNo = element(by.model('second'));
    var doOperation = element(by.id('gobutton'));
    var actualResult = element(by.tagName('h2'));



    beforeEach(function () {
        browser.get('https://juliemr.github.io/protractor-demo/');
        browser.sleep(2000);

    });


    it('should verify the title of the page', async function () {

        
        expect(browser.getTitle()).toEqual('Super Calculator');
        browser.sleep(2000);

        // browser.getTitle().then(function(title){
        //     console.log('Title :', title);

        // });

    });

    // Resolve promise using then 
    it('should verify the title of the page',function(){
        browser.getTitle().then(function(title){
            console.log('Title is:',title);
        })
    })

    // Resolve promise using then 
    // it('should verify the title of the page',function(){
    //     browser.getTitle().then(function(title){
    //         expect(title).toBe('Super Calculator');
    //         console.log('Title is:',title);
    //     })
    // })

    it('should verify the title of the page', async function(){
        let firstButton = element(by.css('.first-button'));
        let secondButton = element(by.css('.second-button'));
        console.log('None of the futtons have been clicked');
        await firstButton.click();
        console.log(`after click event completion of the first button but before the second button's click`);
        await secondButton.click();
        console.log(`after click event completion of the second button `);
      });


    xit('should add two numbers', function () {

        firstNo.sendKeys('2');
        secondNo.sendKeys('6');
        doOperation.click();
        expect(actualResult.getText()).toEqual('8');
        browser.sleep(2000);

    });

});