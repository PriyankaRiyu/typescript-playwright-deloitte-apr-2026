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

    //will resume at 2:10 PM IST

    await page.waitForTimeout(5000)
    browser.close()

}

basicOperation()