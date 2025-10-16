import { test } from '@playwright/test';

test('Travel Insurance Direct Jump with Session Storage', async ({ page }) => {
  await page.addInitScript(() => {
    sessionStorage.setItem('tripStartDate', '2025-10-21T00:00:00');
    sessionStorage.setItem('tripEndDate', '2025-10-30T00:00:00');
    sessionStorage.setItem('destinations', 'France');
    sessionStorage.setItem('travellers', '2 member(s)');
    sessionStorage.setItem('geography', 'Europe/Schengen');
    // Add any other keys the site expects
  });

  await page.goto('https://travel.policybazaar.com/newpq=1&utm_term=newjourney&utm_source=yahoo_brand&utm_medium=cpc&utm_campaign=PolicyBazaar00PolicyBazaar&msclkid=2bd82e7d53cc1006a2174690723d44f0&utm_content=newpq');

  await page.waitForLoadState('networkidle');
  await page.pause(); // Optional: inspect manually
});
