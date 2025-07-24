import { Locator, Page } from "@playwright/test";

export class LogoutLocator {
    private page: Page;

    constructor (page: Page){
        this.page = page;
    }

    btnDropDown(): Locator{
        return this.page.locator('button[data-testid="account-settings-menu-trigger"]');
    }

    btnLogout(Value: string): Locator{
        return this.page.locator(`//span[text()='${Value}']`);
    }

  
}
