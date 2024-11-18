import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';

test.describe('User Login', () => {
  test('Login Success', async ({ page }) => {
    
    const loginPage = new LoginPage(page);

    await loginPage.goToLoginPage();
    await loginPage.displayLoginPage();
    await loginPage.loginWithUsernameAndPassword();

  });
});