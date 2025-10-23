import { Locator, Page } from '@playwright/test';

export class LeftNavigationPage {
    /**
     * Define locators
     */
    readonly page: Page;
    readonly pimLink: Locator;
    readonly organgeHRMLogo:Locator;
    readonly leftNavigationMenuPanel:Locator;
    
    /**
     * 
     * @param page 
     */
    constructor(page: Page) {
        this.page = page;
        this.pimLink = page.getByRole('link', { name: 'PIM' });
        this.organgeHRMLogo = page.locator("img[alt='client brand banner']");
        this.leftNavigationMenuPanel = page.locator('div.oxd-sidepanel-body');

    }
    /**
     * Open PIM Module
     */
    async openPIMModule() {
        await this.pimLink.click();
    }
}