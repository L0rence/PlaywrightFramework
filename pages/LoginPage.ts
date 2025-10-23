import { Locator, Page } from "@playwright/test";

export class LoginPage {
    /**
     * Define locators
     */
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly invalidCredentialsText: Locator;

    /**
     * 
     * @param page 
     */
    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByRole('textbox', { name: 'Username' })
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.invalidCredentialsText = page.locator('//p[text()="Invalid credentials"]');

    }
    /**
     * Open OrangeHRM Application URL
     */
    async openApplicationUrl() {
        await this.page.goto(`${process.env.BASE_URL}/web/index.php/auth/login`);
    }
    /**
     * Login into OrangeHRM Application
     * @param usernameVal 
     * @param passwordVal 
     */
    async loginOrangeHRMApplication(usernameVal: string, passwordVal: string) {
        await this.usernameInput.fill(usernameVal);
        await this.passwordInput.fill(passwordVal);
        await this.loginButton.click();
    }
}