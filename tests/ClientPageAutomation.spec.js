const { expect,test } = require("@playwright/test");

test.only('new page automate',async ({page}) =>{
// await page.goto("https://rahulshettyacademy.com/"); 
// var a=await page.getByAltText('Learn Postman for API Automation Testing with Javascript').first().click();
// console.log(a);
await page.goto("https://rahulshettyacademy.com/client/");
await page.locator('a.btn1').click();

await page.getByText('First Name').fill('Jone');
await page.getByText('Last Name').fill('Cena');
await page.getByPlaceholder('email@example.com',{delay:1000}).fill('testemail1234@gmail.com');
await page.locator('#userMobile').fill('8012345678');
await page.locator("//select[@class='custom-select ng-untouched ng-pristine ng-valid']").click();
await page.locator("//select[@class='custom-select ng-untouched ng-pristine ng-valid']").selectOption('Student');
await page.getByText('Male').first().click();
await page.locator('#userPassword').fill('Test@1234');
await page.locator('#confirmPassword').fill('Test@1234');
await page.locator('[type=checkbox]').click();
await page.locator('#login').click();

await page.pause();


});