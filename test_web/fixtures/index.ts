import { test as base } from '@playwright/test';
import { ShokMainPage } from './ShokMainPage';
import { ShokLoginPage } from './ShokLoginPage';
import { ShokRegistrationPage } from './ShokRegistrationPage';
import { ShokProfilePage } from './ShokProfilePage';
import { ShokRenamePage } from './ShokRenamePage';

type MyFixtures = {
  mainPage: ShokMainPage;
  loginPage: ShokLoginPage;
  registrationPage: ShokRegistrationPage;
  profilePage: ShokProfilePage;
  renamePage: ShokRenamePage;
};

export const test = base.extend<MyFixtures>({
  mainPage: async ({ page }, use) => {
    const mainPage = new ShokMainPage(page);
    await mainPage.open();
    await use(mainPage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new ShokLoginPage(page);
    await loginPage.open();
    await use(loginPage);
  },
  registrationPage: async ({ page }, use) => {
    const registrationPage = new ShokRegistrationPage(page);
    await registrationPage.open();
    await use(registrationPage);
  },
  profilePage: async ({ page }, use) => {
    const profilePage = new ShokProfilePage(page);
    await profilePage.open();
    await use(profilePage);
  },
  renamePage: async ({ page }, use) => {
    const renamePage = new ShokRenamePage(page);
    await renamePage.open();
    await use(renamePage);
  },
});
