import { edit_profile_selectors, profile_selectors } from '../config/selectors';
import { user } from './auth';
import { openProfile } from './authorization';

export async function openEdit(browser) {
  await openProfile(browser);
  await browser.$(profile_selectors.edit_button).click();
  await browser.pause(1009);
}

export async function openEditFromProfile(browser) {
  await browser.$(profile_selectors.edit_button).click();
  await browser.pause(1009);
}

export async function returnDefaultName(browser) {
  await openEditFromProfile(browser);
  await browser.$(edit_profile_selectors.name_edit_button).setValue(user.name);
  await browser.$(edit_profile_selectors.save_button).click();
}
