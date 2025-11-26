import { test, expect } from '@playwright/test';
import { argosScreenshot } from '@argos-ci/playwright';

test('@visual @snapshot local visual regression check', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');



  // This will fail locally if UI differs
//  await expect(page).toHaveScreenshot('homepage.png');
  await argosScreenshot(page, 'visual_reg_check');
});
