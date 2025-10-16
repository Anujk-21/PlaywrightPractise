const{test, expect} = require('@playwright/test')


test("Verify the Earned Interest, Total Value using Soft Assertions.", async ({
  page,
}) => {
  await page.goto("https://cleartax.in/s/compound-interest-calculator/"); // goto webiste
  expect(await page.locator("h1")).toHaveText("Compound Interest Calculator"); // scheck the header of the webiste
  console.log(await page.locator("h1").textContent()); //print heading
  await page.selectOption("#compoundFrequency", { value: "yearly" }); // select yearly
  await page.locator("#principleAmount").fill("7000"); // fill 7000
  await page.locator("#annualrate").fill("10"); // fill 10
  await page.selectOption("#periodUnit", { value: "years" }); // select years
  await page.locator("#periodInDigit").fill("1"); // fill 1
  let interest = await page
    .locator(
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span:nth-child(2)"
    )
    .textContent();
  await expect.soft(
    page.locator(
      "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span:nth-child(2)"
    )
  ).toHaveText("700"); // check that interest must be 700rs
  console.log(interest);
  await expect.soft(
    page.locator(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > span:nth-child(2)'
    )
  ).toHaveText("7,700"); // check that interest must be 700rs
  console.log(await page.locator(
      'body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > span:nth-child(2)'
    ).textContent());
});