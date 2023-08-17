const { test,expect } = require("@playwright/test");

test('login cart page', async ({browser})=> {
    const context1=await browser.newContext();
    const page1=await context1.newPage();
    await page1.goto("https://stg.ticket.rakuten.co.jp/lots_api/events/15036/entry/9303");
    await page1.locator('[name="u"]').type('umesh.c@rakuten.com');
    await page1.locator('[name="p"]').type('Rakuten-123');
    

    // Click the login button
    await page1.locator('[type="submit"]').click();
   
    //page titel verified after login
    await expect(page1).toHaveTitle("チケット抽選申込・販売・購入");
});

test('login CMS page', async ({page})=> {
    await page.goto("https://stg.ticket.rakuten.co.jp");
    await page.locator('a.register-user-new').click();
    await page.locator('[name="u"]').type('umesh.c@rakuten.com');
    await page.locator('[name="p"]').type('Rakuten-123');
    

    // Click the login button
    await page.locator('[type="submit"]').click();
   
       //User name verified after login
    await expect(page.locator('div.point_user_name')).toHaveText('ヤマダタロウ');
});


test.only('login orderreview', async ({page})=> {
    await page.goto("https://ticket.rakuten.co.jp/orderreview");
    await page.locator('div.btn-box').first().click();
    await page.locator('[name="u"]').type('umesh.c@rakuten.com');
    await page.locator('[name="p"]').type('Rakuten-123');
    

    // Click the login button
    await page.locator('[type="submit"]').click();
   
    //page title verified after login
    await expect(page).toHaveTitle('楽天チケット マイページ');
});



