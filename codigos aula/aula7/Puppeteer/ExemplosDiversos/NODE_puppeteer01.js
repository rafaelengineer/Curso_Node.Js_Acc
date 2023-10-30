const puppeteer = require('puppeteer');

//Abre uma página
(async () => {
	const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();
	await page.goto('https://pptr.dev');

	await browser.close();
})();