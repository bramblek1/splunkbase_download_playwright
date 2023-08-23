import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  await page.goto('https://splunkbase.splunk.com/');
  await page.locator('[data-test="dropdown"]').click();
  await page.getByRole('menuitem', { name: 'Log In' }).click();
  await page.getByLabel('Email or Username').fill(process.env.SPLUNKBASE_USERNAME);
  await page.getByLabel('Password').fill(process.env.SPLUNKBASE_PASSWORD);
  await page.locator('[data-test="button"]').click();
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('https://splunkbase.splunk.com/');
  await page.locator('[data-test="monogram"]').click();
  await expect(page.locator('[data-test="dropdown"] [data-test="initials"]')).toBeVisible;
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  // await expect(page.getByRole('button', { name: 'View profile and more' })).toBeVisible();

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});