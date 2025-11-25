import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/todoPage';

test.describe('Todo App - Additional Test Scenarios', () => {
  test.beforeEach(async ({ page }) => {
    const todo = new TodoPage(page);
    await todo.goto();
  });

  test('@visual mark todo as completed', async ({ page }) => {
    const todo = new TodoPage(page);
    await todo.addTodo('Buy milk');
    await todo.toggleTodo('Buy milk');
    await todo.expectCompletedCount(1);
  });

  test('@visual clear completed todos', async ({ page }) => {
    const todo = new TodoPage(page);
    await todo.addTodo('Walk dog');
    await todo.toggleTodo('Walk dog');
    await todo.clearCompleted();
    await todo.expectTodoCount(0);
  });

  test('@visual edit an existing todo', async ({ page }) => {
    const todo = new TodoPage(page);
    await todo.addTodo('Write todo');
    await todo.editTodo('Write todo', 'Write next day plans');
    await todo.expectTodoLabelExists('Write next day plans');
  });

  test('@visual delete a todo', async ({ page }) => {
    const todo = new TodoPage(page);
    await todo.addTodo('Clean room');
    await todo.deleteTodo('Clean room');
    await todo.expectTodoCount(0);
  });

  test('@visual filter active and completed todos', async ({ page }) => {
    const todo = new TodoPage(page);
    await todo.addTodo('Task 1');
    await todo.addTodo('Task 2');
    await todo.toggleTodo('Task 1'); // complete first

    await todo.filter('Active');
    await todo.expectTodoVisible('Task 2');
    await todo.expectTodoNotVisible('Task 1');

    await todo.filter('Completed');
    await todo.expectTodoVisible('Task 1');
    await todo.expectTodoNotVisible('Task 2');
  });
});
