const{test, expect} = require("@playwright/test");
const data = require("../data/chapter13_8.json");
test("Verifying a Login functionality by using '@Parameters' annotation .", async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator('#username').fill(data.Username);
    await page.locator('#password').fill(data.Password);
    await page.locator('#submit').click();
    await expect(page.locator('.has-text-align-center > strong')).toHaveText("Congratulations student. You successfully logged in!");
})