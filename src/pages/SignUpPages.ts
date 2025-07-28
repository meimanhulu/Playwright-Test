import { Page } from "@playwright/test";
import { SignUpLocator } from "../locators/SignUpLocators";

export class SignUpPage {
  private page: Page;
  private signUpLocator: SignUpLocator;

  constructor(page: Page, signUpLocator: SignUpLocator) {
    this.page = page;
    this.signUpLocator = signUpLocator;
  }

  // Step 1: Start Signup
  async clickStartSignup(): Promise<void> {
    await this.signUpLocator.btnStartSignup.click();
  }

  // Step 2: Enter Email and Proceed
  async enterEmail(email: string): Promise<void> {
    await this.signUpLocator.inputEmail.fill(email);
    await this.signUpLocator.btnsignUp.click();
  }

  // Step 3: Enter Username and Proceed
  async enterUsername(username: string): Promise<void> {
    await this.signUpLocator.inputUsername.fill(username);
  }

  // Step 4: Enter Password and Proceed
  async enterPassword(password: string): Promise<void> {
    await this.signUpLocator.inputPassword.fill(password);
    await this.signUpLocator.btnsignUp1.click();
  }

  // Step 5: Enter Personal Details (First Name, Last Name)
  async enterPersonalDetails(firstName: string, lastName: string): Promise<void> {
    await this.signUpLocator.firstName.fill(firstName);
    await this.signUpLocator.lastName.fill(lastName);
  }

  // Step 6: Enter Phone Number and Country Code
  async enterPhoneNumber(phoneNumber: string, code: string): Promise<void> {
    await this.signUpLocator.codeField.fill(code);
    await this.signUpLocator.numberField.fill(phoneNumber);
  }

  // Step 7: Select Company Information (Name, Size, Industry)
  async enterCompanyInfo(companyName: string, companySize: string, industryOption: string): Promise<void> {
    await this.signUpLocator.companyName.fill(companyName);
    await this.signUpLocator.companyDropDown.click();
    await this.signUpLocator.sizeOption.click();
    await this.signUpLocator.companyIndustry.click();
    await this.signUpLocator.industryOption.click();
  }

  // Step 8: Set Time Zone
  async setTimeZone(value: string): Promise<void> {
    await this.signUpLocator.fieldTimeZone.fill(value);
    await this.signUpLocator.btnNext1.click();
  }

  // Step 9: Choose Signup Channel
  async selectSignupChannel(channel: string): Promise<void> {
    await this.signUpLocator.signUpChannel.click();
    await this.signUpLocator.btnNext2.click();
  }

  // Step 10: Agree to Terms and Proceed
  async agreeToTermsAndProceed(): Promise<void> {
    await this.signUpLocator.emptyCheck.check();
    await this.signUpLocator.btnNext2.click();
  }
}
