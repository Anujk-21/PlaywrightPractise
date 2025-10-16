const{test, expect} = require("@playwright/test");
//Parallel Execution Testing
test("Parallel 1", async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    console.log(await page.title());
    await expect(page).toHaveTitle("OrangeHRM");
});
test("Parallel 2", async({page})=>{
    await page.goto('https://www.google.com/');
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});

// make changes in config file to run parallel testing
