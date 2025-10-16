const{test,expect} = require("@playwright/test");

test.describe.configure({retries:3}); // it will retry failed test case 2 times
test("Re-run failed test case", async({page}) =>{
    await page.goto("https://automationbookstore.dev/");
    await expect(page).toHaveTitle("BookStore");
});