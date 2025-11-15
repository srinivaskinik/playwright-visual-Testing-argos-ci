import { Page, expect } from '@playwright/test';

export class TodoPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async addTodo(todo: string) {
    await this.page.locator('.new-todo').fill(todo);
    await this.page.locator('.new-todo').press('Enter');
  }

  async getTodos() {
    return this.page.locator('.todo-list li');
  }

  async expectTodoCount(count: number) {
    await expect(this.getTodos()).toHaveCount(count);
  }

  async takeScreenshot(name: string) {
    await expect(this.page).toHaveScreenshot(name);
  }
}
