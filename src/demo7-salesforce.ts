import { chromium } from "playwright"

async function basicOperation() {
    //Browser instance
    const browser = await chromium.launch({ headless: false, channel: "chrome" });

    //browsercontext 
    const context = await browser.newContext();

    //new tab
    const page = await context.newPage();

    await page.goto("https://www.salesforce.com/in/form/signup/freetrial-sales/")

    //enter firstname 
    //enter lastname
    //enter job title
    //click next 
    //select 21-200 employees 
    
    await page.waitForTimeout(5000)
    browser.close()

}

basicOperation()

//will resume at 4 PM IST