const puppeteer = require('puppeteer')
// Não Da erro de timeoout
async function teclado() {
	const browser = await puppeteer.launch({ headless: false })
	const pagina = await browser.newPage()
	 
    await pagina.setViewport({ width: 1920, height: 1080 });
	//await pagina.setViewport({ width: 1080, height: 768 });

	await pagina.goto('https://trix-editor.org/', {
		waitUntil: 'load',
		// Remove the timeout
		timeout: 0
	});	 	 
	await pagina.focus('trix-editor');
	await pagina.keyboard.type('Just adding a title');
	await pagina.keyboard.press('Enter');
	 
	await pagina.screenshot({ path: 'keyboard.png' });
	await browser.close();
}

teclado()