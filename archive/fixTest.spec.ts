import {test} from "../fixtures/hooks-fixture";
import{expect} from '@playwright/test';

// test.beforeEach(async({page,loginPage})=>{
//     await loginPage.openApplicationUrl();
//     console.log(await page.title());

// });
// test.afterEach('After Each hook',async({userPage})=>{
//     await userPage.logout();
// });


  test('Verify login functionality',async({page,loginPage,gotoUrl})=>{
await expect(page).toHaveTitle("OrangeHRM");  
  }); 
    test('Verify login functionality1',async({page,loginPage,gotoUrl})=>{
await expect(page).toHaveTitle("OrangeHRM");  
  }); 
    test('Verify login functionality2',async({page,loginPage,gotoUrl})=>{
await expect(page).toHaveTitle("OrangeHRM");  
  }); 