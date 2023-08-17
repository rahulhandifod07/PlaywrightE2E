const { expect,test } = require("@playwright/test");

test.only('new page automate',async ({page}) =>{

await page.goto("https://rahulshettyacademy.com/client/");
await page.locator('#userEmail').fill('testemail1234@gmail.com');
await page.locator('#userPassword').fill('Test@1234');
await page.locator('#login').click();
//wating for API idel state
await page.locator('.container').waitFor();
const products=await page.locator('.container');
const titleList=await products.locator('.card-body h5 b').allTextContents();
console.log(titleList);
for(let b=0;b<titleList.length;b++)
{
    if(titleList[b].includes('zara coat 3'))
    {
      await products.locator('.card-body .w-10').nth(b).click();
    }
    
}
//select cart
await page.locator('.btn-custom .fa-shopping-cart').click();
//cart products
await page.locator('.cartWrap .ng-star-inserted').waitFor();
await page.waitForLoadState('networkidle');
const cartProduct=await page.locator('.cartWrap .ng-star-inserted');
//asseerrt product
const productName=await cartProduct.locator('h3').allTextContents();
await expect(productName).toContain('zara coat 3');
await cartProduct.locator('.btn-primary').click();
await page.getByPlaceholder('Select Country').type('india',{delay:1000});
const countryList=await page.locator('.mt-5  .ta-results .ta-item').allTextContents();
console.log(countryList);
for(let c=0;c<countryList.length;c++)
{
    if(countryList[c].trim()==='India')
    {
        
      await page.locator('.mt-5  .ta-results .ta-item').nth(c).click();  
      }
}

const ccDateDay=await page.locator('.form__cc .ddl').first();
//await ccDateDay.click();
await ccDateDay.selectOption('08');

const ccDateYear=await page.locator('.form__cc .ddl').last();
await ccDateYear.selectOption('27');
await page.locator("//div[contains(text(),'CVV Code')]//following-sibling::input").type("123");
await page.locator("//div[contains(text(),'Name on Card ')]//following-sibling::input").type("Test Name");

await page.getByText('Place Order ').click();
//assert order
await page.locator('.box label.ng-star-inserted').waitFor();
let orderID=await page.locator('.box label.ng-star-inserted').textContent();
orderID = orderID.replace(/[^a-zA-Z0-9]/g, '');
console.log("Placed Order is "+orderID);
await page.locator('.btn-custom .fa-handshake-o').click()
await page.locator("tbody").waitFor();
let OrderIDs=await page.locator('tbody .ng-star-inserted th').allTextContents();
let  orderStatus=false;
for(let j=0;j<OrderIDs.length;j++)
{
    
    if(OrderIDs[j]===(orderID))
    {
        orderStatus=true;
        console.log("order ids are "+OrderIDs[j]);
    }
}

await expect(orderStatus).toBeTruthy();
await page.pause();
})