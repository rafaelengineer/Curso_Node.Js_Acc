const puppeteer = require('puppeteer')

async function teclado() {
	 const browser = await puppeteer.launch()
	 const pagina = await browser.newPage()

	 await pagina.goto('https://trix-editor.org/');
	 
	 await pagina.focus('trix-editor');
	 await pagina.keyboard.type('Feliz dia das maes atrasado');
	 await pagina.keyboard.press('Enter');
	   
	 await pagina.screenshot({ path: 'keyboard.png' });
	 await browser.close();
}

teclado()