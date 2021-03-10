import React, { Fragment } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";

import "./searchbar.styles.css";

import Input from "../input/input.component";
import Button from "../button/button.component";
import List from "../list/list.component";
import Address from "../address/address.component";

Modal.setAppElement("#root");

const SearchBar = ({
	showCaret,
	guests,
	addresses,
	location,
	modalIsOpen,
	openModal,
	closeModal,
	handleChange,
	toggleIsClick,
	handleSearchSubmit,
	handleLocationClick,
	addGuest,
	removeGuest,
	isClick,
}) => (
	<section className="searchbar">
		<div className="searchbar__wrapper" onClick={openModal}>
			<div className="searchbar__city">
				{location ? (
					<p>{location}</p>
				) : (
					<p className="searchbar__placeholder">Add Location</p>
				)}
			</div>
			<div className="searchbar__guests">
				{guests.adult || guests.children ? (
					<p>{`${guests.adult + guests.children} guests`}</p>
				) : (
					<p className="searchbar__placeholder">Add guests</p>
				)}
			</div>
			<div className="searchbar__icon-wrapper">
				<i className="searchbar__icon material-icons">search</i>
			</div>
		</div>
		<Modal
			className="searchbar__modal"
			overlayClassName="searchbar__modal--overlay"
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			contentLabel="Searchbar Collapsible Modal"
		>
			<div className="searchbar__collapsible">
				<div className="searchbar__collapsible-header">
					<p>Edit your search</p>
					<Button
						iconAsLabel="clear"
						variant="symbol"
						handleClick={closeModal}
					/>
				</div>
				<form
					className="searchbar__collapsible-wrapper"
					onSubmit={handleSearchSubmit}
				>
					<Input
						type="text"
						name="location"
						value={location}
						id="location"
						label="Location"
						placeholder="Add location"
						fullWidth
						handleChange={handleChange}
					/>
					<div
						className="searchbar__input-wrapper"
						onClick={() => toggleIsClick()}
					>
						<Input
							type="text"
							name="guests"
							value={guests.total ? `${guests.total} guests` : ""}
							id="guests"
							label="Guests"
							placeholder="Add Guests"
							fullWidth
							readOnly
						/>
					</div>
					<div className="searchbar__button-container">
						<Button
							type="submit"
							startIcon="search"
							label="Search"
						/>
					</div>
				</form>
				<div className="searchbar__options">
					<section className="searchbar__location-list">
						{showCaret && (
							<List
								items={addresses}
								itemRenderer={Address}
								handleLocationClick={handleLocationClick}
							/>
						)}
					</section>
					<section className="searchbar__guests-type">
						{isClick && (
							<Fragment>
								<div>
									<p className="searchbar__guests-title">
										Adults
									</p>
									<p className="searchbar__guests-subtitle">
										Ages 13 or above
									</p>
									<div className="searchbar__guest-adult">
										<Button
											className="btn--remove"
											iconAsLabel="remove"
											variant="symbol"
											id="adult"
											handleClick={removeGuest}
										/>
										<Input
											type="number"
											name="adult"
											value={Number(guests.adult)}
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
									<p className="searchbar__guests-title">
										Children
									</p>
									<p className="searchbar__guests-subtitle">
										Ages 2 - 12
									</p>
									<div className="searchbar__guest-children">
										<Button
											className="btn--remove"
											iconAsLabel="remove"
											variant="symbol"
											id="children"
											handleClick={removeGuest}
										/>
										<Input
											type="number"
											name="children"
											value={Number(guests.children)}
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
						)}
					</section>
				</div>
			</div>
		</Modal>
	</section>
);

export default SearchBar;

SearchBar.propTypes = {
	modalIsOpen: PropTypes.bool,
	openModal: PropTypes.func,
	closeModal: PropTypes.func,
};

SearchBar.defaultProps = {
	modalIsOpen: false,
	openModal: () => {},
	closeModal: () => {},
};
