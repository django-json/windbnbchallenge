import React from "react";
import classNames from "classnames";

import "./input.styles.css";

const Input = ({
	label,
	fullWidth,
	id,
	name,
	placeholder,
	type,
	value,
	variant,
	handleChange,
}) => {
	const classnames = classNames("input--focus", {
		"input--fullwidth": fullWidth,
		[`input--${variant}`]: variant,
	});

	return (
		<div className="input input-container">
			{label && (
				<label className="input__label" htmlFor={label.toLowerCase()}>
					{label}
				</label>
			)}
			<input
				className={classnames}
				type={type}
				name={name}
				value={value}
				id={id}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default Input;
