import { chromium } from "playwright"
// npm install -D playwright@latest

async function basicOperation() {
    //Browser instance
    const browser= await chromium.launch({headless:false,channel:"chrome"});

    //browsercontext 
    const context= await browser.newContext();

    //new tab
    const page=await context.newPage();

    await page.goto("https://x.com/")

    await page.locator("xpath=//span[text()='Create account']").click()

    await page.locator("xpath=//input[@name='name']").fill("jack")
  
    //enter phone number as 909090900
    // await page.locator("xpath=//input[@name='phone_number']").fill("8095554424")


    //dec 2000 20
    await page.locator("xpath=//select[@id='SELECTOR_1']").scrollIntoViewIfNeeded()
    await page.locator("xpath=//select[@id='SELECTOR_1']").selectOption({label:"December"})


    await page.waitForTimeout(5000)
    browser.close()

}

basicOperation()