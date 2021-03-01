import React from "react";

import "./header.styles.css";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import SearchBar from "../searchbar/searchbar.component";

const addresses = [
	{
		city: "Helsinki",
		country: "Finland",
	},
	{
		city: "Turku",
		country: "Finland",
	},
	{
		city: "Oulu",
		country: "Finland",
	},
	{
		city: "Vaasa",
		country: "Finland",
	},
];

const Header = () => (
	<header className="header">
		<a className="header__logo" href="#">
			<Logo />
		</a>
		<SearchBar
			city="Helsinki"
			country="Finland"
			addresses={addresses}
			isClick={false}
		/>
	</header>
);

export default Header;
