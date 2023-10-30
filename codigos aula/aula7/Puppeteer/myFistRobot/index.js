console.log('Meu primeiro Robô em Puppeteer');

const puppeteer = require('puppeteer');

async function robo() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({ path: 'example.png' });
    await browser.close();
}

robo();