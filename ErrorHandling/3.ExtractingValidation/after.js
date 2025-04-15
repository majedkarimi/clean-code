// Before
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
// After
function validateCheckout(user, cart) {
  if (!user || !user.isLoggedIn) {
    throw new Error("Please log in first");
  }

  if (!cart || cart.items.length === 0) {
    throw new Error("Your cart is empty");
  }
}

function checkout(user, cart) {
  try {
    validateCheckout(user, cart);
    submitOrder(cart);
  } catch (error) {
    showToast(error.message);
  }
}
