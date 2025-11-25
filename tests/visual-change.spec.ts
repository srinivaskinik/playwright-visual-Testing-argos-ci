import { test, expect } from '@playwright/test';

test('local visual regression check', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');

  // Simulated UI change
  // await page.addStyleTag({
  //   content: `
   //    h1 { color: blue !important; }
    //   .new-todo { border: 2px solid blue !important; }
     `
  // });

  // This will fail locally if UI differs
  await expect(page).toHaveScreenshot('homepage.png');
});
