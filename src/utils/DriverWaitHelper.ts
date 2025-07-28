import { Page, Locator } from '@playwright/test';

export class DriverWaitHelper {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForElement(selector: string, timeout: number = 30000): Promise<void> {
    await this.page.locator(selector).waitFor({ state: 'attached', timeout });
  }

  async waitForElementToDisappear(selector: string, timeout: number = 30000): Promise<void> {
    await this.page.locator(selector).waitFor({ state: 'detached', timeout });
  }

  async waitForElementVisible(selector: string, timeout: number = 30000): Promise<void> {
    await this.page.locator(selector).waitFor({ state: 'visible', timeout });
  }

  async waitForElementNotVisible(selector: string, timeout: number = 30000): Promise<void> {
    await this.page.locator(selector).waitFor({ state: 'hidden', timeout });
  }

  async waitForClickable(selector: string, timeout: number = 30000): Promise<void> {
    const element = this.page.locator(selector);
    await element.waitFor({ state: 'visible', timeout });
    const isDisabled = await element.isDisabled();
    if (isDisabled) {
      throw new Error(`Element ${selector} is disabled.`);
    }
  }

  async waitForElementWithText(selector: string, text: string, timeout: number = 30000): Promise<void> {
    const element = this.page.locator(selector);
    await element.waitFor({ state: 'visible', timeout });
    await element.locator(`text=${text}`).waitFor({ state: 'visible', timeout });
  }

  async waitForElementCondition(selector: string, condition: (el: Locator) => Promise<boolean>, timeout: number = 30000): Promise<void> {
    const element = this.page.locator(selector);
    const start = Date.now();
    while (Date.now() - start < timeout) {
      if (await condition(element)) {
        return;
      }
      await this.page.waitForTimeout(500);
    }
    throw new Error(`Condition not met for element ${selector} within timeout`);
  }
}
