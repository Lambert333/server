import { user } from './auth';
import { login_selectors } from './selectors';

export async function openProfile(browser) {
  await browser.url('/login');
  await browser.pause(5000);
  await browser.$(login_selectors.email_input).setValue(user.valid_email);
  await browser.$(login_selectors.password_input).setValue(user.valid_password);
  await browser.$(login_selectors.login_button).click();
}
