import { test } from '../src/fixtures/fixtures';


test('Login', async ({ page, loginPage, logoutPage, menuPage }) => {
  test.slow()
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await loginPage.login('Admin', 'admin123');
  await page.waitForTimeout(2000);
  await menuPage.subMenu('My Info')
  await page.waitForTimeout(2000);
  await menuPage.subMenu('Recruitment');
  await page.waitForTimeout(2000);
  await logoutPage.logout('Logout');
})
