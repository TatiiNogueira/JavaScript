//Link do Video -> https://www.youtube.com/watch?v=wqRKEd0_suw

//Criação de uma instância de Browser
const puppeteer = require('puppeteer');

//Abre páginas e em seguida, manipula as com a API do Puppeteer
(async () => {
    //Se escrever {headless: false} podemos ver a janela a abrir 
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  //Link do Site
  await page.goto('https://pt.wikipedia.org/wiki/Lagarto');
  //Tirar um print e atribuir um nome a Esse print
  await page.screenshot({ path: 'Lagartos.png' });
  const result = await page.evaluate(() => {
    let headingFromWeb = document.querySelectorAll(".mw-headline")
    const headingList = [...headingFromWeb]
    return headingList.map(h => h.innerText)
  });

  console.log(result)

  await browser.close();
})();