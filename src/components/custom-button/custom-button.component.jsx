import React from "react";

import "./custom-button.styles.scss";
//google signin for the google button styling, checking whether it is a googlesign btn or not
const CustomButton = ({
	children,
	isGoogleSignIn,
	inverted,
	...otherProps
}) => (
	<button
		className={`${inverted ? "inverted" : ""} ${
			isGoogleSignIn ? "google-sign-in" : ""
		} custom-button`}
		{...otherProps}
	>
		{children}
	</button>
);
export default CustomButton;
