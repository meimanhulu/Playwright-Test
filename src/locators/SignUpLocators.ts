import { Locator, Page } from "@playwright/test";

export class SignUpLocator {
  // Sign‑up locators
  btnStartSignup: Locator;
  inputEmail: Locator;
  btnNext1: Locator;
  inputUsername: Locator;
  inputPassword: Locator;
  btnSignUp1: Locator;
  firstName: Locator;
  lastName: Locator;
  codeField: Locator;
  numberField: Locator;

  constructor(page: Page) {
    
    this.btnStartSignup = page.locator('a.cf848612d.c7e1be07f');
    this.inputEmail    = page.locator('input[name="email"]');
    this.btnNext1      = page.locator('button[name="action"]');
    this.inputUsername = page.locator('input[id="username"]');
    this.inputPassword = page.locator('input[type="password"]');
    this.btnSignUp1    = page.locator('button[name="action"]');
  }
}
