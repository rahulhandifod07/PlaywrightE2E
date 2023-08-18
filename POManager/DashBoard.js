class DashBoard
{
constructor(page)
{
    this.products=page.locator('.container');
    this.titleList= products.locator('.card-body h5 b').allTextContents();
}

async searchAndAddProduct()
{
console.log(this.titleList);
for(let b=0;b<this.titleList.length;b++)
{
    if(this.titleList[b].includes('zara coat 3'))
    {
      await this.products.locator('.card-body .w-10').nth(b).click();
    }
}
//select cart
await this.page.locator('.btn-custom .fa-shopping-cart').click();
}
}