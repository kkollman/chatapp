const User = require('../models/User.model.js');

describe('Create a new User', () => {
  const name = 'Johnny Kalesony';
  const userName = 'johnny1';
  const user = new User({ name, userName });

  it('Matches the given data', () => {
    expect(user.name).toEqual(name);
    expect(user.userName).toEqual(userName);
  });
});
