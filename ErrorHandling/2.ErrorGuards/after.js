// Before
function showUserInfo(user) {
  if (!user) {
    return;
  }

  console.log(`User: ${user.name}`);
}

// After
function showUserInfo(user) {
  if (!user || !user.name) {
    throw new Error("Invalid user object: 'name' is required");
  }

  console.log(`User: ${user.name}`);
}
try {
  showUserInfo(user);
} catch (err) {
  showToast(err.message); // یا log توی dev mode
}
