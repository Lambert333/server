import { user } from '../config/auth';
import { login_selectors } from '../config/selectors';
beforeEach(async ({ browser }) => {
  await browser.url(`/login`);
});

describe('Страница авторизации', () => {
  it('Стандартное состояние', async ({ browser }) => {
    await browser.assertView('login-page');
  });
  it('Фокус на поле вводы почты', async ({ browser }) => {
    await browser.$(login_selectors.email_input).click();
    await browser.assertView('login-focus-email');
  });
  it('Фокус на поле ввода пароля', async ({ browser }) => {
    await browser.$(login_selectors.password_input).click();
    await browser.assertView('login-focus-password');
  });
  it('Фокус на кнопке авторизации', async ({ browser }) => {
    await browser.$(login_selectors.login_button);
    await browser.assertView('login-focus-button-login');
  });
  it('Фокус на кнопке назад', async ({ browser }) => {
    await browser.$(login_selectors.back_button);
    await browser.assertView('login-focus-button-back');
  });
  it('Фокус на кнопке регистрации', async ({ browser }) => {
    await browser.$(login_selectors.register_button);
    await browser.assertView('login-focus-button-register');
  });
  it('Ошибка при авторизации с пустыми полями', async ({ browser }) => {
    await browser.$(login_selectors.login_button).click();
    await browser.assertView('login-error-with-empty-creds');
  });
  it('Ошибка при вводе email не по маске *@*.*', async ({ browser }) => {
    await browser.$(login_selectors.email_input).setValue(user.invalid_email);
    await browser.$(login_selectors.password_input).setValue(user.invalid_password);
    await browser.$(login_selectors.login_button).click();
    const errorMessage = await browser.$(login_selectors.error_message);
    await errorMessage.waitForDisplayed({ timeout: 5000 });
    await expect(await errorMessage.getText()).toEqual('Произошла ошибка');
    await browser.assertView('login-error-message');
  });
  it('Ошибка при вводе пароля без email', async ({ browser }) => {
    (await browser.$(login_selectors.password_input)).setValue(user.valid_password);
    (await browser.$(login_selectors.login_button)).click();
    const errorMessage = await browser.$(login_selectors.error_message);
    await errorMessage.waitForDisplayed({ timeout: 5000 });
    await expect(await errorMessage.getText()).toEqual('Введите email');
    await browser.assertView('login-error-with-empty-email');
  });
  it('Ошибка при вводе email без пароля', async ({ browser }) => {
    (await browser.$(login_selectors.email_input)).setValue(user.valid_email);
    (await browser.$(login_selectors.login_button)).click();
    const errorMessage = await browser.$(login_selectors.error_message);
    await errorMessage.waitForDisplayed({ timeout: 5000 });
    await expect(await errorMessage.getText()).toEqual('Введите пароль');
    await browser.assertView('login-error-with-empty-password');
  });
  it('Ошибка при авторизации по неправильным кредам', async ({ browser }) => {
    (await browser.$(login_selectors.email_input)).setValue(user.not_register_mail);
    (await browser.$(login_selectors.password_input)).setValue(user.wrong_password);
    (await browser.$(login_selectors.login_button)).click();
    const errorMessage = await browser.$(login_selectors.error_message);
    await errorMessage.waitForDisplayed({ timeout: 5000 });
    await expect(await errorMessage.getText()).toEqual('Неправильный логин или пароль');
    await browser.assertView('login-error-message-with-invalid-creds');
  });
});
