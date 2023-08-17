const { test, expect } = require("@playwright/test");
//in above line we are importing two function from play wright package test and expect
//test is for create test to perform web action and expect we are importing to use assertion and where as required used to require("@playwright/test"): In Node.js, the require function is used to import external modules or packages into your script. In this case, it is importing the @playwright/test package, which contains the test-related utilities for Playwright.


//test step need to mention await to avoid asyncronus call
//if await not use it will execute in parallel mode
//mention function as async
//=> fat opearator represent as function()
//to use browser we need to pass browser as fixture otherwies unable to use in code
test('Launch Browser', async ({browser})=>
{
   //chrome instanace 
   //while instamnce if you want to pass cookies or proxy details you need to pass in new context bracket parameter
   const context=await browser.newContext();
   const page=await context.newPage();
   await page.goto("https://www.youtube.com");
   console.log(page.title());
   await expect(page).toHaveTitle("YouTube");
});
//note ref above if you don't want to pass any cookies proxy buy usiong page fixture you able to call page directly ref below example
//note to run test 
test('Launch Browser with page fixture', async ({page})=>
{
   await page.goto("https://www.google.com");
   await console.log(page.title());
   await expect(page).toHaveTitle("Google");

});
//here if ypou want to run sepcoific mention test.only for specific test