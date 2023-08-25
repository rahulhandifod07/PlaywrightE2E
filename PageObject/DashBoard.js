class DashBoard
{
constructor(page)
{
    this.page=page;
    this.products=page.locator('.container');
    this.titleList=page.locator('.card-body h5 b');
}

async searchAndAddProduct(productName)
{

const titles=await this.titleList.allTextContents();
await console.log("products aree "+titles);
for(let b=0;b<titles.length;b++)
{
  
    if(titles[b].includes(productName))
    {
      await this.products.locator('.card-body .w-10').nth(b).click();
      console.log(titles[b]);
    }
}
//select cart
await this.page.locator('.btn-custom .fa-shopping-cart').click();
await this.page.locator('.cartWrap .ng-star-inserted').waitFor();
}
}
module.exports={DashBoard};