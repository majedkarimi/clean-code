function checkout(user, cart) {
  if (!user || !user.isLoggedIn) {
    return alert("Please log in first");
  }

  if (!cart || cart.items.length === 0) {
    return alert("Your cart is empty");
  }

  // continue with checkout...
  submitOrder(cart);
}
