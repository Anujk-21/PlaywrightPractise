const{test, expect, request} = require("@playwright/test");
const loginpayload = {userEmail: "anuj@anuj.com", userPassword: "Anuj2102@"};
const orderpayload = {orders: [{country: "Cuba", productOrderedId: "68a961459320a140fe1ca57a"}]}
import { APIUtitils } from "../utils/APIUtilis";
let response;
test.beforeAll(async ()=>{
    const apiContext = await request.newContext();
    const apiutitls = new APIUtitils(apiContext, loginpayload);
    response = await apiutitls.createOrder(orderpayload);


    // const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    //     {
    //         data:loginpayload
    //     }
    // );
    // expect((loginResponse).ok()).toBeTruthy();
    // const loginResponseJson = await loginResponse.json();
    // token = loginResponseJson.token;
    // console.log(token);

    // //new api context
    // const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
    //     {
    //         data:orderpayload,
    //         headers:{
    //             'authorization':token,
    //             'content-type': 'application/json'
    //         }

    //     }
    // );const orderResponseJson = await orderResponse.json();
    // console.log(orderResponseJson);
    // orderId = await orderResponseJson.orders[0];
    // console.log(orderId);
    

});

test("miniProject", async({page}) =>{
    // const username = "anuj@abc.com";
    // const pass = "Abc@1234";
    // await page.locator("#userEmail").fill(username);
    // await page.locator("#userPassword").fill(pass);
    // await page.click("#login");
    // console.log(await page.title());
    // await expect(page).toHaveTitle("Let's Shop");
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value)
    }, response.token)
    
    await page.goto("https://rahulshettyacademy.com/client/auth/login/");
    // await page.waitForSelector('//div[@class="card-body"][.//b[contains(text(),"ADIDAS")]]//button[contains(@class,"btn")]');
    // await page.locator('//div[@class="card-body"][.//b[contains(text(),"ADIDAS")]]//button[contains(@class,"btn")]').last().click();
    // await page.locator('//button[contains(@routerlink,"/cart")]').click();
    // await page.locator('//button[contains(text(),"Buy")]').click();
    // await expect(page.locator('//div[contains(@class,"mt-5")]//label')).toHaveText(loginpayload.userEmail);
    // await page.locator('input[name="coupon"]').fill("rahulshettyacademy");
    // await page.locator('button', { hasText: 'Apply Coupon' }).click();
    // console.log(await page.locator("p.ng-star-inserted").textContent());
    // await expect(page.locator("p.ng-star-inserted")).toHaveText("* Coupon Applied");
    // await page.getByPlaceholder("Select Country").type("India");
    // await page.locator(".ta-item").nth(1).click();
    // await page.locator(".action__submit").click();
    // await page.waitForSelector(".ng-star-inserted");
    // const orderIdText = await page.locator(".ng-star-inserted").nth(2).textContent();
    // const orderId = orderIdText.replace(/\|/g, '').trim();
    // // console.log(orderId);
    // await page.locator('//button[contains(@routerlink,"/cart")]').click();
})