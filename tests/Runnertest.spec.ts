import { test } from '../src/fixtures/fixtures';
import { DriverWaitHelper } from '../src/utils/DriverWaitHelper';
import { UrlHelper } from '../src/utils/UrlHelper';
import { credentials } from '../src/utils/Credentials';
import { SleepHelper } from '../src/utils/SleepHelper';

test.setTimeout(90_000);

test('After closing the second tab, proceed to log in via the first tab', async ({ page, loginPage, logoutPage }) => {
  const wait = new DriverWaitHelper(page);
  await page.goto(UrlHelper.website);
  await loginPage.clickLoginButton();
  
  const newPage = await page.context().waitForEvent('page', { timeout: 10_000 });
  await newPage.close();
  await SleepHelper.sleepShort();

  await page.goto(UrlHelper.login);
  await loginPage.enterUsername(credentials.username);
  await loginPage.enterPassword(credentials.password);
  await logoutPage.waitForLoginSuccess();

  try {
    await logoutPage.logout('Sign out');
  } catch (err) {
    console.error('Logout failed:', err);
    await page.screenshot({ path: 'error-screenshot.png', fullPage: true });
    throw err;
  }
});
