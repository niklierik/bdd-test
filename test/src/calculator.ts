import { expect, Page } from "@playwright/test";

export class Calculator {
  public constructor(private readonly page: Page) {}

  public async open() {
    await this.page.goto("http://localhost:8080");
  }

  public async type(text: string) {
    for (const letter of text) {
      await this.page.getByText(letter, { exact: true }).click();
    }
  }

  public async clear(): Promise<void> {
    await this.page.getByText("C", { exact: true }).click();
  }

  public async testScreenValue(expected: string): Promise<void> {
    const result = this.page.locator("#screen");
    await expect(result).toHaveValue(expected);
  }
}
