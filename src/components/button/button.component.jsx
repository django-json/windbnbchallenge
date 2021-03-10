import React from "react";
import classNames from "classnames";

import "./button.styles.css";

const Button = ({
	iconAsLabel,
	id,
	startIcon,
	type,
	label,
	variant,
	className,
	handleClick,
}) => {
	const classnames = classNames("btn", className, {
		[`btn--${variant}`]: variant,
	});

	return (
		<button
			type={type ? type : "button"}
			id={id}
			className={classnames}
			onClick={() => handleClick(id)}
		>
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

Button.defaultProps = {
	handleClick: (id) => {},
};
