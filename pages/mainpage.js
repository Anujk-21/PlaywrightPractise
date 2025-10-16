import { locator } from "../locators/mainlocators";
import testdata from "../data/data.json";
export class loginpage{
    constructor(page){
        this.page = page;
    }

    async navigate(){
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }

    async loginFun(){
        await this.page.locator(locator.username).fill(testdata[0].name);
        await this.page.locator(locator.password).fill(testdata[0].password);
        await this.page.locator(locator.login).click();
    }
}