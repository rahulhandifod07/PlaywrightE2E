const {test, expect}=require('@playwright/test')

test("pop up", async({page})=>{
await page.goto("https://nxtgenaiacademy.com/alertandpopup/");
 



//await page.on('dialog',dialog=>dialog.dismiss());
await page.locator("button[name ='alertbox']").click();
await page.on('dialog',dialog=>dialog.accept());
await page.locator("button[name ='confirmalertbox']").click();
await page.on('dialog',dialog=>dialog.accept());
await page.locator("button[name ='promptalertbox1234']").click();
await page.on('dialog',dialog=>dialog.dismiss());
await page.on('dialog',dialog=>dialog.type.prompt()
const promptText = 'Hello, Playwright!'; // The text you want to pass to the prompt
const result = await page.evaluate(promptText => {
    return prompt(promptText);
  }, promptText);

console.log(`Result of prompt: ${result}`);




});

