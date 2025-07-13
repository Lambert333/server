import { expect } from '@playwright/test';
import { test } from '../fixtures/index';
import { profileYoungStatusMock, profileOldStatusMock } from './mocks/mocks';

test.use({ storageState: './tests/setup/.auth/authorization.json' });

test.describe('Элементы страницы', () => {
  test('Проверка элементов страницы', async ({ profilePage }) => {
    await test.step('Проверка фотографии пользователя', async () => {
      await expect(profilePage.photoProfile).toBeVisible();
    });
    await test.step('Проверка имени пользователя', async () => {
      await expect(profilePage.photoProfile).toBeVisible();
    });
    await test.step('Проверка статуса пользователя', async () => {
      await expect(profilePage.profileYoungStatus).toBeVisible();
    });
    await test.step('Проверка кнопки редактирования профиля', async () => {
      await expect(profilePage.editProfileButton).toBeVisible();
    });
    await test.step('Проверка фотографий пользователя', async () => {
      await expect(profilePage.firstPhoto).toBeVisible();
      await expect(profilePage.secondPhoto).toBeVisible();
      await expect(profilePage.thirdPhoto).toBeVisible();
      await expect(profilePage.fourthPhoto).toBeVisible();
    });
    await test.step('Проверка кнопки выхода', async () => {
      await expect(profilePage.logoutButton).toBeVisible();
    });
  });
});

test.describe('Проверка всех возможных статусов пользователя', () => {
  test('Проверка статуса "Ты молоденький котик"', async ({ profilePage }) => {
    await test.step('Замена статуса на "Ты молоденький котик"', async () => {
      await profilePage.page.route('https://api.yavshok.ru/experiments', (route) => {
        route.fulfill({
          status: 200,
          body: JSON.stringify(profileYoungStatusMock),
        });
      });
    });
    await test.step('Проверка статуса "Ты молоденький котик"', async () => {
      await expect(profilePage.profileYoungStatus).toBeVisible();
    });
    await test.step('Unmount', async () => {
      await profilePage.page.route('https://api.yavshok.ru/experiments', (route) => {
        route.abort();
      });
    });
  });
  test('Проверка статуса "Ты старый котик"', async ({ profilePage }) => {
    await test.step('Замена статуса на "Ты старый котик"', async () => {
      await profilePage.page.route('https://api.yavshok.ru/experiments', (route) => {
        route.fulfill({
          status: 200,
          body: JSON.stringify(profileOldStatusMock),
        });
      });
    });
    await test.step('Проверка статуса "Ты старый котик"', async () => {
      await expect(profilePage.profileOldStatus).toBeVisible();
    });
    await test.step('Unmount', async () => {
      await profilePage.page.route('https://api.yavshok.ru/experiments', (route) => {
        route.abort();
      });
    });
  });
  test.describe('Проверка функциональности кнопок', () => {
    test('Проверка кнопки выхода', async ({ profilePage, page }) => {
      await test.step('Проверка кнопки выхода', async () => {
        await profilePage.logoutButton.click();
        await expect(page.url()).toContain('/');
      });
    });
    test('Проверка кнопки редактирования профиля', async ({ profilePage, page }) => {
      await test.step('Проверка кнопки редактирования профиля', async () => {
        await profilePage.editProfileButton.click();
        await expect(page.url()).toContain('/edit');
      });
    });
  });
});
