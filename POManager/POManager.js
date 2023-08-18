
const {LoginPage}=require('../PageObject/LoginPage');

class POManager
{
constructor(page)
{
this.page=page;
this.Loginpage=new LoginPage(page);
}

getLoginPage()
{
    return this.Loginpage;
}



}
module.exports={POManager};