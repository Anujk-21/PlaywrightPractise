const {test,expect} = require("@playwright/test");

test.describe.configure({retries:2});
test("Re-run failed test case-Verify the functionality of BMI Calculator", async({page}) =>{
    await page.goto("https://www.calculator.net/bmi-calculator.html");
    await expect(page).toHaveTitle('BMI Calculator');

    await test.step("priority of one", async()=>{
        await page.locator('#cage').fill('40');
        await page.locator('#cheightmeter').fill('170');
        await page.locator('#ckg').fill('160');
        await page.locator('input[type*="submit"]').click();
        await page.waitForTimeout(2000)
        expect(await page.locator('.bigtext > b')).toHaveText('BMI = 20.8 kg/m2')
    });
    await test.step("priority of two", async()=>{
        await page.locator('#cage').fill('10');
        await page.locator('#cheightmeter').fill('90');
        await page.locator('#ckg').fill('60');
        await page.locator('input[type*="submit"]').click();
        await page.waitForTimeout(3000)
        expect(await page.locator('.bigtext > b')).toHaveText('BMI = 74.1 kg/m2')
    });
});