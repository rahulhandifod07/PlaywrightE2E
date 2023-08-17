
// <input type="text" name="u" maxlength="100" size="25" value="umesh.c@rakuten.com" class="textBox" id="loginInner_u"></input>

// // here we are targeting selector using css

// // If ID present 
// // css -> tagname#id or #id

// e.g.: 
// await page1.locator('input#loginInner_u').type('umesh.c@rakuten.com');
// await page1.locator('#loginInner_u').type('umesh.c@rakuten.com');


// //If Class attribute  present 
// //css -> tagname.class or .class

// e.g.: 
// await page1.locator('input.textBox').type('umesh.c@rakuten.com');
// await page1.locator('.textBox').type('umesh.c@rakuten.com');


// //based on attribute
// //css -> [attribute='value']
// e.g : 
// await page1.locator('[name="u"]').type( 'umesh.c@rakuten.com');


