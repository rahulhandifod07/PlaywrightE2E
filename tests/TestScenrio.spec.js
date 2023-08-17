const { test, expect } = require("@playwright/test");


test.only('Launch Browser', async ({page})=>
{
    await page.goto("https://backendnew.rta.altr.jp/memberships/memberships/edit/75428");
    await page.locator('#login_id').type('ts-rt-admin');
    await page.locator('#password').type('admin1234');
    await Promise.all([
        page.waitForNavigation(),
        page.locator('[type="submit"]').click(),
    ]);
    await page.locator("input#enable_point_input").click();

    var Checkboxstatus=await page.locator("input#enable_point_input").isChecked();
    await page.screenshot({
        path: './test-results/screenshot.png'  
      });
    await page.locator('[type="submit"]').click();
    await page.goto("https://stg.ticket.rakuten.co.jp/lots_api/events/15036/entry/9303");
    await page.locator("#loginInner_u").type("umesh.c@rakuten.com");
    await page.locator("#loginInner_p").type("Rakuten-123");
    
    await Promise.all([
    page.waitForNavigation(),
    page.locator('.loginButton').click(),
   
    ]);
   
    await page.locator('[type="button"]').last().click();
    await page.waitForLoadState('domcontentloaded');
    
    await page.locator("(//div[@id='root']//button[3])[1]").click();
    await page.locator("//button[contains(text(),'引取・決済へ')]").click();
    await page.waitForLoadState('domcontentloaded');
    await page.locator("//p[contains(text(),'Mail')]").click();
    await page.locator("//p[contains(text(),'窓口支払')]").click();
    await page.locator("//button[contains(text(),'購入者情報へ')]").click();
    await page.waitForLoadState('domcontentloaded');
    console.log("Value of chcek "+ Checkboxstatus);
    console.log(typeof(Checkboxstatus));

    await page.locator("//div[@class='MuiGrid-root MuiGrid-container css-lylu9i']").waitFor();

    if(Checkboxstatus)
    {
        
        console.log("if block" );
        await page.screenshot({ path: './test-results/ifblockscreenshot.png', fullPage: true });
        await expect((await page.locator("//span[contains(text(),'楽天ポイント口座 (半角数字)')]").isVisible())).toBeTruthy();
    }
    else
    {
        console.log("esle block" );
        await page.screenshot({ path: './test-results/elseblockscreenshot.png', fullPage: true });
        await expect((await page.locator("//span[contains(text(),'楽天ポイント口座 (半角数字)')]").isVisible())).toBeFalsy();
    }
     
});
