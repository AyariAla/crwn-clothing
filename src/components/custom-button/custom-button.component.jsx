import React from "react";
import { CustomButtonContainer } from "./custom-button.styles";
//import "./custom-button.styles.scss";
//google signin for the google button styling, checking whether it is a googlesign btn or not
const CustomButton = ({ children, ...props }) => (
	<CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);
export default CustomButton;
