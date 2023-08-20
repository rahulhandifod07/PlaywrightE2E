class PaymentPage
{
    constructor(page)
    {
     this.page=page;
     this.countrySelection=this.page.getByPlaceholder('Select Country');
     this.countrySuggestions=this.page.locator('.mt-5  .ta-results .ta-item');
     this.expDateMonth=this.page.locator('.form__cc .ddl').first();
     this.expDateYear=this.page.locator('.form__cc .ddl').last();

     this.cVVCode=this.page.locator("//div[contains(text(),'CVV Code')]//following-sibling::input");
     this.cardHolderName=this.page.locator("//div[contains(text(),'Name on Card ')]//following-sibling::input");
     this.placeOrder=this.page.getByText('Place Order ');
    }


   async UserDetails()
   {
    await this.countrySelection.type('india',{delay:1000});
    const countryList=await this.countrySuggestions.allTextContents();
    console.log(countryList);
    //country india selection
    for(let c=0;c<countryList.length;c++) 
    {
    if(countryList[c].trim()==='India')
    {  
      await this.page.locator('.mt-5  .ta-results .ta-item').nth(c).click();  
    }
    }
    //month
    await this.expDateMonth.selectOption('08');
    //year
    await this.expDateYear.selectOption('27');
    //cvv code
    await this.cVVCode.type('123');
    //card holder name
    await this.cardHolderName.type('Test Name');
    //click on place order 
    await this.placeOrder.click();
    //wait for finish page element 
    await this.page.locator('.box label.ng-star-inserted').waitFor();
}
}
module.exports={PaymentPage};
