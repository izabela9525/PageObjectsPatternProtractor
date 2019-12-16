/**
 * Created by Selenium on 11-03-2016.
 */
require('../util/customlocators.js');

var HomePage = function(){

    this.loginAsCustomer = function(){

        element(by.partialButtonText("Customer")).click();
    };

    this.loginAsBankManager = function(){

        element(by.xpath("/html/body/div[3]/div/div[2]/div/div[1]/div[2]/button")).click();
        return require('./AddCustomerDetails.js');
    };

};
module.exports = new HomePage();
