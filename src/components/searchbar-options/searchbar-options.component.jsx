import React, { Fragment } from "react";

import Button from "../button/button.component";
import Input from "../input/input.component";

const SearchBarOptions = ({ guests, addGuest, removeGuest, handleChange }) => (
	<Fragment>
		<div>
			<p className="searchbar__guests-title">Adults</p>
			<p className="searchbar__guests-subtitle">Ages 13 or above</p>
			<div className="searchbar__guest-adult">
				<Button
					className="btn--remove"
					iconAsLabel="remove"
					variant="symbol"
					id="adult"
					handleClick={removeGuest}
				/>
				<Input
					type="text"
					name="adult"
					value={guests.adult > 0 ? guests.adult : ""}
					placeholder="0"
					id="adult"
					variant="numbered"
					fullWidth
					handleChange={handleChange}
				/>
				<Button
					className="btn--add"
					iconAsLabel="add"
					variant="symbol"
					id="adult"
					handleClick={addGuest}
				/>
			</div>
		</div>
		<div>
			<p className="searchbar__guests-title">Children</p>
			<p className="searchbar__guests-subtitle">Ages 2 - 12</p>
			<div className="searchbar__guest-children">
				<Button
					className="btn--remove"
					iconAsLabel="remove"
					variant="symbol"
					id="children"
					handleClick={removeGuest}
				/>
				<Input
					type="text"
					name="children"
					value={guests.children > 0 ? guests.children : ""}
					placeholder="0"
					id="children"
					variant="numbered"
					fullWidth
					handleChange={handleChange}
				/>
				<Button
					className="btn--add"
					iconAsLabel="add"
					variant="symbol"
					id="children"
					handleClick={addGuest}
				/>
			</div>
		</div>
	</Fragment>
);

export default SearchBarOptions;
