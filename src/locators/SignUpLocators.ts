import { Locator, Page } from "@playwright/test";

export class SignUpLocator {
  // Sign‑up locators
  btnStartSignup: Locator;
  inputEmail: Locator;
  btnNext: Locator;
  inputUsername: Locator;
  inputPassword: Locator;
  btnSignUp1: Locator;
  firstName: Locator;
  lastName: Locator;
  codeField: Locator;
  numberField: Locator;
  companyName: Locator;
  companyDropDown: Locator;
  sizeOption: Locator;
  companyIndustry: Locator;
  industryOption: Locator;
  fieldTimeZone: Locator;
  btnNext1: Locator;
  SignUpChannel: Locator;
  emptyCheck: Locator;
  btnNext2: Locator;





  constructor(page: Page) {
    
    this.btnStartSignup = page.locator('a.cf848612d.c7e1be07f');
    this.inputEmail    = page.locator('input[name="email"]');
    this.btnNext      = page.locator('button[name="action"]');
    this.inputUsername = page.locator('input[id="username"]');
    this.inputPassword = page.locator('input[type="password"]');
    this.btnSignUp1    = page.locator('button[name="action"]');
    this.fieldTimeZone = page.locator('//input[contains(@data-gtm-form-interact-field-id, "0") and contains(., "")]');
    this.btnNext1    = page.locator('//button[normalize-space(text())="Next"]');
    this.btnNext2    = page.locator('//button[normalize-space(text())="Next"]');
  }
}
