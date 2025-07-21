import type { Page } from "@playwright/test";
import { MenuLocator } from "../locators/MenuLocators";

export class MenuPage {
    
    private page: Page;
    private menuLocatore: MenuLocator;

        constructor(page: Page, menuLocatore: MenuLocator){
            this.page = page;
            this.menuLocatore = menuLocatore;
        }

        async subMenu(subMenu: string){
            // const submenu = this.menuLocatore.subMenu(subMenu)
            // await submenu.click()
            await this.menuLocatore.subMenu(subMenu).click();

        }
        
}