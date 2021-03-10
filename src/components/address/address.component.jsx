import React from "react";

import "./address.styles.css";

const Address = ({ city, country, handleLocationClick }) => (
	<div className="address" onClick={() => handleLocationClick(city, country)}>
		<i className="material-icons">location_on</i>
		<span className="address__info">{`${city}, ${country}`}</span>
	</div>
);

export default Address;
