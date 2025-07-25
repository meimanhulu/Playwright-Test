import type { Page } from "@playwright/test";
import { LoginLocator } from "../locators/LoginLocators";

export class LoginPage {
    private page: Page; // Merujuk ke tab yang aktif (newPage)
    private loginLocator: LoginLocator;

    constructor(page: Page, loginLocator: LoginLocator) {
        this.page = page; // `this.page` merujuk ke `newPage`
        this.loginLocator = loginLocator;
    }

    // Klik tombol "Log In"
    async clickLoginButton(): Promise<void> {
        await (await this.loginLocator.btnLogin()).click();
    }

    // Isi username tanpa perlu `page` karena kita sudah menggunakan `this.page`
    async enterUsername(username: string, page: Page): Promise<void> {
        console.log('Before entering username. Current URL:', page.url());  // Debug URL sebelum username
        const usernameLocator = this.loginLocator.Username();
        await (await usernameLocator).fill(username);

        const continueButton = await this.loginLocator.btnContinue();  
        await continueButton.waitFor({ state: 'visible', timeout: 5000 });
        await continueButton.click();
        console.log('Entered username. Current URL:', page.url());  // Debug URL setelah username
    }

    // Isi password tanpa perlu `page` karena kita sudah menggunakan `this.page`
    async enterPassword(password: string, page: Page): Promise<void> {
        const passwordLocator = await this.loginLocator.Password();  // Tunggu sampai input password muncul
        await passwordLocator.fill(password);  // Isi dengan password
        const signinButton = await this.loginLocator.btnSignin();  // Tunggu tombol Sign In muncul
        await signinButton.click();  // Klik tombol Sign In
        console.log('After signing in. Current URL:', page.url());  // Debug URL setelah Sign In
    }
}
