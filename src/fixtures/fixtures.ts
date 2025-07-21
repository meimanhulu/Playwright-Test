import { test as base } from "@playwright/test";
import { LoginLocator } from "../locators/LoginLocators";
import { LoginPage } from "../pages/LoginPages";
import { LogoutPage } from "../pages/LogoutPages";
import { LogoutLocator } from "../locators/LogoutLocators";
import { MenuLocator } from "../locators/MenuLocators";
import { MenuPage } from "../pages/MenuPages";

type Myfixtures = {
    //Locator
    loginLocator: LoginLocator;
    logoutLocator: LogoutLocator;
    menuLocator: MenuLocator;


    //Page
    loginPage: LoginPage;
    logoutPage: LogoutPage;
    menuPage: MenuPage;
    
};

export const test = base.extend<Myfixtures>({
    //Locator
    loginLocator: async ({ page }, use) => {
      const loginLocator = new LoginLocator(page);
      await use(loginLocator);
    },
    logoutLocator: async ({ page }, use) => {
        const logoutLocator = new LogoutLocator(page);
        await use(logoutLocator);
    },
    menuLocator: async ({ page }, use) => {
        const menuLocator = new MenuLocator(page);
        await use(menuLocator);
    },

    //page
    loginPage: async ({page,loginLocator}, use) => {
        const loginPage = new LoginPage(page, loginLocator);
        await use(loginPage);
    },
    logoutPage: async ({page,logoutLocator}, use) => {
        const logoutPage = new LogoutPage(page, logoutLocator);
        await use(logoutPage);
    },
    menuPage: async ({page,menuLocator}, use) => {
        const menuPage = new MenuPage(page, menuLocator);
        await use(menuPage);
    }
})