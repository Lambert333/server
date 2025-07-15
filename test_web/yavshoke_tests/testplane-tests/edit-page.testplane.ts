import { edit_profile_selectors } from '../config/selectors';
import { user } from '../config/auth';
import { openEdit, returnDefaultName } from '../config/edit';

beforeEach(async ({ browser }) => {
  await openEdit(browser);
});

describe('Страница редактирования профиля', () => {
  it('Редактирование с пустыми именем', async ({ browser }) => {
    await browser.$(edit_profile_selectors.name_edit_button).setValue('');
    await browser.$(edit_profile_selectors.save_button).click();
    await browser.assertView('error-edit-name-form', { disableAnimation: true });
  });
  it('Редактирование с новым именем', async ({ browser }) => {
    await browser.$(edit_profile_selectors.name_edit_button).setValue(user.edit_name);
    await browser.$(edit_profile_selectors.save_button).click();
    await browser.assertView('correct-edit-name-form', { disableAnimation: true });
    await browser.$(edit_profile_selectors.cancel_button).click();
    await returnDefaultName(browser);
  });
});
