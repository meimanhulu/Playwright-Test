import { test } from '../src/fixtures/fixtures';

test('Login di tab kedua', async ({ page, loginPage, logoutPage }) => {
    test.slow();
    let newPage; // Deklarasi newPage di luar try-catch block
    let initialPage; // Untuk menyimpan tab pertama (sebelum ditutup)
    try {
        await page.goto("https://sleekflow.io/");

        // Klik tombol login untuk membuka tab baru
        await loginPage.clickLoginButton();

        // Menunggu tab baru terbuka setelah login
        newPage = await page.context().waitForEvent('page'); // Menunggu tab baru terbuka
        initialPage = page; // Simpan tab pertama untuk referensi

        // Pastikan newPage ada sebelum melanjutkan
        if (!newPage) {
            throw new Error('Tab kedua tidak terbuka');
        }

        // Fokuskan tab kedua
        await newPage.bringToFront();  // Fokuskan ke tab kedua (tab baru)

        // Verifikasi bahwa kita berada di tab baru
        console.log('Tab kedua aktif:', newPage.url());  // Pastikan kita berada di tab kedua

        // Tunggu beberapa detik agar tab siap untuk interaksi
        await newPage.waitForTimeout(5000);

        // Menunggu agar elemen username di tab kedua muncul
        await newPage.waitForSelector('input#username', { state: 'visible', timeout: 10000 }); 

        // Gunakan newPage untuk mengisi username dan password di tab kedua
        await loginPage.enterUsername("meiman02@gmail.com", newPage);  // Gunakan newPage untuk tab kedua
        await newPage.waitForTimeout(2000);  // Tunggu sejenak
        await loginPage.enterPassword('QaAdidata2020', newPage);  // Gunakan newPage untuk tab kedua

        // Tunggu sampai navigasi selesai di tab kedua
        await newPage.waitForNavigation({ waitUntil: 'networkidle' });  // Pastikan navigasi selesai di tab kedua

        // Setelah login, coba logout di tab kedua
        try {
            await logoutPage.logout('Sign out', newPage); // Logout di tab kedua
        } catch (error) {
            console.log('Terjadi kesalahan saat logout');
            await newPage.screenshot({ path: 'error-screenshot.png' });
            throw error;
        }

        // Setelah tab kedua siap, baru menutup tab pertama
        await initialPage.close(); // Menutup tab pertama setelah tab kedua siap

    } catch (error) {
        console.log('Terjadi kesalahan saat login');
        // Pastikan newPage ada sebelum mencoba screenshot
        if (newPage) {
            await newPage.screenshot({ path: 'login-error-screenshot.png' });
        }
        throw error;
    }
});
