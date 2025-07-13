import { expect } from '@playwright/test';
import { test } from '../fixtures/index';
import { FakeEmail, ValidUserData } from '../constants/userData';

test.describe('Элементы страницы', () => {
  test('Проверка элементов страницы', async ({ mainPage }) => {
    await test.step('Проверка заголовка', async () => {
      await expect(mainPage.title).toBeVisible();
    });
    await test.step('Проверка поля ввода email', async () => {
      await expect(mainPage.inputEmail).toBeVisible();
    });
    await test.step('Проверка плейсхолдера поля ввода email', async () => {
      await expect(mainPage.inputEmail).toHaveAttribute('placeholder', 'Введите email');
    });
    await test.step('Проверка кнопки проверки', async () => {
      await expect(mainPage.checkButton).toBeVisible();
    });
    await test.step('Проверка кнопки входа', async () => {
      await expect(mainPage.inputEmail).toBeVisible();
    });
  });
});

test.describe('Авторизация', () => {
  test('Проверка авторизации', async ({ mainPage }) => {
    await test.step('Проверка зарегистрированного пользователя', async () => {
      await mainPage.checkUser(ValidUserData.email);
      await expect(mainPage.loginSuccessText).toBeVisible();
    });
    await test.step('Проверка не зарегистрированного пользователя', async () => {
      await mainPage.checkUser(FakeEmail);
      await expect(mainPage.loginWrongText).toBeVisible();
    });
  });
});

test.describe('Проверка кнопок', () => {
  test('Проверка кнопки входа', async ({ mainPage }) => {
    await test.step('Проверка кнопки входа', async () => {
      await expect(mainPage.loginButton).toBeVisible();
      await expect(mainPage.loginButton).toBeEnabled();
    });
  });
  test('Проверка кнопки проверки', async ({ mainPage }) => {
    await test.step('Проверка кнопки проверки', async () => {
      await expect(mainPage.checkButton).toBeVisible();
      await expect(mainPage.checkButton).toBeEnabled();
    });
  });

  test.describe('Проверка функциональности кнопок', () => {
    test('Проверка кнопки входа', async ({ mainPage, page }) => {
      await test.step('Проверка кнопки входа', async () => {
        await mainPage.loginButton.click();
        await expect(page.url()).toContain('/login');
      });
    });
  });
});
