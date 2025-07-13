import { expect } from '@playwright/test';
import { test } from '../fixtures/index';
import { Page } from '@playwright/test';

test.use({ storageState: './tests/setup/.auth/authorization.json' });

test.describe('Элементы страницы', () => {
  test('Проверка элементов страницы', async ({ renamePage }) => {
    await test.step('Проверка заголовка', async () => {
      await expect(renamePage.title).toBeVisible();
    });
    await test.step('Проверка поля ввода имени', async () => {
      await expect(renamePage.inputName).toBeVisible();
    });
    await test.step('Проверка кнопки сохранения', async () => {
      await expect(renamePage.buttonSave).toBeVisible();
    });
    await test.step('Проверка кнопки отмены', async () => {
      await expect(renamePage.buttonCancel).toBeVisible();
    });
  });
});

test.describe('Проверка текста и плейсхолдеров', () => {
  test('Проверка текста и плейсхолдеров', async ({ renamePage }) => {
    await test.step('Проверка кнопки сохранения', async () => {
      await expect(renamePage.buttonSave).toHaveText('Save Changes');
    });
    await test.step('Проверка кнопки отмены', async () => {
      await expect(renamePage.buttonCancel).toHaveText('Cancel');
    });
    await test.step('Проверка текста внутри имени', async () => {
      await expect(renamePage.inputName).toHaveAttribute('placeholder', 'Enter your name');
    });
  });
});

test.describe('Проверка работы кнопок', () => {
  test('Проверка кнопки отмены', async ({ renamePage, page }) => {
    await test.step('Проверка кнопки отмены', async () => {
      await expect(renamePage.buttonCancel).toBeVisible();
      await renamePage.clickCancelButton();
      await expect(page.url()).toContain('/');
    });
  });
});
