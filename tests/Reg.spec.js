const { test, expect } = require("@playwright/test");


test('reg and login', async ({page})=>
{
    page.goto("https://rahulshettyacademy.com/client/");
    page.locator('a.btn1').click();
    


   
    
});
