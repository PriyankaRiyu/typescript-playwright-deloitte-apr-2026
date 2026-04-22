import { chromium } from "playwright"


const browser = await chromium.launch({ headless: false, channel: "chrome" });
const context = await browser.newContext();
//tab1
const page = await context.newPage();

await page.goto("https://www.selenium.dev/downloads/");

const [download,] = await Promise.all(
    [page.waitForEvent('download'),
    page.locator("xpath=//a[text()='4.43.0']").click()
    ])

download.saveAs(download.suggestedFilename())

//option 2
// page.on('download',async download=>{
//     download.saveAs(download.suggestedFilename())
// })
//  await page.locator("xpath=//a[text()='4.43.0']").click()




await page.waitForTimeout(5000)
await browser.close()