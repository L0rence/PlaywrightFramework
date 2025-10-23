import { test, expect } from '../fixtures/hooks-fixture';
import loginModuleData from '../data/login-module-data.json';

test.use({
    storageState: {
        cookies: [],
        origins: []
    }
});
test.describe('[Login Module] Login Module Test Suite', () => {

    test('[Login] Verify that the user cannot log in with an invalid password', {
        tag: ['@UI', '@UAT'],
        annotation: {
            type: 'Test Case', description: 'TC_Case link'
        }
    },
        async ({ gotoUrl, loginPage, commonUtils }) => {
            const username = commonUtils.decryptData(process.env.USER_NAME!);
            await loginPage.loginOrangeHRMApplication(username, loginModuleData.wrong_password);
            await expect(loginPage.invalidCredentialsText).toHaveText(loginModuleData.invalid_credentials_text);
            await expect(loginPage.usernameInput).toBeVisible();
        });

    test('[Login] Verify that the user cannot log in with an invalid username and password', {
        tag: ['@UI', '@UAT', '@Regression'],
        annotation: {
            type: 'Test Case', description: 'TC_Case link'
        }

    },
        async ({ gotoUrl, loginPage, commonUtils }) => {
            await loginPage.loginOrangeHRMApplication(loginModuleData.wrong_username, loginModuleData.wrong_password);
            await expect(loginPage.invalidCredentialsText).toHaveText(loginModuleData.invalid_credentials_text);
            await expect(loginPage.usernameInput).toBeVisible();
        });

    test('[Login] Verify that the user can log in with an valid username and valid password', {
        tag: ['@UI', '@UAT', '@Regression','@Visual'],
        annotation: {
            type: 'Test Case', description: 'TC_Case link'
        }
    },
        async({ gotoUrl, loginPage,leftNavigationPage, commonUtils }) => {
            const username = commonUtils.decryptData(process.env.USER_NAME!);
            const password = commonUtils.decryptData(process.env.PASSWORD!);
            await loginPage.loginOrangeHRMApplication(username, password);
            await expect(leftNavigationPage.organgeHRMLogo).toHaveScreenshot('orangeHRMLogo.png');
            await expect(leftNavigationPage.leftNavigationMenuPanel).toHaveScreenshot('LeftNavigationMenuPanel.png');
        });


});

