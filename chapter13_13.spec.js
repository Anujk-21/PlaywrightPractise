const{test, expect} = require("@playwright/test");
const log4js = require("log4js");

//configure log4js
log4js.configure({
    appenders:{automation: {type: 'file', filename: 'automation.log'}},
    categories:{default:{appenders:['automation'], level:'info'}}
});

const logger = log4js.getLogger('automation');

const data = require("../data/chapter13_8.json");

test("Generating TestNG Reports andvLogs", async({page})=>{
    logger.info("browser open")
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    logger.info("Going to website")
    await page.locator('#username').fill(data.Username);
    logger.info("User name typed")
    await page.locator('#password').fill(data.Password);
    logger.info("Password Entered")
    await page.locator('#submit').click();
    logger.info("Clicked on submit")
    await expect(page.locator('.has-text-align-center > strong')).toHaveText("Congratulations student. You successfully logged in!");
    logger.info("Msg printed - Congratulations student. You successfully logged in!")
});