import { Page } from "@playwright/test";
import { SignUpLocator } from "../locators/SignUpLocators";

export class SignUpPage {
  private page: Page;
  private signUpLocator: SignUpLocator;

  constructor(page: Page, signUpLocator: SignUpLocator) {
    this.page = page;
    this.signUpLocator = signUpLocator;
  }

  async enterEmail(email: string): Promise<void> {
    await this.signUpLocator.inputEmail.fill(email);
  }

  async clickSignUp(): Promise<void> {
    await this.signUpLocator.btnsignUp.click();
  }

  async enterUsername(username: string): Promise<void> {
    await this.signUpLocator.inputUsername.fill(username);
  }

  async enterPassword(password: string): Promise<void> {
    await this.signUpLocator.inputPassword.fill(password);
  }

  async clickSignUp2(): Promise<void> {
    await this.signUpLocator.btnsignUp1.click();
  }

  async enterFirstName(firstName: string): Promise<void> {
        await this.signUpLocator.FIRSTNAME.fill(firstName);
    }

    async enterLastName(lastName: string): Promise<void> {
        await this.signUpLocator.LASTNAME.fill(lastName);
    }

    async selectPhoneCode(value: string): Promise<void> {
        await this.signUpLocator.CODEPHONE.click();
        await this.signUpLocator.CODESEARCH.fill(value);
        await this.signUpLocator.CODESEARCH.press('Enter'); 
    }

    async enterContactNumber(number: string): Promise<void> {
        await this.signUpLocator.INPUTNUMBER.fill(number);
    }

    async enterCompanyName(companyName: string): Promise<void> {
        await this.signUpLocator.COMPANYNAME.fill(companyName);
    }

    async selectCompanySize(data: string): Promise<void> {
        await this.signUpLocator.COMPANYSIZE.click();
        await this.page.locator(`//li[text()='${data}']`).click();
    }

    async clickCreateNow(): Promise<void> {
        await this.signUpLocator.CREATENOW.click();
    }

    async clickBack(): Promise<void> {
        await this.signUpLocator.btnBack.click();
    }
}
