import { Page,Locator } from "playwright/test"; 

export class PIMPage {
    /**
     * Define locators
     */
    readonly page: Page;
    readonly addPimButton: Locator;
    readonly firstNameTextBox: Locator;
    readonly middleNameTextBox: Locator;
    readonly lastNameTextBox: Locator;
    readonly saveButton: Locator;
    readonly newEmployeeNameHeading: Locator;

    /**
     * 
     * @param page 
     */
    constructor(page: Page) {
        this.page = page;
        this.addPimButton = page.locator("//button[contains(.,'Add')]");
        this.firstNameTextBox = page.getByRole('textbox', { name: 'First Name' });
        this.middleNameTextBox = page.getByRole('textbox', { name: 'Middle Name' });
        this.lastNameTextBox = page.getByRole('textbox', { name: 'Last Name' });
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.newEmployeeNameHeading = page.locator('.orangehrm-edit-employee-name');

    }
    /**
     * To a new PIM Employee
     * @param firstNameVal 
     * @param middleNameVal 
     * @param lastNameVal 
     */
    async addNewPIMEmployee(firstNameVal: string, middleNameVal: string, lastNameVal: string) {
        await this.addPimButton.click();
        await this.firstNameTextBox.fill(firstNameVal);
        await this.middleNameTextBox.fill(middleNameVal);
        await this.lastNameTextBox.fill(lastNameVal);
        await this.saveButton.click();
    }

    async verifyNewEmployeeNameHeading(firstNameVal: string, middleNameVal: string, lastNameVal: string) {
        await this.page.waitForTimeout(3000);
        await this.newEmployeeNameHeading.waitFor();
        const empName = await this.newEmployeeNameHeading.textContent();
        const fullName = firstNameVal + " " + middleNameVal + " " + lastNameVal;
        return empName?.includes(fullName);
    }

}