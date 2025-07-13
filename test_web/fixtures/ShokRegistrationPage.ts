import { Page, Locator } from '@playwright/test';

export class ShokRegistrationPage {
  public title: Locator;
  public inputEmail: Locator;
  public inputPassword: Locator;
  public inputAge: Locator;
  public registrationButton: Locator;
  public toBackButton: Locator;
  public wrongEmailMessage: Locator;
  public wrongPasswordMessage: Locator;
  public wrongAgeMessage: Locator;
  public emptyEmailMessage: Locator;
  public emptyPasswordMessage: Locator;
  public emptyAgeMessage: Locator;

  constructor(public readonly page: Page) {
    this.title = this.page.getByText('Регистрация в ШОКе', { exact: true });
    this.inputEmail = this.page.getByTestId('register-email-input');
    this.inputPassword = this.page.getByTestId('register-password-input');
    this.inputAge = this.page.getByTestId('register-age-input');
    this.registrationButton = this.page.getByTestId('register-submit-button');
    this.toBackButton = this.page.getByTestId('register-back-button');
    this.wrongEmailMessage = this.page.getByText('Неправильный email-адрес', { exact: true });
    this.wrongPasswordMessage = this.page.getByText('Пароль должен содержать минимум 6 символов', {
      exact: true,
    });
    this.wrongAgeMessage = this.page.getByText('Возраст должен быть числом', { exact: true });
    this.emptyEmailMessage = this.page.getByText('Введите email', { exact: true });
    this.emptyPasswordMessage = this.page.getByText('Введите пароль', { exact: true });
    this.emptyAgeMessage = this.page.getByText('Введите возраст', { exact: true });
  }

  public async open() {
    await this.page.goto('/register');
  }

  public async fillEmailInput(email: string) {
    await this.inputEmail.click();
    await this.inputEmail.fill(email);
  }

  public async fillPasswordInput(password: string) {
    await this.inputPassword.click();
    await this.inputPassword.fill(password);
  }

  public async fillAgeInput(age: string) {
    await this.inputAge.click();
    await this.inputAge.fill(age);
  }

  public async clickRegisterButton() {
    await this.registrationButton.click();
  }

  public async clickBackButton() {
    await this.toBackButton.click();
  }
}
