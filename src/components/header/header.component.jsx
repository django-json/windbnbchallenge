import React from "react";

import "./header.styles.css";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import SearchBar from "../searchbar/searchbar.component";

const Header = (props) => (
	<header className="header">
		<a className="header__logo" href="#">
			<Logo />
		</a>
		<SearchBar {...props} />
	</header>
);

export default Header;
