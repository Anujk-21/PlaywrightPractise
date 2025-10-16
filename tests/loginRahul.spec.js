import {test} from "@playwright/test";
import { loginpage } from "../pages/mainpage";

test.only("Login to Rahul ", async({page})=>{
    const login = new loginpage(page);
    await login.navigate();
    await login.loginFun();
})

test.skip("new context", async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.click("#")
    ])
});

