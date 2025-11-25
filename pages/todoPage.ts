import { Page, expect } from '@playwright/test';

export class TodoPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://demo.playwright.dev/todomvc/#/');
  }

  async addTodo(todo: string) {
    await this.page.locator('.new-todo').fill(todo);
    await this.page.locator('.new-todo').press('Enter');
  }

   getTodos() {
    return this.page.locator('.todo-list li');
  }

  async expectTodoCount(count: number) {
    await expect(this.getTodos()).toHaveCount(count);
  }

  async takeScreenshot(name: string) {
    await expect(this.page).toHaveScreenshot(name);
  }

  async toggleTodo(label: string) {
    await this.page.locator(`xpath=//label[text()="${label}"]/../input`).check();
  }

  async clearCompleted() {
    await this.page.locator('.clear-completed').click();
  }

  async editTodo(oldText: string, newText: string) {
    const item = this.page.locator(`xpath=//label[text()="${oldText}"]`);
    await item.dblclick();
    const input = item.locator('xpath=../../input[contains(@class,"edit")]');
    await input.fill(newText);
    await input.press('Enter');
  }

  async deleteTodo(label: string) {
    const li = this.page.locator(`xpath=//label[text()="${label}"]/..`);
    await li.hover();
    await li.locator('.destroy').click();
  }

  async filter(type: 'All' | 'Active' | 'Completed') {
    await this.page.getByRole('link', { name: type }).click();
    
  }

  async expectTodoLabelExists(label: string) {
    await expect(this.page.locator(`xpath=//label[text()="${label}"]`)).toBeVisible();
  }

  async expectTodoVisible(label: string) {
    await expect(this.page.locator(`xpath=//label[text()="${label}"]`)).toBeVisible();
  }

  async expectTodoNotVisible(label: string) {
    await expect(this.page.locator(`xpath=//label[text()="${label}"]`)).not.toBeVisible();
  }

  async expectCompletedCount(count: number) {
    await expect(this.page.locator('.todo-list li.completed')).toHaveCount(count);
  }
}
