import { test as baseTest } from './common-fixture';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { UserPage } from '../pages/UserPage';

type HooksFixtureType = {
    gotoUrl: any;
    logout: any;
};

interface GotoUrlFixture {
    loginPage: LoginPage;
}

interface LogoutFixture {
    userPage: UserPage;
}

export const test = baseTest.extend<HooksFixtureType>({
    gotoUrl: async ({ loginPage }: GotoUrlFixture, use: () => Promise<void>) => {
        await loginPage.openApplicationUrl(); // Step 1: open the app
        await use();                          // Step 2: run the actual test
    },

    logout: async ({ userPage }: LogoutFixture, use: (fn: () => Promise<void>) => Promise<void>) => {
        await use(async () => {
            await userPage.logout();            // Step 3: log out after the test
        });
    },
});

export { expect } from '@playwright/test';

