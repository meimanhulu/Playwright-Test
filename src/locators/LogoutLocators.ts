import { Page, Locator } from "@playwright/test";

export class LogoutLocator {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    btnDropDown(): Locator {
        return this.page.locator('button[data-testid="account-settings-menu-trigger"]');
    }

    btnLogout(Value: string): Locator {
        return this.page.locator(`//span[text()='${Value}']`);
    }

    async waitForDropDownVisible(timeout: number = 40000): Promise<void> {
        await this.page.waitForSelector('button[data-testid="account-settings-menu-trigger"]', { state: 'visible', timeout });
    }

    async waitForLogoutButtonVisible(Value: string, timeout: number = 40000): Promise<void> {
        await this.page.waitForSelector(`//span[text()='${Value}']`, { state: 'visible', timeout });
    }
}
