class CartPage
{
    constructor(page)
    {
        this.page=page;
        this.cartProduct=page.locator('.cartWrap .ng-star-inserted');
        this.productName=this.cartProduct.locator('h3');
        this.BuyNow=this.cartProduct.locator('.btn-primary');
    }

     
    async BuyProduct(expect)
    {
        const productList=await this.productName.allTextContents();
        await expect(productList).toContain('zara coat 3');
        await this.BuyNow.click();


    }








}
module.exports={CartPage};