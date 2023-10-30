const puppeteer = require('puppeteer');

// Imprime o conexto do Browser
(async () => {
  const browser = await puppeteer.launch();
  console.info(browser);
  await browser.close();
})();