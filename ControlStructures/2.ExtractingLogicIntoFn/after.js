// Before
if (user && !user.isLoggedIn && product.isActive && !product.isDeleted) {
  addToFavorites(product);
}

// After
function canFavorite(user, product) {
  return user && !user.isLoggedIn && product.isActive && !product.isDeleted;
}

if (canFavorite(user, product)) {
  addToFavorites(product);
}
