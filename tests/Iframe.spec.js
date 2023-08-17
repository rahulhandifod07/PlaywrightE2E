const {test, expect}=require('@playwright/test')

test('frame handle', async({page})=>
{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    //await page.goto('https://www.google.com');

    const frame=page.frameLocator('#courses-iframe');
    //await frame.locator("//li//a[contains(text(),'Courses')]").first().click();
    //const ele=page.locator('#mousehover');
    await frame.scrollIntoViewIfNeeded();
    //await page.goBack();

    await page.pause();





});