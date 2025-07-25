import { Locator, Page } from "@playwright/test";
import test from "node:test";

export class SignUpLocator {
    private page:  Page;

    constructor (page: Page){
        this.page = page;

    }
   async btnSignUp1(): Promise<Locator> {
         return this.page.locator('a[class="cf848612d c7e1be07f"]');
    }
    
    async Email(): Promise<Locator> {
        return this.page.locator('input[name="email"]');
    }

    async btnSignUp2(): Promise<Locator> {
        return this.page.locator('button[name="action"]');
    }

    async Username(): Promise<Locator> {
        return this.page.locator('input[id="username"]');
    }

    async Password(): Promise<Locator> {
        return this.page.locator('input[type="password"]');
    }

    async btnSignUp3(): Promise<Locator> {
         return this.page.locator('button[name="action"]');
    }

}