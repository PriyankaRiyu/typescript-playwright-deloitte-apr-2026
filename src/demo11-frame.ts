import { chromium } from "playwright"


const browser = await chromium.launch({ headless: false, channel: "chrome" });
const context = await browser.newContext();
//tab1
const page = await context.newPage();

await page.goto("https://mc.login.exacttarget.com/hub-cas/login");

const marketingFrame= page.frameLocator("xpath=//iframe[@id='marketing']")


// get text and print - Get Salesforce for free. No credit card required, no software to install.
let actualHeader:string= await marketingFrame.locator("xpath=//h2[contains(text(),'for free')]").innerText();
console.log(actualHeader)

//click on Get Free CRM
const [newPage,] = await Promise.all(
    [page.waitForEvent('popup'),
    marketingFrame.locator("xpath=//a[normalize-space()='Get free CRM']").click()
    ])

newPage.waitForLoadState()

// enter firstname as jack
await newPage.locator("css=input[name='firstName']").fill("jack")
//enter lastname
await newPage.locator("css=input[name='lastName']").fill("jack")

//click on next
await newPage.locator("css=button[aria-label='Next']").click()

// when no attribute for writing css then use getByText()
// await newPage.getByText("Next").click()

await page.waitForTimeout(5000)
await browser.close()