import React from "react";
import classNames from "classnames";

import "./button.styles.css";

const Button = ({
	iconAsLabel,
	startIcon,
	label,
	variant,
	className,
	handleClick,
}) => {
	const classnames = classNames("btn", className, {
		[`btn--${variant}`]: variant,
	});

	return (
		<button type="button" className={classnames}>
			{startIcon && (
				<i className="btn__icon material-icons">{startIcon}</i>
			)}
			{iconAsLabel ? (
				<i className="material-icons">{iconAsLabel}</i>
			) : (
				label
			)}
		</button>
	);
};
export default Button;
