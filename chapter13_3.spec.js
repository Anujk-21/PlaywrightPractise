const { test, expect } = require("@playwright/test");


test("Verify the title of a Website", async ({ page }) => {
  page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  ); // goto website
  await expect(page).toHaveTitle("OrangeHRM"); //check the title that orangehrm
  console.log(await page.title()); //print title
  //end
});