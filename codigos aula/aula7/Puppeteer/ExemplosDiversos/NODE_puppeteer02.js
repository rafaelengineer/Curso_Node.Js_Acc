const puppeteer = require('puppeteer');

// Imprime o titulo de uma pagina no console
(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('https://www.freecodecamp.org/');
	await page.waitForSelector('title');
  
    const title = await page.title();
    console.info(`The title is: ${title}`);
	await browser.close();
})();