function handleCheckout(user, cart) {
  if (user) {
    if (cart.items.length > 0) {
      if (cart.isStockAvailable) {
        proceedToCheckout();
      } else {
        alert("Some items are out of stock.");
      }
    } else {
      alert("Your cart is empty.");
    }
  } else {
    alert("Please log in to continue.");
  }
}
