import type { Page } from "@playwright/test";
import { LoginLocator } from "../locators/LoginLocators";

export class LoginPage {
    private page: Page;
    private loginLocator: LoginLocator;

    constructor(page: Page, loginLocator: LoginLocator){
        this.page = page;
        this.loginLocator = loginLocator;
    }

    async login(inUsername: string, inPass: string){
        await this.loginLocator.Username().fill(inUsername);
        await this.loginLocator.Password().fill(inPass);
        await this.loginLocator.btnLogin().click();
    }
}
