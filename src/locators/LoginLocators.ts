import { Locator, Page } from "@playwright/test";

export class LoginLocator {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async btnLogin(): Promise<Locator> {
         return this.page.locator('a[data-btn-type="start-free"]');
    }

    async Username(): Promise<Locator> {
        return this.page.locator('input[id="username"]');
    }

    async btnContinue(): Promise<Locator> {
        return this.page.locator('button[name="action"]');
    }

    async Password(): Promise<Locator> {
        return this.page.locator('input[type="password"]');
    }

    async btnSignin(): Promise<Locator> {
        return this.page.locator('button[type="submit"]');
    }
}
