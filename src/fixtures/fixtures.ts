import { test as base } from "@playwright/test";
import { LoginLocator } from "../locators/LoginLocators";
import { LoginPage } from "../pages/LoginPages";
import { LogoutPage } from "../pages/LogoutPages";
import { LogoutLocator } from "../locators/LogoutLocators";
import { SignUpLocator } from "../locators/SignUpLocators";
import { SignUpPage } from "../pages/SignUpPages";


type Myfixtures = {
    //Locator
    signupLocator: SignUpLocator;
    loginLocator: LoginLocator;
    logoutLocator: LogoutLocator;
   


    //Page
    signupPage: SignUpPage;
    loginPage: LoginPage;
    logoutPage: LogoutPage;
    
};

export const test = base.extend<Myfixtures>({
    //Locator
    signupLocator: async ({ page }, use) => {
    const signupLocator = new SignUpLocator(page);
    await use(signupLocator);
    },
    loginLocator: async ({ page }, use) => {
      const loginLocator = new LoginLocator(page);
      await use(loginLocator);
    },
    logoutLocator: async ({ page }, use) => {
        const logoutLocator = new LogoutLocator(page);
        await use(logoutLocator);
    },

    //page
    signupPage: async ({page,signupLocator}, use) => {
        const signupPage = new SignUpPage(page, signupLocator);
        await use(signupPage);
    },
    loginPage: async ({page,loginLocator}, use) => {
        const loginPage = new LoginPage(page, loginLocator);
        await use(loginPage);
    },
    logoutPage: async ({page,logoutLocator}, use) => {
        const logoutPage = new LogoutPage(page, logoutLocator);
        await use(logoutPage);
    }

})