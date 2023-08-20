const { expect,test } = require("@playwright/test");
const {LoginPage}=require('../PageObject/LoginPage')
const {DashBoard}=require('../PageObject/DashBoard')

test.only('new page automate',async ({page}) =>{

const loginOBJ=new LoginPage(page);




const URL="https://rahulshettyacademy.com/client/";
const UserName='testemail1234@gmail.com';
const Password='Test@1234';
await loginOBJ.goto(URL);
await loginOBJ.performLogin(UserName,Password);

const dashOBJ=new DashBoard(page);
await dashOBJ.searchAndAddProduct();

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