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

export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	(collections) => Object.keys(collections).map((key) => collections[key])
);
//get keys from collections and map over the array of keys to get the values of collections obj on that key, giving an array of items

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
