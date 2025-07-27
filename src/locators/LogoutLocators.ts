import { Page, Locator } from "@playwright/test";

export class LogoutLocator {

    // Logout Locators
    btnDropDown: Locator;
    btnLogout: Locator;

    constructor(page: Page) {
        // Logout Locators
        this.btnDropDown = page.locator('button[data-testid="account-settings-menu-trigger"]');
        this.btnLogout = page.locator('span:text("Sign out")');
    }
}
