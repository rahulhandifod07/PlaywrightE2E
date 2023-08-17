const {expect, test}=require('@playwright/test')

test("UI element", async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise');
    await page.locator('#username').clear();
    await page.locator('#username').type('rahulshettyacademy');
    await page.locator('#password').type('learning');
    await page.locator('#terms').click();
    
    //
    await page.locator('input#usertype').last().click();
    await page.locator('button#okayBtn').click();
    await page.locator('select.form-control').selectOption('Consultant');
    await page.locator('input#tooo').uncheck();
    const t=page.locator('input#terms');
    await expect(t).toBeTruthy();
    const variable=await page.locator('//a').first();
     await expect(variable).toHaveAttribute('class','blinkingText');
    await page.close();
    
     
    

});


test.only('test', async ({ page }) => {
    await page.goto('https://stg.ticket.rakuten.co.jp/cart/events/15539');
    await page.waitForLoadState();
    await page.getByText('◎').first().click();
    await page.locator('select[name="product-1891275"]').selectOption('3');
    await page.locator('#seatTypeList').getByText('購入', { exact: true }).click();
    await page.getByText('購入する').nth(1).click();
    await page.getByRole('row', { name: 'Over-the-counter Payment 手数料 ￥20 (1申込当り) Test des 窓口受取 手数料 本券 ￥0 (1枚ごと) 副券 ￥0 (1枚ごと) 公演当日、チケット窓口に予約完了（または、当選）メールをプリントアウトしたものをご持参いただくか、携帯番号等で受信された予約完了（または、当選）メールを提示の上、チケットをお受け取りください。' }).locator('#radio2').check();
    await page.getByLabel('姓', { exact: true }).click();
    await page.getByLabel('姓', { exact: true }).fill('カタ');
    await page.getByLabel('名', { exact: true }).click();
    await page.getByLabel('名', { exact: true }).fill('カタ');
    await page.getByLabel('姓(カナ)').click();
    await page.getByLabel('姓(カナ)').fill('カタ');
    await page.getByLabel('名(カナ)').click();
    await page.getByLabel('名(カナ)').fill('カタ');
    await page.getByLabel('確認用', { exact: true }).click();
    await page.getByLabel('確認用', { exact: true }).fill('m@m');
    await page.getByLabel('メールアドレス').click();
    await page.getByLabel('メールアドレス').fill('m@m');
    await page.getByLabel('郵便番号').click();
    //await page.getByLabel('郵便番号').fill('1030001').press('Enter');

   // const inputElement = await page.waitForSelector('#zip + input');

    await page.locator('#zip').fill('1030001');
    await page.keyboard.press('Enter');
    

    await page.getByLabel('電話番号').click();
    await page.getByLabel('電話番号').fill('08012345678');
    await page.getByLabel('受付確認用パスワード').click();
    await page.getByLabel('受付確認用パスワード').fill('test12345');
    await page.getByRole('img', { name: '次へ' }).click();
    await page.getByRole('img', { name: '次へ' }).click();
    await page.locator('#btn-complete').click();
  });