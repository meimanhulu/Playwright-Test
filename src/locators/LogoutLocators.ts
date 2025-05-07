import { Locator, Page } from "@playwright/test";

export class LogoutLocator {
    private page: Page;

    constructor (page: Page){
        this.page = page;
    }

    btnDropDown(): Locator{
        return this.page.locator('.oxd-userdropdown-tab');
    }

    btnLogout(Value: string): Locator{
        return this.page.locator(`//a[text()='${Value}']`);
    }

  
}
