var webdriver = require('selenium-webdriver'),
    safari = require('selenium-webdriver/safari'),
    By = webdriver.By,
    until = webdriver.until,
    test = require('selenium-webdriver/testing');

test.describe('Open admin page, login as admin', function() {
    var driver;

    test.before(function() {
        var options = new safari.Options();

        driver = new webdriver.Builder()
            .forBrowser('safari')
            .setSafariOptions(options)
            .build();
        driver.getCapabilities().then(function(caps) {
            console.log(caps);
        });
    });

    test.it('should open admin page and login as admin', function() {
        driver.get('http://localhost:8888/litecart/admin');
        driver.findElement(By.name('username')).sendKeys('admin');
        driver.findElement(By.name('password')).sendKeys('admin');
        driver.findElement(By.name('login')).click();
        driver.wait(until.titleIs('My Store'), 1000);
    });

    test.after(function() {
        driver.quit();
    });
});