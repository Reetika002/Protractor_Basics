exports.config = {

    directConnect :true,
    //The address of a running selenium server
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    //Framework Used
    framework: 'jasmine',
    //Define which test to execute
    specs: ['spec1.js'],
  //  Define browser capabilities
    capabilities: {
        browserName: 'chrome'
    },

   
};