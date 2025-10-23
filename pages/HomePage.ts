
import { Locator, Page } from "@playwright/test";

 class HomePage {
    readonly page:Page;
    readonly homePageHeading: Locator;
    readonly addToCartButton: Locator;
    readonly addToCartRemoveButton: Locator;
    readonly cartIcon: Locator;

    constructor(page:Page){
        this.page = page;
        this.addToCartButton = page.locator("//button[@id='add-to-cart-sauce-labs-backpack']").first();
        this.addToCartRemoveButton = page.locator("//button[@id='remove-sauce-labs-backpack']").first();
        this.cartIcon = page.locator("(//span[@class='shopping_cart_badge'])[1]");  
        this.homePageHeading = page.locator("//div[@class='app_logo']");  
    }
    async verifyHomePage(){
        
     } 


}