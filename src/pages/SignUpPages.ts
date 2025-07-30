import { Page } from "@playwright/test";
import { SignUpLocator } from "../locators/SignUpLocators";

export class SignUpPage {
  private page: Page;
  private signUpLocator: SignUpLocator;

  constructor(page: Page, signUpLocator: SignUpLocator) {
    this.page = page;
    this.signUpLocator = signUpLocator;
  }
  
  async isErrorServerVisible(): Promise<boolean> {
    try {
      return await this.signUpLocator.ERROR_SERVER.isVisible({ timeout: 6000 });
    } catch (e) {
      console.log("Error occurred while checking ERROR_SERVER visibility:", e);
      return false;
    }
  }

  async startSignUp(): Promise<void>{
    await this.signUpLocator.btnStartSignup.click();
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
        await this.signUpLocator.firstName.fill(firstName);
    }

    async enterLastName(lastName: string): Promise<void> {
        await this.signUpLocator.lastName.fill(lastName);
    }

    // async selectPhoneCode(value: string): Promise<void> {
    //     await this.signUpLocator.CODEPHONE.click();
    //     await this.signUpLocator.CODESEARCH.fill(value);
    //     await this.signUpLocator.CODESEARCH.press('Enter'); 
    // }

    async enterContactNumber(phoneNumber: string): Promise<void> {
        await this.signUpLocator.numberField.fill(phoneNumber);
    }

    async enterCompanyName(companyName: string): Promise<void> {
        await this.signUpLocator.companyName.fill(companyName);
    }

    async selectCompanySize(companySize: string): Promise<void> {
        await this.signUpLocator.companyDropDown.click();
        await this.page.locator(`//div[@id='${companySize}']`).click();
    }

    async selectCompanyIndustry(companyIndustry: string): Promise<void> {
        await this.signUpLocator.companyIndustry.click();
        await this.page.locator(`//div[@id='${companyIndustry}']`).click();
    }

    async clickNext1(): Promise<void> {
        await this.signUpLocator.btnNext1.click();
    }

    async clickChannel(channel: string): Promise<void> {
       await this.page.locator(`//div[text()='${channel}']`).click();
        
    }

    async clickEmptyCheck(): Promise<void> {
        await this.signUpLocator.emptyCheck.click();
        
    }

    async clickNext2(): Promise<void> {
        await this.signUpLocator.btnNext2.click();
    }

    async getStarted(): Promise<void> {
        await this.signUpLocator.getStarted.click();
    }
}
