import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) { 
        this.page = page; 
        this.userNameInput = this.page.getByTestId('username-input'); // Prepare object here to reduce code duplication when using it in other methods
        this.passwordInput = this.page.getByTestId('password-input');
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
    }

    async goToLoginPage(){
        await this.page.goto('https://workshop-playwright.vercel.app/');
    }

    async displayLoginPage(){
        await expect(this.page.getByTestId('login-title')).toContainText("Welcome To ODDS| Conference");
    }

    async loginWithUsernameAndPassword(){
        await this.userNameInput.fill('john');
        await this.passwordInput.fill('doe');
        await this.loginButton.click();
    }
}