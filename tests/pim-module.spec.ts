import { test, expect } from '../fixtures/hooks-fixture';
import PIMModuleData from '../data/pim-module-data.json';
test.describe('[PIM Module] PIM Module Test Suite', () => {
    test(
        '[PIM] Verify that the user is able to add a new employee',
        {
            tag: ['@UI', '@UAT', '@Regression'],
            annotation: {
                type: 'Test Case',
                description: 'TC_Case link',
            },
        },
        async ({ gotoUrl, leftNavigationPage, pimPage }) => {

            await test.step('Open PIM Module', async () => {
                await leftNavigationPage.openPIMModule();
            });

            await test.step('Add New Employee', async () => {
                await pimPage.addNewPIMEmployee(
                    PIMModuleData.firstname,
                    PIMModuleData.middlename,
                    PIMModuleData.lastname
                );

                await expect(pimPage.newEmployeeNameHeading).toHaveText(
                    `${PIMModuleData.firstname} ${PIMModuleData.lastname}`
                );
            });
        }
    );

});

