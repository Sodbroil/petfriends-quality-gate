const { test, expect } = require('@playwright/test');

test('Basic login test', async ({ page }) => {
  await page.goto('https://petfriends.skillfactory.ru/');
  await page.click('text=Login');
  await page.fill('input[type="email"]', 'test@example.com');
  await page.fill('input[type="password"]', 'Test123!');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/.*my_pets/);
});
