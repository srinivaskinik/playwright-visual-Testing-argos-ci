import { test, expect } from '@playwright/test';

test('local visual regression check', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');



  // This will fail locally if UI differs
  await expect(page).toHaveScreenshot('homepage.png');
});
