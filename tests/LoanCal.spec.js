import { test, expect } from "@playwright/test";

test("Interest Amount for Current Year", async ({ page }) => {
  await page.goto("https://emicalculator.net/");
  await page.waitForLoadState("networkidle");
  await test.step("Car Loan Interest Amount", async () => {
    await page.locator("#car-loan").click(); //click on car loan
    await page.locator("#loanamount").fill("1500000"); //fill loan amt
    await page.locator("#loaninterest").fill("9.5"); // fill loan interest
    await page.locator("#loanterm").fill("1"); //fill term 1 year
    await page.locator("#loanterm").press("Enter"); //fill term 1 year
    const PrincipalAmt = await page
      .locator("//td[@class='col-3 col-sm-2 currency']")
      .nth(2)
      .textContent(); //principle amt of 1 month
    const InterestAmt = await page
      .locator("//td[@class='col-3 col-sm-2 currency']")
      .nth(3)
      .textContent(); // interest amt of 1 month
    console.log(`Car Loan Principal Amt(one month) : ${PrincipalAmt}`);
    console.log(`Car Loan Interest Amt(one month) : ${InterestAmt}`);
  });
  await test.step("Home Loan Interest Amount", async () => {
    await page.locator('//a[@title="Loan Calculators & Widgets"]').click();
    await page
      .locator(
        '//li[@id="menu-item-3294"]//a[contains(text(),"Home Loan EMI Calculator")]'
      )
      .click(); //click on car loan
    await page.locator("#homeprice").fill("2500000"); //fill loan amt
    await page.locator("#homeloaninterest").fill("8.5"); // fill loan interest
    await page.locator("#homeloanterm").fill("10"); //fill term 1 year
    await page.keyboard.press("Enter"); //fill term 1 year
    const PrincipalAmt = await page
      .locator(
        "//div[@class='monthlypaymentcontainer']//td[@class='col-3 col-sm-2 currency']"
      )
      .nth(0)
      .textContent(); //principle amt of 1 month
    const InterestAmt = await page
      .locator(
        "//div[@class='monthlypaymentcontainer']//td[@class='col-3 col-sm-2 currency']"
      )
      .nth(1)
      .textContent(); // interest amt of 1 month
    console.log(`Home Loan Principal Amt(one month) : ${PrincipalAmt}`);
    console.log(`Home Loan Interest Amt(one month) : ${InterestAmt}`);
  });
  await test.step("Personal EMI Calculator", async () => {
    await page.locator('//a[@title="Loan Calculators & Widgets"]').click();
    await page.locator('//a[@title="Loan Calculator"]').click(); //click on car loan
    await page.locator("#loanamount").fill("1000000"); // fill loan amt
    await page.locator("#loaninterest").fill("10"); // fill loan interest
    await page.locator("#loanterm").fill("2"); //fill term 1 year
    await page.locator("#loanterm").press("Enter"); //fill term 1 year
    const PrincipalAmt = await page
      .locator("//td[@class='col-3 col-sm-2 currency']")
      .nth(2)
      .textContent(); //principle amt of 1 month
    const InterestAmt = await page
      .locator("//td[@class='col-3 col-sm-2 currency']")
      .nth(3)
      .textContent(); // interest amt of 1 month
    console.log(`Personal EMI Cal Principal Amt(one month) : ${PrincipalAmt}`);
    console.log(`Personal EMI Cal Amt(one month) : ${InterestAmt}`);
  });

  await test.step("Loan amount calculator (Year Wise Tensure)", async () => {
    await page.locator("#loan-amount-calc").click();
    await page.locator("#loanemi").fill("500000");
    await page.locator("#loaninterest").fill("11");
    await page.locator("#loanterm").fill("3");
    await page.locator("#loanterm").press("Enter"); //fill term 1 year
    const PrincipalAmt = await page
      .locator("//td[@class='col-3 col-sm-2 currency']")
      .nth(2)
      .textContent(); //principle amt of 1 month
    const InterestAmt = await page
      .locator("//td[@class='col-3 col-sm-2 currency']")
      .nth(3)
      .textContent(); // interest amt of 1 month
    console.log(`Loan amount Principal Amt(one month) : ${PrincipalAmt}`);
    console.log(`Loan amount Amt(one month) : ${InterestAmt}`);
  });

  await test.step("Loan amount calculator (month wise Tenure)", async () => {
    await page.locator("#loan-amount-calc").click(); //goto loan amt section
    await page.locator("#loanemi").fill("500000"); //fill loan emi
    await page.locator("#loaninterest").fill("11"); //fill interest
    await page
      .locator(
        '//div[@class="btn-group btn-group-toggle"]//label[text()="Mo "]'
      )
      .click(); //change toggle to "month"
    await page.locator("#loanterm").fill("18"); //fill loan term 18 months
    await page.locator("#loanterm").press("Enter"); //fill term 1 year
    const PrincipalAmt = await page
      .locator("//td[@class='col-3 col-sm-2 currency']")
      .nth(2)
      .textContent(); //principle amt of 1 month
    const InterestAmt = await page
      .locator("//td[@class='col-3 col-sm-2 currency']")
      .nth(3)
      .textContent(); // interest amt of 1 month
    console.log(`Loan amount Principal Amt(one month) : ${PrincipalAmt}`);
    console.log(`Loan amount Amt(one month) : ${InterestAmt}`);
  });

  await test.step("Loan Tenure calculator ", async () => {
    await page.locator("#loan-tenure-calc").click(); //goto loan tenure section
    await page.locator("#loanamount").fill("2500000"); // fill loan amt
    await page.locator("#loanemi").fill("80000"); //fill loan emi
    await page.locator("#loaninterest").fill("9.7"); // loan interest
    await page.locator("#loaninterest").press("Enter"); //press enter
    const LoanTenure = await page.locator("#loansummary-tenure").textContent(); // loan tenure
    console.log(`Loan Tenure : ${LoanTenure}`);
  });

  await test.step("Interest Rate Calculator ", async () => {
    await page.locator("#interest-rate-calc").click(); //goto interest rate cal
    await page.locator("#loanamount").fill("2500000"); // fill loan amt
    await page.locator("#loanemi").fill("80000"); //fill loan emi
    await page.locator("#loanterm").fill("7"); // loan term 7 years
    await page.locator("#loanterm").press("Enter"); //press enter
    const LoanInterestRate = await page
      .locator("#loansummary-interestrate")
      .textContent(); // loan Interest Rate
    console.log(`Loan Tenure : ${LoanInterestRate}`);
  });
});
