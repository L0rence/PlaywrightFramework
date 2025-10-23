import { Locator, Page } from "@playwright/test";
import { expect } from "@playwright/test";

export class DashboardPage{
    
    readonly page:Page;
    readonly dashboardTitleText : Locator;      
    constructor(page: Page){
        this.page = page;
        this.dashboardTitleText = page.getByRole('heading', { name: 'Dashboard' });        
    }    
    // async verifyDashboardTitleText(expectedText:string){
    //     await expect(this.dashboardTitleText).toHaveText(expectedText);
    // }    
}