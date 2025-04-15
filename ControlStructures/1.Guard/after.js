//Before
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
// After
function handleCheckout(user, cart) {
  if (!user) return alert("Please log in to continue.");
  if (cart.items.length === 0) return alert("Your cart is empty.");
  if (!cart.isStockAvailable) return alert("Some items are out of stock.");

  proceedToCheckout();
}
