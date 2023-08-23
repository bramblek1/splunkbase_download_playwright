import { test, expect } from '@playwright/test';

test('download app', async ({ page }) => {
  const apps = [742, 833, 2846];
  for (const id of apps) {
    await page.goto(`https://splunkbase.splunk.com/app/${id}`);
    // await page.getByRole('tab', { name: 'Version History Version History' }).click();
    // await page.getByRole('row', { name: 'app icon 8.7.0 April 22, 2023 Splunk Enterprise, Splunk Cloud, Splunk IT Service Intelligence 9.1, 9.0, 8.2, 8.1 N/A Download' }).locator('a').click();
    await page.getByText('Download', { exact: true }).click();
    await page.getByText('I have read the terms and conditions of this license and agree to be bound by th').click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Agree to Download' }).click();
    const download = await downloadPromise;
    // https://playwright.dev/docs/downloads
    // Wait for the download process to complete
    // console.log(await download.path());
    // Save downloaded file somewhere
    await download.saveAs(`downloads/${download.suggestedFilename()}`);
  }
  await page.locator('[data-test="footer"] [data-test="button"]').click();
});