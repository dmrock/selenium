const webdriver = require('selenium-webdriver'),
      chrome = require('selenium-webdriver/chrome'),
      By = webdriver.By,
      Key = webdriver.Key,
      until = webdriver.until,
      test = require('selenium-webdriver/testing');

test.describe('Google Search', function() {
    let driver;

    test.before(function() {
        const options = new chrome.Options();
        options.addArguments(["start-fullscreen"]);

        driver = new webdriver.Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();
        driver.getCapabilities().then(function(caps) {
            console.log(caps);
        });
    });

    test.it('should append query to title', function() {
        driver.get('http://www.google.com');
        driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        driver.wait(until.titleIs('webdriver - Поиск в Google'), 10000);

    });

    test.after(function() {
        driver.quit();
    });
});