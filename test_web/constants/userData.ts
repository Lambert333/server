import { faker } from '@faker-js/faker';

export const ValidUserData = {
  email: 'privet@mail.ru',
  password: '123123',
};

export const FakeUserData = {
  email: faker.internet.email(),
  password: faker.internet.password(),
  age: faker.number.int({ min: 1, max: 100 }).toString(),
};

export const FakeEmail = faker.internet.email();
export const FakePassword = faker.internet.password();
export const FakeAge = faker.number.int({ min: 1, max: 100 }).toString();
