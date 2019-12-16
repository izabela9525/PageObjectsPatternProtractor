exports.config = {
    directConnect: true,
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine',
    seleniumAddress: 'https://localhost:4444/wd/hub',
    specs: ['../rough/CustomerLogin.js'],

    // suites:{
    //     smoke: ['./functional/*.spec.js'],
    //     regression: ['./regression/*.spec.js'],
    //     functional: ['./functional/*.spec.js'],
    //     all: ['./*/*.spec.js'],
    //     selected: ['./functional/addcustomer.spec.js']
    // },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
        //after this time I will get timeout error
    },

    onPrepare: function () {
        browser.ignoreSynchronization = true;
        // thanks to that I can tests nonangular app

        browser.driver.manage().timeouts().implicitlyWait(60000);
        //Override the timeout for webdriver
    }
};