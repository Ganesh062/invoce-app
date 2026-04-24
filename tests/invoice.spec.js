const { test, expect } = require('@playwright/test');

function randomString() {
  return Math.random().toString(36).substring(7);
}

test('User full flow (real user behavior)', async ({ page }) => {

  const name = `User_${randomString()}`;
  const email = `user_${randomString()}@test.com`;
  const password = '123456';

  // Open app
  await page.goto('/');

  // 👉 Signup
  await page.getByText('Signup').click();

  await page.getByPlaceholder('Name').fill(name);
  await page.getByPlaceholder('Email').fill(email);
  await page.getByPlaceholder('Password').fill(password);

  await page.getByRole('button', { name: 'Signup' }).click();

  // ✅ VERIFY signup → login page visible
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();

  // 👉 Login
  await page.getByPlaceholder('Email').fill(email);
  await page.getByPlaceholder('Password').fill(password);

  await page.getByRole('button', { name: 'Login' }).click();

  // ✅ VERIFY login success
  await expect(page.getByText('Add Invoice')).toBeVisible();

  // 👉 Create invoice
  await page.getByRole('button', { name: 'Add Invoice' }).click();

  await page.getByPlaceholder('Invoice Number').fill('INV123');
  await page.getByPlaceholder('Client Name').fill('Test Client');
  await page.getByPlaceholder('Amount').fill('1000');

  await page.locator('input[type="date"]').fill('2026-04-18');
  await page.selectOption('select', 'Paid');

  await page.getByRole('button', { name: 'Save Invoice' }).click();

  // ✅ VERIFY invoice created
  await expect(page.getByText('Test Client')).toBeVisible();

  // 👉 Delete invoice
  await page.getByRole('button', { name: 'Delete' }).first().click();

  // ✅ VERIFY invoice deleted
  await expect(page.getByText('Test Client')).not.toBeVisible();
});