import React from "react";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<div className='collection-page'>
			<h2 className='title'> {title}</h2>
			<div className='items'>
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	//1st time using the 2nd optionnal param of mapStateToProps which is the props of the comp wrapped in connect
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});
//this selector is different because takes a part of the state depending onthe url param

export default connect(mapStateToProps)(CollectionPage);
