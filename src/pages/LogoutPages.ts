import { Page } from "@playwright/test";
import { LogoutLocator } from "../locators/LogoutLocators";

export class LogoutPage {
    private page: Page;
    private LogoutLocator: LogoutLocator;

    constructor(page: Page, LogoutLocator: LogoutLocator) {
        this.page = page;
        this.LogoutLocator = LogoutLocator;
    }

    // Logout Process
    async waitForLoginSuccess(): Promise<void> {
        await this.LogoutLocator.btnDropDown.waitFor({ state: 'visible', timeout: 25000 });
    }
    
    async logout(Value: string): Promise<void> {
        await this.LogoutLocator.btnDropDown.waitFor({ state: 'visible', timeout: 25000 });
        await this.LogoutLocator.btnDropDown.click();
        await this.LogoutLocator.btnLogout.waitFor({ state: 'visible', timeout: 25000 });
        await this.LogoutLocator.btnLogout.click();
    }
}
