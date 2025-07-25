import { Page } from "@playwright/test";
import { LogoutLocator } from "../locators/LogoutLocators";

export class LogoutPage {
    private page: Page;
    private logoutLocator: LogoutLocator;

    constructor(page: Page, logoutLocator: LogoutLocator) {
        this.page = page;
        this.logoutLocator = logoutLocator;
    }

    // Logout method with added wait for visibility
    async logout(Value: string): Promise<void> {
        // Wait for dropdown button to be visible
        await this.logoutLocator.waitForDropDownVisible();

        // Click on the dropdown (profile menu) to open it
        await this.logoutLocator.btnDropDown().click();

        // Wait for the logout button to be visible
        await this.logoutLocator.waitForLogoutButtonVisible(Value);

        // Click the logout button
        await this.logoutLocator.btnLogout(Value).click();
    }
}
