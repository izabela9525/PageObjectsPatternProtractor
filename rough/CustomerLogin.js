var SelectWrapper = require('../util/select-wrapper.js');
var mySelect = new SelectWrapper(by.id("userSelect"));

describe("Automating Customer Login functionality", function () {

    it("Login to the Account", function () {

        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        element(by.xpath("/html/body/div[3]/div/div[2]/div/div[1]/div[1]/button")).click();
        mySelect.selectByText("Harry Potter");
        element(by.buttonText("Login")).click();
    });

    it("Validate Deposits", function () {
//button Deposit
        element(by.xpath("/html/body/div[3]/div/div[2]/div/div[3]/button[2]")).click();
        //Input Amount to be Deposited
        element(by.xpath("/html/body/div[3]/div/div[2]/div/div[4]/div/form/div/input")).sendKeys(("1000"));
        element(by.css(".btn.btn-default")).click();

        element(by.binding("message")).getText().then(function (text) {
            console.log(text);
        });

    });
})