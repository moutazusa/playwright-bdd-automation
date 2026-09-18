import { test, expect } from '@playwright/test';
import { login } from '../helpers/login';

test('user can log in successfully', async ({ page }) => {
  await login(page, 'standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.title')).toHaveText('Products');
});


test('invalid login shows an error message', async ({ page }) => {
  await login(page, 'invalid_user', 'wrong_password');

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

test('logged in user can add a product to the cart', async ({ page }) => {
  await login(page, 'standard_user', 'secret_sauce');

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});