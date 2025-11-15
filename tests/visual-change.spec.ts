import { test } from '@playwright/test';
import { TodoPage } from '../pages/todoPage';

test.describe('Visual Change Demo', () => {
  test('modified UI screenshot', async ({ page }) => {
    const todo = new TodoPage(page);

    await todo.goto();

    await page.addStyleTag({
      content: `
        h1 {
          color: red !important;
        }
        .new-todo {
          border: 3px solid red !important;
        }
      `
    });

    await todo.takeScreenshot('baseline-homepage.png');
  });
});
