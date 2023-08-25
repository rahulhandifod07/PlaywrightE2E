
const {LoginPage}=require('../PageObject/LoginPage')
const {DashBoard}=require('../PageObject/DashBoard')
const {CartPage}=require('../PageObject/CartPage')
const {PaymentPage}=require('../PageObject/PaymentPage')
const {FinishPage}=require('../PageObject/FinishPage')
const {OrderSummeryPage}=require('../PageObject/OrderSummeryPage')

class POManager
{
constructor(page)
{
this.page=page;
this.loginPage=new LoginPage(page);
this.dashBoardpage=new DashBoard(page);
this.cartPage=new CartPage(page);
this.paymentPage=new PaymentPage(page);
this.finishPage=new FinishPage(page);
this.orderSummeryPage=new OrderSummeryPage(page);
}

getLoginPage()
{
    return this.loginPage;
}
getDashBoardPage()
{
    return this.dashBoardpage;
}
getCartPage()
{
    return this.cartPage;
}
getPaymentPage()
{
    return this.paymentPage;
}
getFinishPage()
{
    return this.finishPage;
}
getOrderSummeryPage()
{
    return this.orderSummeryPage;
}




}
module.exports={POManager};