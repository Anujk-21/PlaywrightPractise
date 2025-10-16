const{ test, expect } = require ('@playwright/test');


//  Select m as Unit
//  Select 'Male' as Gender.
//  Enter '30' in Age input field.
//  Enter '182' in Height input field.
//  Enter '80' in Weight input field.
//  Click on 'Calculate' button.
//  Verify if BMR is 1793 calories per day.


test('test_01_middle', async ({ page }) => {
    await page.goto("https://www.calculator.io/bmr-calculator/");
    await page.locator("path[d='M2 3.5L2 8.5M2 8L2 5.5C2 4.39543 2.89543 3.5 4 3.5C5.10457 3.5 6 4.39543 6 5.5M6 5.5L6 8.5M6 5.5L6 8M6 5.5C6 4.39543 6.89543 3.5 8 3.5C9.10457 3.5 10 4.39543 10 5.5V8.5']").click();
    await page.locator("#gender-1").click(); //select male
    await page.locator("#age").fill("30");
    await page.locator("#height").fill("182");
    await page.locator("#weight").fill("80");
    await page.locator("#action-button").click();
    console.log(await page.locator("#bmr").first().textContent());
    await expect(page.locator("#bmr").first()).toHaveText('1,793');
  });

test('test_02_middle', async ({ page }) => {
  await page.goto("https://www.calculator.io/bmr-calculator/");
  await page.locator("path[d='M2 3.5L2 8.5M2 8L2 5.5C2 4.39543 2.89543 3.5 4 3.5C5.10457 3.5 6 4.39543 6 5.5M6 5.5L6 8.5M6 5.5L6 8M6 5.5C6 4.39543 6.89543 3.5 8 3.5C9.10457 3.5 10 4.39543 10 5.5V8.5']").click();
  await page.locator("#gender-2").click(); //select femalee
  await page.locator("#age").fill("30");
  await page.locator("#height").fill("182");
  await page.locator("#weight").fill("80");
  await page.locator("#action-button").click();
  console.log(await page.locator("#bmr").first().textContent());
  await expect(page.locator("#bmr").first()).toHaveText('1,627');
});
test('test_03', async ({ page }) => {
  await page.goto("https://www.calculator.io/bmr-calculator/");
  await page.locator("path[d='M2 3.5L2 8.5M2 8L2 5.5C2 4.39543 2.89543 3.5 4 3.5C5.10457 3.5 6 4.39543 6 5.5M6 5.5L6 8.5M6 5.5L6 8M6 5.5C6 4.39543 6.89543 3.5 8 3.5C9.10457 3.5 10 4.39543 10 5.5V8.5']").click();
  await page.locator("#gender-1").click(); //select male
  await page.locator("#age").fill("80");
  await page.locator("#height").fill("176");
  await page.locator("#weight").fill("76");
  await page.locator("#action-button").click();
  console.log(await page.locator("#bmr").first().textContent());
  await expect(page.locator("#bmr").first()).toHaveText('1,465');
});
test('test_04', async ({ page }) => {
  await page.goto("https://www.calculator.io/bmr-calculator/");
  await page.locator("path[d='M2 3.5L2 8.5M2 8L2 5.5C2 4.39543 2.89543 3.5 4 3.5C5.10457 3.5 6 4.39543 6 5.5M6 5.5L6 8.5M6 5.5L6 8M6 5.5C6 4.39543 6.89543 3.5 8 3.5C9.10457 3.5 10 4.39543 10 5.5V8.5']").click();
  await page.locator("#gender-2").click(); //select female
  await page.locator("#age").fill("80");
  await page.locator("#height").fill("176");
  await page.locator("#weight").fill("76");
  await page.locator("#action-button").click();
  console.log(await page.locator("#bmr").first().textContent());
  await expect(page.locator("#bmr").first()).toHaveText('1,299');
});

// use --grep "middle$" to filter and only run perticular matching testcase