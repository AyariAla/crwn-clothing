import React from "react";

import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => (
	<div className='shop-page'>
		<Route exact path={`${match.path}`} component={CollectionsOverview} />
		<Route
			path={`${match.path}/:collectionId`}
			component={CollectionPage}
		/>{" "}
		{/* Route from App.js automatically passes a route as /shop all we need is to append the collection to the path to get ex /shop/hats */}
	</div>
);

export default ShopPage;
