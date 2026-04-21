import { chromium } from "playwright"
// npm install -D playwright@latest

async function basicOperation() {
    //Browser instance
    const browser = await chromium.launch({ headless: false, channel: "chrome" });

    //browsercontext 
    const context = await browser.newContext();

    //new tab
    const page = await context.newPage();

    await page.goto("https://x.com/")

    let actualTitle:string= await page.title();
    console.log(actualTitle)

    // console.log(await page.content())
    
    await page.locator("xpath=//span[text()='Create account']").click()

    await page.locator("xpath=//input[@name='name']").fill("jack")

    //enter phone number as 909090900
    await page.locator("xpath=//input[@name='phone_number']").fill("8095554424")

    //dec 2000 20
    // await page.locator("xpath=//span[text()='Month']/following::select").nth(0).selectOption({ label: "December" })

    await page.locator("xpath=(//span[text()='Month']/following::select)[1]").selectOption({ label: "December" })
    await page.locator("xpath=//select[@id='SELECTOR_2']").selectOption({ label: "20" })
    await page.locator("xpath=//select[@id='SELECTOR_3']").selectOption({ label: "2000" })
    await page.waitForTimeout(5000)
    browser.close()

}

basicOperation()

//will resume at 4 PM IST