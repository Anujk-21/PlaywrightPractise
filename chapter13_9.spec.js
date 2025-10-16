const {test, expect} = require("@playwright/test");
const data = require('../data/chapter13_9.json');


for(const credentials of data){
        test(`Login test for ${credentials.username}`, async({page})=>{
            await page.goto("https://www.saucedemo.com/v1/");

            await page.locator("#user-name").fill(credentials.username);
            await page.locator("#password").fill(credentials.password);
            await page.locator("#login-button").click();

            if(credentials.username === 'locked_out_user'){
                await expect(page.locator('[data-test="error"]')).toBeVisible();
                console.log(page.locator('[data-test="error"]').textContent());
            }else{
                await expect(page).toHaveURL(/inventory/);
            }

        });
}
