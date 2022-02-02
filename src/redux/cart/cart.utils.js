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

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id); //if the id is the same then remove the item
	}

	return cartItems.map(
		(
			cartItem //else decrease the quantity
		) =>
			cartItem.id === cartItemToRemove.id
				? { ...cartItem, quantity: cartItem.quantity - 1 }
				: cartItem
	);
};
