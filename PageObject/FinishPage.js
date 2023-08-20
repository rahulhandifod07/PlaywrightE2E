class FinishPage
{
constructor(page)
{
this.page=page;
this.orderID=this.page.locator('.box label.ng-star-inserted');
this.orderTab=this.page.locator('.btn-custom .fa-handshake-o');
}

async getOrderIDAndNavigateToOrderPage()
{
    let  orderIDNumber=await this.orderID.textContent();
    orderIDNumber=await orderIDNumber.replace(/[^a-zA-Z0-9]/g, '');
    console.log("Placed Order is "+orderIDNumber);
    await this.orderTab.click();
    await this.page.locator("tbody").waitFor();
    return orderIDNumber;
}


}
module.exports={FinishPage};