const{test, page, expect} = require("@playwright/test");

test("Verify the Login and Logout functionality.", async({page}) =>{
    await page.goto("https://opensource-demo.orangehrmlive.com/"); // goto webiste
    await page.getByPlaceholder("Username").fill("Admin"); // enter username
    await page.getByPlaceholder("Password").fill("admin123"); // enter password
    await page.locator("button[type='submit']").click(); // click login
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'); // check for dashboard url
    await page.getByAltText('profile picture').click();
    await page.getByText("Logout").click();
    await expect(page.getByAltText('company-branding')).toBeVisible();
});