const {test, expect}=require('@playwright/test')

test('page validation', async({page})=>
{
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
expect(await page.locator('#displayed-text')).toBeVisible();
const textbox=page.locator('#displayed-text');
await textbox.scrollIntoViewIfNeeded();
await page.screenshot({path:'./test-results/beforehide.png'});
await page.locator('#hide-textbox').click();
await page.screenshot({path:'./test-results/afterhide.png'});
expect(await page.screenshot()).toMatchSnapshot('beforehide.png');

        
});


test.only('page 2 validation', async({page})=>
{
await page.goto('file:///Users/rahul.handifod/Desktop/JavaScript/HTML/Sample2.html');
expect(await page.screenshot()).toMatchSnapshot('landing.png');

        
})

