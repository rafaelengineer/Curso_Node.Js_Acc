const puppeteer = require('puppeteer');

(async () => {
 const browser = await puppeteer.launch()
 const page = await browser.newPage()

 // set the viewport so we know the dimensions of the screen
 await page.setViewport({ width: 800, height: 600 })

 // go to a page setup for mouse event tracking
 await page.goto('http://unixpapa.com/js/testmouse.html')

 // click an area
 await page.mouse.click(132, 103, { button: 'left' })

 // the screenshot should show feedback from the page that right part was clicked.
 await page.screenshot({ path: 'mouse_click.png' })
 await browser.close()
})()
