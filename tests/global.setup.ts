import { test } from '../fixtures/common-fixture';
import{expect} from '@playwright/test';



test('Global Setup for Auto login',async({page,loginPage,dashboardPage,commonUtils})=>{

    const decryptedUsername = commonUtils.decryptData(process.env.USER_NAME!);
    const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);

    await page.goto(process.env.BASE_URL!);
    //await loginPage.openApplicationUrl();
    await loginPage.loginOrangeHRMApplication(decryptedUsername,decryptedPassword);
    //await page.waitForURL(`${process.env.BASE_URL}/web/index.php/dashboard/login`);
   await page.waitForURL(process.env.BASE_URL+'/web/index.php/dashboard/index');
    //await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'); 
    console.log(await page.title());
    await expect(dashboardPage.dashboardTitleText).toHaveText('Dashboard');
    await page.context().storageState(
        {path:'./playwrightAuth/.auth/auth.json'})



}
);


