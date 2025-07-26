import { Page } from '@playwright/test';

export class DriverWaitHelper {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Waits for a specific event to occur.
   * @param eventName - The name of the event to wait for.
   * @param timeout - Time to wait before throwing an error, default is 30 seconds.
   */
  async waitForEvent(eventName: string, timeout: number = 30000): Promise<void> {
    console.log(`Waiting for event: ${eventName}`);
    try {
      // Ensure the timeout is correctly used inside the options object
      await this.page.waitForEvent(eventName, { timeout: timeout });
      console.log(`Event ${eventName} occurred.`);
    } catch (error) {
      console.error(`Error waiting for event: ${eventName}`, error);
    }
  }
}
