import { chromium } from "playwright"


const browser = await chromium.launch({ headless: false, channel: "chrome" });
const context = await browser.newContext();
//tab1
const page = await context.newPage();

await page.goto("https://www.ilovepdf.com/pdf_to_word");
//option 1
// always check for //input[@type='file']
await page.locator("xpath=//input[@type='file']").setInputFiles("c:/AutomationSession/demo.pdf")

await page.waitForTimeout(5000)
await browser.close()