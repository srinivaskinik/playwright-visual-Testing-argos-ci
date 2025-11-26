import { test } from '@playwright/test';
import { TodoPage } from '../pages/todoPage';
import { argosScreenshot } from '@argos-ci/playwright';

test.describe('Todo App - Baseline Visuals', () => {
  test('@visual @snapshot baseline screenshot', async ({ page }) => {
    const todo = new TodoPage(page);

    await todo.goto();
    //await todo.takeScreenshot('baseline-homepage.png');
    await argosScreenshot(page, 'baseline-homepage');
  });

  test('@visual @snapshot add todo item', async ({ page }) => {
    const todo = new TodoPage(page);

    await todo.goto();
    await todo.addTodo('Bring Grocery');
    await todo.addTodo('Walk the dog');
    await todo.expectTodoCount(2);

   // await todo.takeScreenshot('after-adding-todo.png');
    await argosScreenshot(page, 'after-adding-todo');
  });
});
