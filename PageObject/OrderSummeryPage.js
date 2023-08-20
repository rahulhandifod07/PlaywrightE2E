class OrderSummeryPage
{
    constructor(page)
    {
        this.page=page;
        this.orderSummerList=this.page.locator('tbody .ng-star-inserted th');
    }

    async validateOrderID(expect,orderIDNo)
    {
        const allOrderFromList=await this.orderSummerList.allTextContents();
        let  orderStatus=false;
       for(let j=0;j<allOrderFromList.length;j++)
       {
    
        if(allOrderFromList[j]===(orderIDNo))
         {
        orderStatus=true;
        console.log("order ids are "+allOrderFromList[j]);
         }
       }  
    await expect(orderStatus).toBeTruthy();
    }

  

}
module.exports={OrderSummeryPage};