/**
 * O código abaixo utiliza o Puppeteer para abrir uma página web, 
 * digitar algo na caixa de pesquisa, clicar em "mostrar todos os resultados", 
 * esperar pelo carregamento da página de resultados, extrair os títulos e URLs 
 * dos resultados da pesquisa e, finalmente, imprimir essas informações no console.
 */

/**
 * @fileoverview Search developers.google.com/web for articles tagged
 * "Headless Chrome" and scrape results from the results page.
 */

'use strict';

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://developers.google.com/web/');

  // Digitar na caixa de pesquisa.
  await page.type('.devsite-search-field', 'Headless Chrome');

  // Aguarde a sobreposição de sugestões aparecer e clique em "mostrar todos os resultados".
  const allResultsSelector = '.devsite-suggest-all-results';
  await page.waitForSelector(allResultsSelector);
  await page.click(allResultsSelector);

  // Aguarde o carregamento da página de resultados e a exibição dos resultados.
  const resultsSelector = '.gsc-results .gs-title';
  await page.waitForSelector(resultsSelector);

  // Extrair os resultados da página.
  const links = await page.evaluate((resultsSelector) => {
    const anchors = Array.from(document.querySelectorAll(resultsSelector));
    return anchors.map((anchor) => {
      const title = anchor.textContent.split('|')[0].trim();
      return `${title} - ${anchor.href}`;
    });
  }, resultsSelector);
  
  console.log(links.join('\n'));

  await browser.close();
})();
