import { expect } from '@playwright/test';
import { test } from '../fixtures/index';
import {
  FakeAge,
  FakeEmail,
  FakePassword,
  FakeUserData,
  ValidUserData,
} from '../constants/userData';

test.describe('Элементы страницы', () => {
  test('Проверка элементов страницы', async ({ registrationPage }) => {
    await test.step('Проверка заголовка', async () => {
      await expect(registrationPage.title).toBeVisible();
    });
    await test.step('Проверка поля ввода email', async () => {
      await expect(registrationPage.inputEmail).toBeVisible();
    });
    await test.step('Проверка плейсхолдера поля ввода email', async () => {
      await expect(registrationPage.inputEmail).toHaveAttribute('placeholder', 'Email');
    });
    await test.step('Проверка поля ввода пароля', async () => {
      await expect(registrationPage.inputPassword).toBeVisible();
    });
    await test.step('Проверка плейсхолдера поля ввода пароля', async () => {
      await expect(registrationPage.inputPassword).toHaveAttribute('placeholder', 'Пароль');
    });
    await test.step('Проверка поля ввода возраста', async () => {
      await expect(registrationPage.inputAge).toBeVisible();
      await expect(registrationPage.inputAge).toHaveAttribute('placeholder', 'Возраст');
    });
    await test.step('Проверка кнопки регистрации', async () => {
      await expect(registrationPage.registrationButton).toBeVisible();
      await expect(registrationPage.registrationButton).toHaveText('Зарегистрироваться');
    });
    await test.step('Проверка кнопки назад', async () => {
      await expect(registrationPage.toBackButton).toBeVisible();
      await expect(registrationPage.toBackButton).toHaveText('Назад');
    });
  });
});

test.describe('Проверка негативных пользовательских сценариев', () => {
  test('Проверка регистрации с пустыми полями', async ({ registrationPage }) => {
    await test.step('Проверка регистрации с пустыми полями', async () => {
      await registrationPage.page.waitForTimeout(1000);
      await registrationPage.clickRegisterButton();
      await expect(registrationPage.emptyEmailMessage).toBeVisible();
      await expect(registrationPage.emptyPasswordMessage).toBeVisible();
      await expect(registrationPage.emptyAgeMessage).toBeVisible();
    });
  });
  test('Проверка регистрации с некорректным email', async ({ registrationPage }) => {
    await test.step('Проверка регистрации с некорректным email', async () => {
      await registrationPage.page.waitForTimeout(1000);
      await registrationPage.fillEmailInput('test');
      await registrationPage.clickRegisterButton();
      await expect(registrationPage.wrongEmailMessage).toBeVisible();
    });
  });
  test('Проверка регистрации с некорректным паролем', async ({ registrationPage }) => {
    await test.step('Проверка регистрации с некорректным паролем', async () => {
      await registrationPage.page.waitForTimeout(1000);
      await registrationPage.fillPasswordInput('12345');
      await registrationPage.clickRegisterButton();
      await expect(registrationPage.wrongPasswordMessage).toBeVisible();
    });
  });
  test('Проверка регистрации с некорректным возрастом', async ({ registrationPage }) => {
    await test.step('Проверка регистрации с некорректным возрастом', async () => {
      await registrationPage.page.waitForTimeout(1000);
      await registrationPage.fillAgeInput('test');
      await registrationPage.clickRegisterButton();
      await expect(registrationPage.wrongAgeMessage).toBeVisible();
    });
  });
  test('Проверка регистрации с заполненным email и паролем, но не заполненным возрастом', async ({
    registrationPage,
  }) => {
    await test.step('Проверка регистрации с заполненным email и паролем, но не заполненным возрастом', async () => {
      await registrationPage.page.waitForTimeout(1000);
      await registrationPage.fillEmailInput(FakeEmail);
      await registrationPage.fillPasswordInput(FakePassword);
      await registrationPage.clickRegisterButton();
      await expect(registrationPage.emptyAgeMessage).toBeVisible();
    });
  });
  test('Проверка регистрации с заполненным email и возрастом, но не заполненным паролем', async ({
    registrationPage,
  }) => {
    await test.step('Проверка регистрации с заполненным email и возрастом, но не заполненным паролем', async () => {
      await registrationPage.page.waitForTimeout(1000);
      await registrationPage.fillEmailInput(FakeEmail);
      await registrationPage.fillAgeInput(FakeAge);
      await registrationPage.clickRegisterButton();
      await expect(registrationPage.emptyPasswordMessage).toBeVisible();
    });
  });
  test('Проверка регистрации с заполненным паролем и возрастом, но не заполненным email', async ({
    registrationPage,
  }) => {
    await test.step('Проверка регистрации с заполненным паролем и возрастом, но не заполненным email', async () => {
      await registrationPage.page.waitForTimeout(1000);
      await registrationPage.fillPasswordInput(FakePassword);
      await registrationPage.fillAgeInput(FakeAge);
      await registrationPage.clickRegisterButton();
      await expect(registrationPage.emptyEmailMessage).toBeVisible();
    });
  });
});

test.describe('Проверка позитивных пользовательских сценариев', () => {
  test('Проверка регистрации с корректными данными', async ({ registrationPage }) => {
    await test.step('Проверка регистрации с корректными данными', async () => {
      await registrationPage.page.waitForTimeout(1000);
      await registrationPage.fillEmailInput(FakeUserData.email);
      await registrationPage.fillPasswordInput(FakeUserData.password);
      await registrationPage.fillAgeInput(FakeUserData.age);
      await registrationPage.clickRegisterButton();
    });
  });
});
