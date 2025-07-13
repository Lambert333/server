import { Page, Locator } from '@playwright/test';

export class ShokMainPage {
  public title: Locator;
  public inputEmail: Locator;
  public checkButton: Locator;
  public loginButton: Locator;
  public loginWrongText: Locator;
  public loginSuccessText: Locator;

  constructor(public readonly page: Page) {
    this.title = this.page.getByText('Я в ШОКе', { exact: true });
    this.inputEmail = this.page.getByTestId('main-email-input');
    this.checkButton = this.page.getByTestId('main-check-button');
    this.loginButton = this.page.getByTestId('main-login-button');
    this.loginWrongText = this.page.getByText('Ты еще не в ШОКе', { exact: true });
    this.loginSuccessText = this.page.getByText('Ты уже в ШОКе', { exact: true });
  }

  public async open() {
    await this.page.goto('/');
  }

  public async fillEmailInput(email: string) {
    await this.inputEmail.click();
    await this.inputEmail.fill(email);
  }

  public async clickCheckButton() {
    await this.checkButton.click();
  }

  public async clickLoginButton() {
    await this.loginButton.click();
  }

  public async checkUser(email: string) {
    await this.fillEmailInput(email);
    await this.clickCheckButton();
  }
}
