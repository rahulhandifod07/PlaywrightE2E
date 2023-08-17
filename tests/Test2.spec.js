const { test, expect } = require("@playwright/test");


test.only('Launch Browser', async ({page})=>
{
    await page.goto("https://ticket.rakuten.co.jp/lots_api/events/44164/entry/41604");
    await page.locator("#loginInner_u").type("umesh.c@rakuten.com");
    await page.locator("#loginInner_p").type("Rakuten-123");
   // await page.waitForLoadState('domcontentloaded');
   await Promise.all([
    page.waitForNavigation(),
    page.locator('.loginButton').click(),
    // Add more actions here, if needed
  ]);
    await expect(page.locator('div.nav-right-dropdown button')).toBeVisible();

    
        //cy.wait(1000)
    
});
