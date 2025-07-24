import type { Page } from "@playwright/test";
import { LoginLocator } from "../locators/LoginLocators";

export class LoginPage {
    private page: Page;
    private loginLocator: LoginLocator;

    constructor(page: Page, loginLocator: LoginLocator) {
        this.page = page;
        this.loginLocator = loginLocator;
    }

    // Klik tombol "Log In"
    async clickLoginButton(): Promise<void> {
        await (await this.loginLocator.btnLogin()).click();
    }

    async enterUsername(username: string): Promise<void> {
    const usernameLocator = await this.loginLocator.Username();
    await usernameLocator.fill(username);

    const continueButton = await this.loginLocator.btnContinue();  
    await continueButton.waitFor({ state: 'visible', timeout: 5000 });
    await continueButton.click();
}
    // Masukkan password dan klik Sign In
    async enterPassword(password: string): Promise<void> {
        const passwordLocator = await this.loginLocator.Password();  // Tunggu sampai input password muncul
        await passwordLocator.fill(password);  // Isi dengan password
        const signinButton = await this.loginLocator.btnSignin();  // Tunggu tombol Sign In muncul
        await signinButton.click();  // Klik tombol Sign In
    }
}