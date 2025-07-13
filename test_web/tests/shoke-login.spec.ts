import { expect } from '@playwright/test';
import { test } from '../fixtures/index';
import { FakeEmail, FakePassword, ValidUserData } from '../constants/userData';

test.describe('Элементы страницы', () => {
  test('Проверка элементов страницы', async ({ loginPage }) => {
    await test.step('Проверка заголовка', async () => {
      await expect(loginPage.title).toBeVisible();
    });
    await test.step('Проверка поля ввода email', async () => {
      await expect(loginPage.inputEmail).toBeVisible();
    });
    await test.step('Проверка поля ввода пароля', async () => {
      await expect(loginPage.inputPassword).toBeVisible();
    });
    await test.step('Проверка кнопки входа', async () => {
      await expect(loginPage.loginButton).toBeVisible();
    });
    await test.step('Проверка кнопки регистрации', async () => {
      await expect(loginPage.registrationButton).toBeVisible();
    });
    await test.step('Проверка кнопки назад', async () => {
      await expect(loginPage.backButton).toBeVisible();
    });
    await test.step('Проверка ошибки ввода email', async () => {
      await loginPage.fillPasswordInput(FakePassword);
      await loginPage.clickLoginButton();
      await expect(loginPage.emptyEmailMessage).toBeVisible();
      await loginPage.clearPasswordInput();
    });
    await test.step('Проверка ошибки ввода пароля', async () => {
      await loginPage.fillEmailInput(FakeEmail);
      await loginPage.clickLoginButton();
      await expect(loginPage.emptyPasswordMessage).toBeVisible();
      await loginPage.clearEmailInput();
      await loginPage.clearPasswordInput();
    });
    await test.step('Проверка ошибки входа', async () => {
      await loginPage.fillEmailInput(FakeEmail);
      await loginPage.fillPasswordInput(FakePassword);
      await loginPage.clickLoginButton();
      await expect(loginPage.errorMessage).toBeVisible();
    });
  });
});

test.describe('Проверка функциональности кнопок', () => {
  test('Проверка кнопки регистрации', async ({ loginPage, page }) => {
    await test.step('Проверка кнопки регистрации', async () => {
      await loginPage.clickRegistrationButton();
      await expect(page.url()).toContain('/register');
    });
  });
  test('Проверка кнопки назад', async ({ loginPage, page }) => {
    await test.step('Проверка кнопки назад', async () => {
      await loginPage.clickBackButton();
      await expect(page.url()).toContain('/');
    });
  });
  test('Проверка кнопки входа', async ({ loginPage, page }) => {
    await test.step('Проверка кнопки входа', async () => {
      await loginPage.clickLoginButton();
      await expect(page.url()).toContain('/login');
    });
  });
});

test.describe('Проверка процесса авторизации', () => {
  test('Проверка процесса авторизации с корректными данными', async ({ loginPage, page }) => {
    await test.step('Проверка процесса авторизации', async () => {
      await loginPage.fillEmailInput(ValidUserData.email);
      await loginPage.fillPasswordInput(ValidUserData.password);
      await loginPage.clickLoginButton();
      await expect(page.url()).toContain('/');
    });
  });
  test('Проверка процесса авторизации с некорректными данными', async ({ loginPage, page }) => {
    await test.step('Проверка процесса авторизации с некорректными данными', async () => {
      await loginPage.fillEmailInput(FakeEmail);
      await loginPage.fillPasswordInput(FakePassword);
      await loginPage.clickLoginButton();
      await expect(page.url()).toContain('/login');
      await expect(loginPage.errorMessage).toBeVisible();
    });
  });
});
