import React from "react";

import "./address.styles.css";

const Address = ({ city, country }) => (
	<div className="address">
		<i className="material-icons">location_on</i>
		<span className="address__info">{`${city}, ${country}`}</span>
	</div>
);

export default Address;
