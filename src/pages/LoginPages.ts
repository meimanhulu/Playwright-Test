import { Page } from "@playwright/test";
import { LoginLocator } from "../locators/LoginLocators";

export class LoginPage {
    private page: Page;
    private loginLocator: LoginLocator;

    constructor(page: Page, loginLocator: LoginLocator) {
        this.page = page;
        this.loginLocator = loginLocator;
    }

    async clickLoginButton(): Promise<void> {
        await this.loginLocator.btnLogin.click();
    }

    async enterUsername(username: string): Promise<void> {
        await this.loginLocator.username.fill(username);
        await this.loginLocator.btnContinue.waitFor({ state: 'visible', timeout: 5000 });
        await this.loginLocator.btnContinue.click();
    }

    async enterPassword(password: string): Promise<void> {
        await this.loginLocator.password.fill(password);
        await this.loginLocator.btnSignin.click();
    }
}
