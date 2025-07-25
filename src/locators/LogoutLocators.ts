import { Page, Locator } from "@playwright/test";

export class LogoutLocator {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Selector tombol dropdown profil (ikon akun di pojok kanan atas)
    btnDropDown(): Locator {
        return this.page.locator('button[data-testid="account-settings-menu-trigger"]');
    }

    // Selector tombol logout berdasarkan teks, misal: "Sign out"
    btnLogout(Value: string): Locator {
        return this.page.locator(`//span[text()='${Value}']`);
    }

    // Tunggu dropdown profil terlihat sebelum diklik
    async waitForDropDownVisible(timeout: number = 40000): Promise<void> {
        await this.page.waitForSelector('button[data-testid="account-settings-menu-trigger"]', {
            state: 'visible',
            timeout,
        });
    }

    // Tunggu tombol logout muncul sebelum diklik
    async waitForLogoutButtonVisible(Value: string, timeout: number = 40000): Promise<void> {
        await this.page.waitForSelector(`//span[text()='${Value}']`, {
            state: 'visible',
            timeout,
        });
    }

    // Tambahan: indikator login sukses (misalnya tombol profil muncul)
    async waitForLoginSuccessVisible(timeout: number = 25000): Promise<void> {
        await this.page.waitForSelector('button[data-testid="account-settings-menu-trigger"]', {
            state: 'visible',
            timeout,
        });
    }
}
