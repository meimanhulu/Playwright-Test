import { Locator, Page } from "@playwright/test";

export class LoginLocator {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    Username(): Locator {
        return this.page.locator('input[name="username"]');
    }

    Password(): Locator{
        return this.page.locator('input[name="password"]');
    }

    btnLogin(): Locator{
        return this.page.locator('button[class*="orangehrm-login-button"]');
    }
}