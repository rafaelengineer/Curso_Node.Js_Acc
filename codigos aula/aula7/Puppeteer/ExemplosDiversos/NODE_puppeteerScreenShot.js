const puppeteer = require('puppeteer')

async function salvaPrint() {
	const navegador = await puppeteer.launch();
	const pagina = await navegador.newPage();
	
	await pagina.goto('https://overapi.com/nodejs')
	//await pagina.waitForSelector('.success', {visible: true});
	
	await pagina.screenshot({path: 'captura.png', fullPage:true});
	
	await navegador.close();
} 

salvaPrint()