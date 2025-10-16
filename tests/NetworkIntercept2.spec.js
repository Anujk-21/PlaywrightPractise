import {test, expect} from "@playwright/test";

test("@QW Security test request intercept", async({page}) =>{
    await page.goto("https://rahulshettyacademy.com/client");
    const username = "anuj@abc.com";
    const pass = "Abc@1234";
    await page.locator("#userEmail").fill(username);
    await page.locator("#userPassword").fill(pass);
    await page.click("#login");
    console.log(await page.title());
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    await page.locator("button[routerlink*='myorders']").click();
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        route => route.continue({url:'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f6765465b6'})
    )
    await page.locator("button:has-text('view')").first().click();
    await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");
})