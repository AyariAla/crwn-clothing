import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";
import "./directory.styles.scss";

const Directory = ({ sections }) => (
	//this component becomes a F.C because we don't need access to the state
	//the directory state was here which is useless, since the data won't be changed, so we migrate it to the reducer
	<div className='directory-menu'>
		{/* used to be this.state.sections.map(({id, title, imageUrl}))
          instead of mapping them 1by1 we spread the values
           using ...otherSectionProps to map them since
          they are the exact property name */}
		{sections.map(({ id, ...otherSectionProps }) => (
			<MenuItem key={id} {...otherSectionProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
