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
    //input[contains(@id,'UserFirstName')]
    await page.locator("xpath=//input[@name='UserFirstName']").fill("jack");
    //enter lastname
    await page.locator("xpath=//input[@name='UserLastName']").fill("wick");
    //enter job title
    await page.locator("xpath=//input[@name='UserTitle']").fill("Trainer");
    //click next 
    await page.locator("xpath=//span[text()='Next']").click();
    //select 21-200 employees 
    await page.locator("xpath=//select[@name='CompanyEmployees']").selectOption({label:"21 - 200 employees"})
    //enter company name 
    await page.locator("xpath=//input[@name='CompanyName']").fill("CCCS");
    //click next 
    await page.locator("xpath=//span[text()='Next']").click();
    //enter email
    await page.locator("xpath=//input[@name='UserEmail']").fill("CCCS@gmail.com");
    //select chechbox 
    await page.locator("xpath=(//div[@class='checkbox-ui'])[2]").click();
    //click submit
    await page.locator("xpath=//button[text()='Submit']").click();
    //get the error for phone number and print it
    let actualError:string= await page.locator("xpath=//span[contains(text(),'valid phone')]").innerText();
    console.log(actualError)

    let actualHeader:string= await page.locator("xpath=//span[contains(text(),'Start your')]").innerText();
    console.log(actualHeader)

    await page.waitForTimeout(5000)
    browser.close()

}

basicOperation()

//will resume at 4 PM IST