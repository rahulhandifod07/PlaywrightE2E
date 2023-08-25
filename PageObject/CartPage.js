class CartPage
{
    constructor(page)
    {
        this.page=page;
        this.cartProduct=page.locator('.cartWrap .ng-star-inserted');
        this.productName=this.cartProduct.locator('h3');
        this.BuyNow=this.cartProduct.locator('.btn-primary');
    }

     
    async BuyProduct()
    {
        const productList=await this.productName.allTextContents();
        await this.BuyNow.click();
        return productList;
    }








}
module.exports={CartPage};