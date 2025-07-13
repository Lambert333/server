import { Page, Locator } from '@playwright/test';

export class ShokRenamePage {
  public title: Locator;
  public inputName: Locator;
  public buttonSave: Locator;
  public buttonCancel: Locator;

  constructor(public readonly page: Page) {
    this.title = this.page.getByText('Edit Profile', { exact: true });
    this.inputName = this.page.getByTestId('edit-name-input');
    this.buttonSave = this.page.getByTestId('edit-save-button');
    this.buttonCancel = this.page.getByTestId('edit-cancel-button');
  }

  public async open() {
    await this.page.goto('/edit');
  }

  public async fillNameInput(name: string) {
    await this.inputName.click();
    await this.inputName.fill(name);
  }

  public async clickSaveButton() {
    await this.buttonSave.click();
  }

  public async clickCancelButton() {
    await this.buttonCancel.click();
  }
}
