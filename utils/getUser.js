import users from '../fixtures/users.json' with { type: 'json' };

const getUser = (userId) => {
  const user = users.users.find(user => user.id === userId);
  if (!user) throw new Error('User not found');
  return user;
};

export { getUser };