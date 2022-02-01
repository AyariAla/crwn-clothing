export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToAdd.id //finding the cartItem
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 } //if found add quantity
				: cartItem
		);
	}
	return [...cartItems, { ...cartItemToAdd, quantity: 1 }]; //appending the newItem to the cart
};
