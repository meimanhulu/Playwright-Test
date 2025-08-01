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
  
  const newPage = await page.context().waitForEvent('page');
  await SleepHelper.sleepShort();
  await newPage.close();

  await page.goto(UrlHelper.log_in);
  

  await signupPage.startSignUp();

  // const user = signupUsers[0];
  // await signupPage.enterEmail(user.email);
  // await signupPage.clickSignUp();
  // await signupPage.enterUsername(user.username);
  // await signupPage.enterPassword(user.password);
  // await signupPage.clickSignUp2();
  // await signupPage.enterFirstName(user.firstName);
  // await signupPage.enterLastName(user.lastName);
  // await signupPage.selectPhoneCode('Indonesia');
  // await signupPage.enterContactNumber(user.phone);
  // await signupPage.enterCompanyName(user.companyName);
  // await signupPage.selectCompanySize(user.companySize);
  // await signupPage.clickCreateNow();

  const user = signupUsers[1];
  await signupPage.enterEmail(user.email);
  await signupPage.clickSignUp();
  await signupPage.enterUsername(user.username);
  await signupPage.enterPassword(user.password);
  await signupPage.clickSignUp2();
  await signupPage.enterFirstName(user.firstName);
  await signupPage.enterLastName(user.lastName);
  await signupPage.enterContactNumber(user.phoneNumber);
  await signupPage.enterCompanyName(user.companyName);
  await signupPage.selectCompanySize(user.companySize);
  await signupPage.selectCompanyIndustry(user.companyIndustry);
  await signupPage.clickNext1();
  await signupPage.clickChannel(user.channel);
  await signupPage.clickChannel(user.channel2);
  await signupPage.clickChannel(user.channel3);
  await signupPage.clickNext2();
  await SleepHelper.sleepShort();
  await signupPage.getStarted();
  await SleepHelper.sleepLong();

  await page.screenshot({ path: 'Dashboard.png', fullPage: true });

  // const isErrorVisible = await signupPage.isErrorServerVisible();

  // if (isErrorVisible) {
  //   await page.screenshot({ path: 'signup-server-error.png', fullPage: true });
  //   await signupPage.clickBack();
  //   console.log('🛑 Server error detected, screenshot taken and Back clicked.');
  // } else {
  //   console.log('✅ No Server Error detected.');
  // }

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
  await SleepHelper.sleepShort();

  try {
    await logoutPage.logout('Sign out');
  } catch (err) {
    console.error('Logout failed:', err);
    await page.screenshot({ path: 'error-screenshot.png', fullPage: true });
    throw err;
  }

});
