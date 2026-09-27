import { test, expect } from '@playwright/test';

test('Register new user', async ({ page }) => {

const username = `mt${Date.now().toString().slice(-8)}`;

await page.goto('https://parabank.parasoft.com/parabank/index.htm');
await page.getByRole('link', { name: 'Register' }).click();
await page.locator('input[name="customer.firstName"]').fill('Moutaz');
await page.locator('input[name="customer.lastName"]').fill('Test');
await page.locator('input[name="customer.address.street"]').fill('123 Test Street');
await page.locator('input[name="customer.address.city"]').fill('San Francisco');
await page.locator('input[name="customer.address.state"]').fill('CA');
await page.locator('input[name="customer.address.zipCode"]').fill('94105');
await page.locator('input[name="customer.phoneNumber"]').fill('4155551234');
await page.locator('input[name="customer.ssn"]').fill('123456789');

await page.locator('input[name="customer.username"]').fill(username);

await page.locator('input[name="customer.password"]').fill('Test123!');
await page.locator('input[name="repeatedPassword"]').fill('Test123!');

await page.getByRole('button', { name: 'Register' }).click();

await expect(page.getByText('Your account was created successfully.')).toBeVisible();
await page.pause();
});

