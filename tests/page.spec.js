import {test, expect, chromium} from "@playwright/test"
// test.describe.configure({mode:'serial'})
test("Open New Browser", async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.google.com/");
    expect.soft(page).toHaveTitle("Gooooogle");
    await page.locator("//textarea[@name='q']").pressSequentially("Cognizant");
    await page.keyboard.press('Enter');
    await page.waitForLoadState("domcontentloaded");
    await page.close();
})

test("Dialog box handle", async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.waitForSelector('//input[@id="alertbtn"]');
    page.on("dialog", dialog => {
        console.log(dialog.message());
        dialog.accept();
    });
    await page.locator("#name").pressSequentially("Anuj");
    await page.locator('//input[@id="alertbtn"]').click();
});

test("New Window Handle", async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    const [newWin] = await Promise.all([
        context.waitForEvent('page'),
        page.click("#openwindow")
    ])
    await newWin.waitForLoadState('domcontentloaded');
    console.log(await newWin.title());

    await newWin.close();
    await page.close();

});

test("New page Handle", async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    const [newWin] = await Promise.all([
        context.waitForEvent('page'),
        page.click("#opentab")
    ])
    await newWin.waitForLoadState('domcontentloaded');
    console.log(await newWin.title());

    await newWin.close();
    await page.close();

});

test("Handle Drop Down", async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.locator("#dropdown-class-example").selectOption({value:"option1"});
})

test("Take screen shot", async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.locator('//div[@class="nav-div"]//span[@class="icp-nav-link-inner"]').screenshot({path: 'logo.png'});

})

test("validate screenshot", async({page})=>{
    await page.goto("https://www.amazon.in/");
    await expect( page.locator('//div[@class="nav-div"]//span[@class="icp-nav-link-inner"]')).toHaveScreenshot();
})

test("drag and drop", async({page})=>{
    await page.goto("https://www.globalsqa.com/demo-site/draganddrop/#Photo%20Manager");
    await page.frameLocator('iframe').first().getByAltText('The peaks of High Tatras').dragTo(page.frameLocator('iframe').first().locator("#trash"));

})

