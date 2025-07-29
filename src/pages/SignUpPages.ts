import { Page } from "@playwright/test";
import { SignUpLocator } from "../locators/SignUpLocators";

export class SignUpPage {
  private page: Page;
  private signUpLocator: SignUpLocator;

  constructor(page: Page, signUpLocator: SignUpLocator) {
    this.page = page;
    this.signUpLocator = signUpLocator;
  }

  async enterFirstName(firstName: string): Promise<void> {
        await this.signUpLocator.FIRSTNAME.fill(firstName);
    }

    async enterLastName(lastName: string): Promise<void> {
        await this.signUpLocator.LASTNAME.fill(lastName);
    }

    async selectPhoneCode(): Promise<void> {
        await this.signUpLocator.CODEPHONE.click();
        // Optionally, add method to search or pick country code if dynamic
    }

    async enterContactNumber(number: string): Promise<void> {
        await this.signUpLocator.INPUTNUMBER.fill(number);
    }

    async enterCompanyName(companyName: string): Promise<void> {
        await this.signUpLocator.COMPANYNAME.fill(companyName);
    }

    async selectCompanySize(sizeOption: string): Promise<void> {
        await this.signUpLocator.COMPANYSIZE.click();
        await this.signUpLocator.SIZEOPTION.click();
    }

    async clickCreateNow(): Promise<void> {
        await this.signUpLocator.CREATENOW.click();
    }

    async clickBack(): Promise<void> {
        await this.signUpLocator.btnBack.click();
    }
}
