import { test } from '../src/fixtures/fixtures';

test('After closing the second tab, proceed to log in via the first tab', async ({ page, loginPage, logoutPage }) => {
    test.setTimeout(90000);
    await page.goto("https://sleekflow.io/");
    await loginPage.clickLoginButton();
    const newPage = await page.context().waitForEvent('page', { timeout: 10000 });

    if (!newPage) {
        throw new Error('Unable to open the second tab');
    }

    await newPage.close();

    await page.goto("https://sso.sleekflow.io/u/login/identifier?state=hKFo2SBfWHRmMVZyZEo5Wk8ycEstQmdwWElyam0zYXY3b3JzSqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIDhFcHZiNEZRa0xLakNCc1V0b2ptcGFpcDd6TVFLcndzo2NpZNkgQ2xWMG9QSURYUDM3Zk5vTWtHUDhzT21hM29maTE3TTc&ui_locales=en");

    await loginPage.enterUsername("meiman02@gmail.com");
    await page.waitForTimeout(2000);
    await loginPage.enterPassword('QaAdidata2020');
    await logoutPage.waitForLoginSuccess();
    try {
        await logoutPage.logout('Sign out');
    } catch (error) {
        console.log('Logout process failed');
        await page.screenshot({ path: 'error-screenshot.png' });
        throw error;
    }
});
