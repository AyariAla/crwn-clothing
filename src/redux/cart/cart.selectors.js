import { createSelector } from "reselect";

const selectCart = (state) => state.cart; //getting a piece of the whole reducer which is in this case the cart part

export const selectCartItems = createSelector(
	//2 args ,1st arg an array of input selectors and the 2nd arg is a fct returning the value we want from the selector
	//must be in the same order the selectors were written
	[selectCart],
	(cart) => cart.cartItems
);
//since we are using createSelector to make selectCartItems, it is a memoi selector

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	(cartItems) =>
		cartItems.reduce(
			(accumulatedQuantity, cartItem) =>
				accumulatedQuantity + cartItem.quantity,
			0
		)
);

//when selectCartItemsCount is called which needs to reference selectCartItems which references selectCart.
// selectCart get the whole state, gets the cart par which passes it to the selectCartItems which passes it to the selectCarItemsCount
