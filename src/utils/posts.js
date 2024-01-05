export const posts = [
  { id: 1, userId: getRandomUserId(), title: 'Post Title 1', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, userId: getRandomUserId(), title: 'Post Title 2', body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: 3, userId: getRandomUserId(), title: 'Post Title 3', body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
  { id: 4, userId: getRandomUserId(), title: 'Post Title 4', body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.' },
  { id: 5, userId: getRandomUserId(), title: 'Post Title 5', body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { id: 6, userId: getRandomUserId(), title: 'Post Title 6', body: 'Fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.' },
  { id: 7, userId: getRandomUserId(), title: 'Post Title 7', body: 'Sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { id: 8, userId: getRandomUserId(), title: 'Post Title 8', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 9, userId: getRandomUserId(), title: 'Post Title 9', body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: 10, userId: getRandomUserId(), title: 'Post Title 10', body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
  { id: 11, userId: getRandomUserId(), title: 'Post Title 11', body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.' },
  { id: 12, userId: getRandomUserId(), title: 'Post Title 12', body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { id: 13, userId: getRandomUserId(), title: 'Post Title 13', body: 'Fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.' },
  { id: 14, userId: getRandomUserId(), title: 'Post Title 14', body: 'Sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { id: 15, userId: getRandomUserId(), title: 'Post Title 15', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 16, userId: getRandomUserId(), title: 'Post Title 16', body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: 17, userId: getRandomUserId(), title: 'Post Title 17', body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
  { id: 18, userId: getRandomUserId(), title: 'Post Title 18', body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.' },
  { id: 19, userId: getRandomUserId(), title: 'Post Title 19', body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { id: 20, userId: getRandomUserId(), title: 'Post Title 20', body: 'Fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.' },
];

function getRandomUserId() {
  return Math.floor(Math.random() * 20) + 1;
}
