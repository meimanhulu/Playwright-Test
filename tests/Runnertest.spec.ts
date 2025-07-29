import { test } from '../src/fixtures/fixtures';
import { DriverWaitHelper } from '../src/utils/DriverWaitHelper';
import { UrlHelper } from '../src/utils/UrlHelper';
import { credentials } from '../src/utils/Credentials';
import { signupUsers } from '../src/utils/Credentials';
import { SleepHelper } from '../src/utils/SleepHelper';

test.setTimeout(90_000);
test('Signup handle server error with screenshot & back, always go to logoutPage', async ({ page, signupPage, loginPage, logoutPage }) => {

  const wait = new DriverWaitHelper(page);
  await page.goto(UrlHelper.website);
  await loginPage.clickLoginButton();
  const newPage = await page.context().waitForEvent('page', { timeout: 10_000 });
  await newPage.close();

  await page.goto(UrlHelper.log_in);

  const user = signupUsers[0];
  await signupPage.enterEmail(user.email);
  await signupPage.clickSignUp();
  await signupPage.enterUsername(user.username);
  await signupPage.enterPassword(user.password);
  await signupPage.clickSignUp2();
  await signupPage.enterFirstName(user.firstName);
  await signupPage.enterLastName(user.lastName);
  await signupPage.selectPhoneCode('Indonesia');
  await signupPage.enterContactNumber(user.phone);
  await signupPage.enterCompanyName(user.companyName);
  await signupPage.selectCompanySize(user.companySize);
  await signupPage.clickCreateNow();
  await SleepHelper.sleepShort();

let isErrorVisible: boolean = false;
const errorServerLocator = await signupPage.signUpLocator.ERROR_SERVER.isVisible({ timeout: 6000 });
if (errorServerLocator) {
  isErrorVisible = true;
} else {
  isErrorVisible = false;
}
if (isErrorVisible) {
  await page.screenshot({ path: 'signup-server-error.png', fullPage: true });
  await signupPage.clickBack();
  console.log('🛑 Server error detected, screenshot taken and Back clicked.');
} else {
  console.log('✅ No Server Error detected.');
}

  try {
    await logoutPage.logout('Sign out');
  } catch (err) {
    console.error('Logout failed:', err);
    await page.screenshot({ path: 'error-screenshot.png', fullPage: true });
    throw err;
  }
  
  await loginPage.enterUsername(credentials.login.username);
  await loginPage.enterPassword(credentials.login.password);
  await logoutPage.waitForLoginSuccess();
  try {
    await logoutPage.logout('Sign out');
  } catch (err) {
    console.error('Logout failed:', err);
    await page.screenshot({ path: 'error-screenshot.png', fullPage: true });
    throw err;
  }

});
