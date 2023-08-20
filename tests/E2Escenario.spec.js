const { expect,test } = require("@playwright/test");
const {LoginPage}=require('../PageObject/LoginPage')
const {DashBoard}=require('../PageObject/DashBoard')
const {CartPage}=require('../PageObject/CartPage')
const {PaymentPage}=require('../PageObject/PaymentPage')
const {FinishPage}=require('../PageObject/FinishPage')
const {OrderSummeryPage}=require('../PageObject/OrderSummeryPage')



test.only('new page automate',async ({page}) =>{

const loginOBJ=new LoginPage(page);

const URL="https://rahulshettyacademy.com/client/";
const UserName='testemail1234@gmail.com';
const Password='Test@1234';
await loginOBJ.goto(URL);
await loginOBJ.performLogin(UserName,Password);

const dashOBJ=new DashBoard(page);
await dashOBJ.searchAndAddProduct();

const cartOBJ=new CartPage(page);
await cartOBJ.BuyProduct(expect);

const PaymentPageOBJ=new PaymentPage(page);
await PaymentPageOBJ.UserDetails();

const FinishPageOBJ=new FinishPage(page);
const orderIDNo=await FinishPageOBJ.getOrderIDAndNavigateToOrderPage();

const OrderSummeryPageOBJ=new OrderSummeryPage(page);
await OrderSummeryPageOBJ.validateOrderID(expect,orderIDNo);


page.close();
})