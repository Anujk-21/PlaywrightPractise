import {test, browser} from "@playwright/test";
let webcontext;
test.beforeAll(async({browser}) =>{
    const context = await browser.newContext();
    const page = await context.newPage();
    // await page.goto("https://rahulshettyacademy.com/client/auth/login/");
    // const username = "anuj@abc.com";
    // const pass = "Abc@1234";
    // await page.locator("#userEmail").fill(username);
    // await page.locator("#userPassword").fill(pass);
    // await page.click("#login");
    // // console.log(await page.title());
    // await page.waitForLoadState('networkidle');
    // await context.storageState({path: 'state.json'});
    webcontext = await browser.newContext({storageState:'state.json'});
});








test("miniProject", async() =>{
    const username = "anuj@abc.com";
    const pass = "Abc@1234";
    // await page.locator("#userEmail").fill(username);
    // await page.locator("#userPassword").fill(pass);
    // await page.click("#login");
    // console.log(await page.title());
    // await expect(page).toHaveTitle("Let's Shop");
    // await page.addInitScript(value => {
    //     window.localStorage.setItem('token', value)
    // }, response.token)
    const page = await webcontext.newPage();
    await page.goto("https://rahulshettyacademy.com/client/auth/login/");
    await page.waitForSelector('//div[@class="card-body"][.//b[contains(text(),"ADIDAS")]]//button[contains(@class,"btn")]');
    await page.locator('//div[@class="card-body"][.//b[contains(text(),"ADIDAS")]]//button[contains(@class,"btn")]').last().click();
    await page.locator('//button[contains(@routerlink,"/cart")]').click();
    await page.locator('//button[contains(text(),"Buy")]').click();
    // await expect(page.locator('//div[contains(@class,"mt-5")]//label')).toHaveText(username);
    await page.locator('input[name="coupon"]').fill("rahulshettyacademy");
    await page.locator('button', { hasText: 'Apply Coupon' }).click();
    console.log(await page.locator("p.ng-star-inserted").textContent());
    // await expect(page.locator("p.ng-star-inserted")).toHaveText("* Coupon Applied");
    await page.getByPlaceholder("Select Country").type("India");
    await page.locator(".ta-item").nth(1).click();
    await page.locator(".action__submit").click();
    await page.waitForSelector(".ng-star-inserted");
    const orderIdText = await page.locator(".ng-star-inserted").nth(2).textContent();
    const orderId = orderIdText.replace(/\|/g, '').trim();
    // console.log(orderId);
    await page.locator('//button[contains(@routerlink,"/cart")]').click();
})