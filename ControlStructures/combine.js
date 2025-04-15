function placeOrder(user, cart) {
  if (user && user.isLoggedIn) {
    if (user.address) {
      if (cart.items.length > 0) {
        const allInStock = cart.items.every((item) => item.inStock);
        if (allInStock) {
          submitOrder(cart);
        } else {
          alert("Some items are out of stock.");
        }
      } else {
        alert("Your cart is empty.");
      }
    } else {
      alert("Please add an address before placing your order.");
    }
  } else {
    alert("Please log in to continue.");
  }
}

function canPlaceOrder(user, cart) {
  const isLoggedIn = user && user.isLoggedIn;
  const hasAddress = !!user.address;
  const hasItems = cart.items.length > 0;
  const allInStock = cart.items.every((item) => item.inStock);

  return isLoggedIn && hasAddress && hasItems && allInStock;
}

function placeOrder(user, cart) {
  if (!canPlaceOrder(user, cart)) {
    return alert("Please check your login, address, or cart items.");
  }

  submitOrder(cart);
}
