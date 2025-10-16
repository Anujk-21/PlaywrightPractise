import {test, expect, request} from "@playwright/test";

import { APIUtitils } from "../utils/APIUtilis";
import { waitForDebugger } from "inspector";

const loginpayload = {userEmail: "anuj@anuj.com", userPassword: "Anuj2102@"};
const orderpayload = {orders: [{country: "Cuba", productOrderedId: "68a961459320a140fe1ca57a"}]}

const fakepayload = { data: [], message: "No Orders"};

let response;
test.beforeAll(async ()=>{
    const apiContext = await request.newContext();
    const apiutitls = new APIUtitils(apiContext, loginpayload);
    response = await apiutitls.createOrder(orderpayload);
});

test("@SP Place the order", async({page}) =>{
    page.addInitScript(value => {
        window.localStorage.setItem('token',value);
    }, response.token);
    await page.goto("https://rahulshettyacademy.com/client");

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
        async route => {
            const response = await page.request.fetch(route.request());
            let body = JSON.stringify(fakepayload);
            route.fulfill({
                response,
                body,
            });
            //intercepting reponse -API response -> {playwright fake response} -> browser -> render data on front end
        }
    );
    await page.locator("button[routerlink*='myorders']").click();
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
    await page.pause();
});