import { test, expect, chromium } from '@playwright/test';
// const{test} = require('@playwright/test')
import data from '../data/data.json'

test('has title', async ({ }) => {

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  page.on('dialog', async(dialog) => {
    console.log('Message : ', dialog.message())
    dialog.accept();
  });
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  await page.evaluate(() => {
    alert('Hello');
  })
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  const d = await page.locator("//span[@class='a-size-mini']").first().textContent();
  console.log(d);
//   const num = parseInt(d.split('%')[0]);
//   console.log(num);



  // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

//   const res = await page.evaluate((n) => {
//   return n % 2 === 0 ? "even" : "odd";
//     },num);

// const res= num%2==0?"Even":"Odd";
// console.log(res);
//   await page.pause();
});

for(const d of data){
test.only("data driven", async({page})=>{
    await page.goto("https://rahulshettyacademy.com/client/auth/login/");
    // const username = "anuj@abc.com";
    // const pass = "Abc@1234";
    await page.locator("#userEmail").fill(d.name);
    await page.locator("#userPassword").fill(d.password);
    await page.click("#login");
    console.log(await page.title());
})
}