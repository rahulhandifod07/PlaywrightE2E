const { expect,test } = require("@playwright/test");
const {POManager}=require('../POManager/POManager');
const Dataset=JSON.parse(JSON.stringify(require("../util/UserData.json")));

for(const data of Dataset)
{
test.only(`new page automate ${data.productName}`, async ({page}) =>{

const POManagerOBJ=new POManager(page);
const loginOBJ=POManagerOBJ.getLoginPage();

// const URL="https://rahulshettyacademy.com/client/";
// const UserName='testemail1234@gmail.com';
// const Password='Test@1234';
await loginOBJ.goto(data.URL);
await loginOBJ.performLogin(data.username,data.password);

const dashOBJ=POManagerOBJ.getDashBoardPage();
await dashOBJ.searchAndAddProduct(data.productName);

const cartOBJ=POManagerOBJ.getCartPage();
const productList=await cartOBJ.BuyProduct(data.productName);
await expect.soft(productList).toContain(data.productName);

const PaymentPageOBJ=POManagerOBJ.getPaymentPage();
await PaymentPageOBJ.UserDetails();

const FinishPageOBJ=POManagerOBJ.getFinishPage();
const orderIDNo=await FinishPageOBJ.getOrderIDAndNavigateToOrderPage();

const OrderSummeryPageOBJ=POManagerOBJ.getOrderSummeryPage();
await OrderSummeryPageOBJ.validateOrderID(expect,orderIDNo);


await page.close();
});
}