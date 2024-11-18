import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { HomePage } from '../pages/home-page';

test.describe('User Login', () => {
  test('Login Success', async ({ page }) => {
    
    const loginPage = new LoginPage(page);

    await loginPage.goToLoginPage();
    await loginPage.displayLoginPage();
    await loginPage.loginWithUsernameAndPassword();

    const homePage = new HomePage(page);
    await homePage.expectDisplayHomePage();
  });
});