const puppeteer = require('puppeteer');

(async () => {
    // Launch a headless Chrome browser
    const browser = await puppeteer.launch();

    // Open a new page and navigate to WhatsApp Web
    const page = await browser.newPage();
    await page.goto('https://web.whatsapp.com');

    // Wait for the user to log in and scan the QR code

    // Find the log out button and click it
    await page.waitForSelector('._2OJg6');

    const logoutButton = await page.$('._2OJg6');
    await logoutButton.click();

    // Close the browser
    await browser.close();
})();
