var webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    test = require('selenium-webdriver/testing');

test.describe('Open browser page', function() {
    var driver;

    test.before(function() {
        var options = new chrome.Options();
        options.addArguments(["start-fullscreen"]);

        driver = new webdriver.Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();
        driver.getCapabilities().then(function(caps) {
            console.log(caps);
        });
    });

    test.it('should open google search page', function() {
        driver.get('http://www.google.com');
    });

    test.after(function() {
        driver.quit();
    });
});