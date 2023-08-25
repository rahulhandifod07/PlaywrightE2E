class LoginPage
{
constructor(page)
{
this.page=page;
this.userName=page.locator('#userEmail');
this.userPassword=page.locator('#userPassword');
this.loginButton=page.locator('#login');
}

async goto(url)
{
  await this.page.goto(url);
}

async performLogin(userName,userPassword)
{
await this.userName.fill(userName);
await this.userPassword.fill(userPassword);
await this.loginButton.click();
await this.page.waitForLoadState('networkidle');
await this.page.locator('.container').waitFor();
}
}
module.exports={LoginPage};