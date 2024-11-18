import { test, expect } from '@playwright/test';

test('Login Success', async ({ page }) => {
  await page.goto('https://workshop-playwright.vercel.app/');
  await page.getByTestId('username-input').fill('john');
  await page.getByTestId('password-input').fill('doe');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Welcome to ODDS')).toBeVisible();
});

test('Miss Password', async ({ page }) => {
    await page.goto('https://workshop-playwright.vercel.app/');
    await page.getByTestId('username-input').click();
    await page.getByTestId('username-input').fill('');
    await page.getByTestId('username-input').press('CapsLock');
    await page.getByTestId('username-input').fill('admin');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Password is required')).toBeVisible();
  });