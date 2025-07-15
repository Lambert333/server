export let login_selectors = {
  login_button: '[data-testid="login-submit-button"]',
  email_input: '[data-testid="login-email-input"]',
  password_input: '[data-testid="login-password-input"]',
  back_button: '[data-testid="login-back-button"]',
  register_button: '[data-testid="login-register-button"]',
  error_message: '.css-146c3p1.r-howw7u.r-1enofrn.r-15d164r',
};

export let profile_selectors = {
  main_info: '//*[@data-testid="user-avatar"]/../../..',
  gallery_posts: '//*[@data-testid="gallery-item-0"]/..',
  edit_profile_button: '[data-testid="user-edit-profile-button"]',
  status: 'css-146c3p1.r-1khnkhu.r-15d164r.r-ubezar',
  edit_button: '[data-testid="user-edit-profile-button"]',
};

export let edit_profile_selectors = {
  save_button: '[data-testid="edit-save-button"]',
  name_edit_button: '[data-testid="edit-name-input"]',
  cancel_button: '[data-testid="edit-cancel-button"]',
};
