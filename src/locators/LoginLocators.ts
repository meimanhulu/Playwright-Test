import { Locator, Page } from "@playwright/test";

export class LoginLocator {
    // Login Locators
    username: Locator;
    password: Locator;
    btnLogin: Locator;
    btnContinue: Locator;
    btnSignin: Locator;

    constructor(page: Page) {
        // Login Locators
        this.username = page.locator('input[id="username"]');
        this.password = page.locator('input[type="password"]');
        this.btnLogin = page.locator('a[data-btn-type="start-free"]');
        this.btnContinue = page.locator('button[name="action"]');
        this.btnSignin = page.locator('button[type="submit"]');


    }
}
