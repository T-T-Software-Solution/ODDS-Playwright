import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) { 
        this.page = page; 
    }

    async expectDisplayHomePage(){
        await expect(this.page.getByText('Welcome to ODDS')).toBeVisible();
    }
}
