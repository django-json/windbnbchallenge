import React, { Fragment } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";

import "./searchbar.styles.css";

import SearchBarOptions from "../searchbar-options/searchbar-options.component";
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
							<SearchBarOptions
								guests={guests}
								addGuest={addGuest}
								removeGuest={removeGuest}
								handleChange={handleChange}
							/>
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
