import { expect } from '@playwright/test';
import { ValidUserData } from '../../constants/userData';
import { test } from '../../fixtures/index';

test('Авторизация пользователя через токен-авторизации', async ({ page }) => {
  await test.step('Переход на страницу авторизации', async () => {
    await page.goto('/login');
  });
  await test.step('Заполнение полей авторизации', async () => {
    await page.getByTestId('login-email-input').fill(ValidUserData.email);
    await page.getByTestId('login-password-input').fill(ValidUserData.password);
    await page.getByTestId('login-submit-button').click();
  });
  await test.step('Проверка авторизации', async () => {
    await expect(page.getByTestId('user-logout-button')).toBeVisible();
  });
  await test.step('Сохранение состояния авторизации', async () => {
    await page.context().storageState({ path: './tests/setup/.auth/authorization.json' });
  });
});
