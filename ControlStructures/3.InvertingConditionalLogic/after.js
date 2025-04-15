if (!user.address || user.cart.length === 0) {
  return;
}

showExpressDeliveryOption();

const hasAddress = !!user.address;
const hasItems = user.cart.length > 0;

if (hasAddress && hasItems) {
  showExpressDeliveryOption();
}
