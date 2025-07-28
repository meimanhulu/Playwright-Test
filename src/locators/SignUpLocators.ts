import { Locator, Page } from "@playwright/test";

export class SignUpLocator {
  // Sign‑up locators
  btnStartSignup: Locator;
  inputEmail: Locator;
  btnsignUp: Locator;
  inputUsername: Locator;
  inputPassword: Locator;
  btnsignUp1: Locator;
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
  signUpChannel: Locator;
  emptyCheck: Locator;
  btnNext2: Locator;
  getStarted: Locator;
  FIRSTNAME: Locator;
  LASTNAME: Locator;
  COMPANYNAME: Locator;
  CODEPHONE: Locator;
  CODESEARCH: Locator;
  INPUTNUMBER: Locator;
  COMPANYSIZE: Locator;
  SIZEOPTION: Locator;
  CREATENOW: Locator;



  constructor(page: Page, value: string, code: string, size: string, option: string, channel: string, time: string, data: string) {

  this.btnStartSignup = page.locator('a.cf848612d.c7e1be07f');
  this.inputEmail = page.locator('input[name="email"]');
  this.btnsignUp = page.locator('button[name="action"]');
  this.inputUsername = page.locator('input[id="username"]');
  this.inputPassword = page.locator('input[type="password"]');
  this.btnsignUp1 = page.locator('button[name="action"]');
  this.firstName = page.locator('input[id="firstName"]');
  this.lastName = page.locator('input[id="lastName"]');
  this.codeField = page.locator(`(//input[@class='${code}'])[1]`);
  this.numberField = page.locator('input[id="phoneNumber"]');
  this.companyName = page.locator('input[id="companyName"]');
  this.companyDropDown = page.locator('div[id="companySize"]');
  this.sizeOption = page.locator(`//div[@id='${size}']`);
  this.companyIndustry = page.locator('div[id="industry"]');
  this.industryOption = page.locator(`//span[text()='${option}']`);
  this.fieldTimeZone = page.locator(`//input[contains(@data-gtm-form-interact-field-id, "0") and contains(., '${time}')]`);
  this.btnNext1 = page.locator(`//button[normalize-space(text())="Next"]`);
  this.signUpChannel = page.locator(`//div[text()='${channel}']`);
  this.emptyCheck = page.locator('input[id="isEmpty"]');
  this.btnNext2 = page.locator(`//button[normalize-space(text())="Next"]`);
  this.getStarted = page.locator(`//button[text()='Get started']`);
  this.FIRSTNAME = page.locator('input[name="firstName"]');
  this.LASTNAME = page.locator('input[name="lastName"]');
  this.CODEPHONE = page.locator('div[role="button"]');
  this.CODESEARCH = page.locator(`//input[@value='${value}']`);
  this.INPUTNUMBER = page.locator('input[type="tel"]');
  this.COMPANYNAME = page.locator('input[name="companyName"]');
  this.COMPANYSIZE = page.locator('//div[@role="combobox" and @aria-controls=":r7:"]');
  this.SIZEOPTION = page.locator(`//li[text()='${data}']`);
  this.CREATENOW = page.locator('button[type="submit"]');


  }
}
