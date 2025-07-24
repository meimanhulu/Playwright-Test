import { test } from '../src/fixtures/fixtures';


test('Login', async ({ page, loginPage, logoutPage }) => {
    test.slow();
    try {
    await page.goto("https://sleekflow.io/");
    await loginPage.clickLoginButton();
    await page.waitForTimeout(5000);
    await loginPage.enterUsername('meiman02@gmail.com');
    await page.waitForTimeout(2000);
    await loginPage.enterPassword('QaAdidata2020');
        // Optionally wait for a navigation event
        await page.waitForNavigation({ waitUntil: 'networkidle' });  // Ensure navigation is finished

        try {
            await logoutPage.logout('Sign out');
        } catch (error) {
            console.log('Error during logout');
            await page.screenshot({ path: 'error-screenshot.png' });
            throw error;
        }
    } catch (error) {
        console.log('Error during login');
        await page.screenshot({ path: 'login-error-screenshot.png' });
        throw error;
    }
});
