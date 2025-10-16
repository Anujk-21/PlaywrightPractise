const {test, expect} = require("@playwright/test");

test("Verify Deposit and Withdrawal functionality", async({page}) =>{
    await page.goto("https://www.way2automation.com/angularjs-protractor/banking/#/login");
    await expect(page.locator('.mainHeading')).toHaveText("Way2Automation Banking App");
    await page.getByText("Customer Login").click();
    await page.selectOption("#userSelect",{value:'2'});
    await page.locator("button[type='submit']").click();
    await page.getByText("Deposit").click();
    await page.locator("input[type='number']").fill("1000");
    await page.locator("button[type='submit']").click();
    await expect(page.locator(".error.ng-binding")).toHaveText("Deposit Successful");
    await page.getByText("Withdrawl").click();
    await page.locator("input[type='number']").fill("100");
    await page.locator(".btn.btn-default").click();
    await expect(page.locator('.error.ng-binding')).toHaveText("Transaction successful");
    await page.locator(".btn.logout").click();
})