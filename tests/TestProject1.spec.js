const{test, expect}=require('@playwright/test');

test('testwait', async ({page})=>
{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise');
    await page.locator('#username').clear();
    await page.locator('#username').type('rahulshettyacademy');
    await page.locator('#password').type('learning');
    await page.locator('#terms').click();
    await page.locator('#signInBtn').click();
    // console.log(await page.locator('[style="display: block;"]').textContent());
    //await expect(page.locator('[style="display: block;"]')).toContainText('Empty username/password.');
    await expect(page).toHaveTitle('ProtoCommerce');
    await expect(page).toHaveURL('https://rahulshettyacademy.com/angularpractice/shop');
    // console.log(await page.locator('.card-body a').nth(0).textContent());
    //note: textContent() will  wait to page to load
    // console.log(await page.locator('.card-body a').nth(1).textContent());
    //note: allTextContents will not wait to page to load
    let titles=await (page.locator('.card-body a')).allTextContents();
    console.log(titles);
    for (let variable in titles) {
        // code to be executed for each property
        console.log(variable + ': ' + titles[variable]);
      }


}
);