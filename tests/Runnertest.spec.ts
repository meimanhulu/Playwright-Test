import { test } from '../src/fixtures/fixtures';


test('After closing the second tab, proceed to log in via the first tab', async ({ page, loginPage, logoutPage }) => {
    
    // Arahkan ke halaman utama di tab pertama
    await page.goto("https://sleekflow.io/");

    // Klik tombol login untuk membuka tab baru
    await loginPage.clickLoginButton();

    // Tunggu tab kedua terbuka
    let newPage = await page.context().waitForEvent('page'); 

    // Setelah tab kedua terbuka, langsung tutup tab kedua
    await newPage.close();  // Menutup tab kedua

    // Verifikasi bahwa tab kedua ada sebelum lanjut
    if (!newPage) {
        throw new Error('Unable to open the second tab');
    }

    // Ganti URL tab pertama menjadi URL login
    await page.goto("https://sso.sleekflow.io/u/login/identifier?state=hKFo2SBfWHRmMVZyZEo5Wk8ycEstQmdwWElyam0zYXY3b3JzSqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIDhFcHZiNEZRa0xLakNCc1V0b2ptcGFpcDd6TVFLcndzo2NpZNkgQ2xWMG9QSURYUDM3Zk5vTWtHUDhzT21hM29maTE3TTc&ui_locales=en");

    // Gunakan page pertama untuk mengisi username dan password
    await loginPage.enterUsername("meiman02@gmail.com");  // Gunakan page pertama
    await page.waitForTimeout(2000);  // Tunggu sejenak
    await loginPage.enterPassword('QaAdidata2020');  // Gunakan page pertama
    // await page.waitForTimeout(8000);

    // Tunggu sampai navigasi selesai di tab pertama
    await page.waitForNavigation({ waitUntil: 'load', timeout: 30000 });

    // Setelah login, coba logout di tab pertama
    try {
        await logoutPage.logout('Sign out'); // Logout di tab pertama
    } catch (error) {
        console.log('Logout process failed');
        await page.screenshot({ path: 'error-screenshot.png' }); // Ambil screenshot error
        throw error;
    }

});
