import type { Page } from "@playwright/test";
import { LogoutLocator } from "../locators/LogoutLocators";

export class LogoutPage {
    private page: Page; 
    private logoutLocator: LogoutLocator;
    
     constructor(page: Page, logoutLocator: LogoutLocator){
            this.page = page;
            this.logoutLocator = logoutLocator;

        }

        async logout(Value: string){
            await this.logoutLocator.btnDropDown().click();
            await this.logoutLocator.btnLogout(Value).click();
        }
}
