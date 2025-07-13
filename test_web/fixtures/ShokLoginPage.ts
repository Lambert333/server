import { Page, Locator } from '@playwright/test';

export class ShokLoginPage {
  public title: Locator;
  public inputEmail: Locator;
  public inputPassword: Locator;
  public loginButton: Locator;
  public backButton: Locator;
  public registrationButton: Locator;
  public errorMessage: Locator;
  public emptyEmailMessage: Locator;
  public emptyPasswordMessage: Locator;

  constructor(public readonly page: Page) {
    this.title = this.page.getByText('Войти в ШОК', { exact: true });
    this.inputEmail = this.page.getByTestId('login-email-input');
    this.inputPassword = this.page.getByTestId('login-password-input');
    this.loginButton = this.page.getByTestId('login-submit-button');
    this.backButton = this.page.getByTestId('login-back-button');
    this.registrationButton = this.page.getByTestId('login-register-button');
    this.errorMessage = this.page.getByText('Неправильный логин или пароль', { exact: true });
    this.emptyEmailMessage = this.page.getByText('Введите email', { exact: true });
    this.emptyPasswordMessage = this.page.getByText('Введите пароль', { exact: true });
  }

  public async open() {
    await this.page.goto('/login');
  }

  public async fillEmailInput(email: string) {
    await this.inputEmail.click();
    await this.inputEmail.fill(email);
  }

  public async fillPasswordInput(password: string) {
    await this.inputPassword.click();
    await this.inputPassword.fill(password);
  }

  public async clearEmailInput() {
    await this.inputEmail.click();
    await this.inputEmail.clear();
  }

  public async clearPasswordInput() {
    await this.inputPassword.click();
    await this.inputPassword.clear();
  }

  public async clickLoginButton() {
    await this.loginButton.click();
  }

  public async clickBackButton() {
    await this.backButton.click();
  }

  public async clickRegistrationButton() {
    await this.registrationButton.click();
  }

  public async Login(email: string, password: string) {
    await this.fillEmailInput(email);
    await this.fillPasswordInput(password);
    await this.clickLoginButton();
  }
}
