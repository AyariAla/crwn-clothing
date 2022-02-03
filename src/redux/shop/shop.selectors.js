import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	(shop) => shop.collections
);
/* x1
const COLLECTION_ID_MAP = {
	hats: 1,
	sneakers: 2,
	jackets: 3,
	womens: 4,
	mens: 5,
};
*/
export const selectCollection = (collectionUrlParam) =>
	createSelector(
		[selectCollections],
		(collections) => collections[collectionUrlParam]
		/* x1
		collections.find(
			(collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam] //find the collection.id matching the url paramets of our collection id map and returning the elemnt
		)*/
	);

//this selector is different because takes a part of the state depending onthe url param
