import { Page } from "@playwright/test";
import { LogoutLocator } from "../locators/LogoutLocators";

export class LogoutPage {
    private page: Page;
    public logoutLocator: LogoutLocator;

    constructor(page: Page, logoutLocator: LogoutLocator) {
        this.page = page;
        this.logoutLocator = logoutLocator;
    }

    // Tunggu indikator login sukses terlihat
    async waitForLoginSuccess(): Promise<void> {
    await this.logoutLocator.waitForLoginSuccessVisible();
    }

    // Proses logout lengkap dengan pengecekan visibilitas
    async logout(Value: string): Promise<void> {
        // Tunggu dropdown profil (ikon akun) muncul
        await this.logoutLocator.waitForDropDownVisible();

        // Klik dropdown akun
        await this.logoutLocator.btnDropDown().click();

        // Tunggu tombol logout terlihat
        await this.logoutLocator.waitForLogoutButtonVisible(Value);

        // Klik tombol logout
        await this.logoutLocator.btnLogout(Value).click();
    }
}
