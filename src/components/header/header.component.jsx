import React from "react";

import "./header.styles.css";

import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = () => (
	<header className="header">
		<a href="#">
			<Logo />
		</a>
	</header>
);

export default Header;
