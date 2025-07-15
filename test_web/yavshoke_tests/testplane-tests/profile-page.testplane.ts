import { profile_selectors } from '../config/selectors';
import { openProfile } from '../config/authorization';

beforeEach(async ({ browser }) => {
  await openProfile(browser);
});

describe('Страницы профиля', () => {
  it('Информация о пользователе', async ({ browser }) => {
    const button_edit = await browser.$(profile_selectors.edit_button);
    await button_edit.waitForDisplayed({ timeout: 5000 });
    await browser.$(profile_selectors.main_info);
    await browser.assertView('profile-main-info', { disableAnimation: true });
  });
  it('Галерея постов', async ({ browser }) => {
    const button_edit = await browser.$(profile_selectors.edit_button);
    await button_edit.waitForDisplayed({ timeout: 5000 });
    await browser.$(profile_selectors.gallery_posts).isExisting();
    await browser.$(profile_selectors.gallery_posts);
    await browser.assertView('profile-gallery_posts', { disableAnimation: true });
  });
});
