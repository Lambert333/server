export const profileYoungStatusMock = {
  flags: {
    age: {
      enabled: true,
      young: {
        from: 0,
        to: 21,
      },
      adult: {
        from: 22,
        to: 68,
      },
      old: {
        from: 69,
        to: 99,
      },
      oldFrom: 35,
      youngFrom: 2,
    },
  },
};

export const profileOldStatusMock = {
  flags: {
    age: {
      enabled: true,
      young: {
        from: 22,
        to: 68,
      },
      adult: {
        from: 0,
        to: 21,
      },
      old: {
        from: 69,
        to: 99,
      },
      oldFrom: 2,
      youngFrom: 16,
    },
  },
};
