import { test } from '@playwright/test';
import { TodoPage } from '../pages/todoPage';

test.describe('Todo App - Baseline Visuals', () => {
  test('baseline screenshot', async ({ page }) => {
    const todo = new TodoPage(page);

    await todo.goto();
    await todo.takeScreenshot('baseline-homepage.png');
  });

  test('add todo item', async ({ page }) => {
    const todo = new TodoPage(page);

    await todo.goto();
    await todo.addTodo('Bring Grocery');
    await todo.addTodo('Walk the dog');
    await todo.expectTodoCount(2);

    await todo.takeScreenshot('after-adding-todo.png');
  });
});
