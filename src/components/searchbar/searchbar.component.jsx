import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";

import "./searchbar.styles.css";

import Input from "../input/input.component";
import Button from "../button/button.component";
import List from "../list/list.component";
import Address from "../address/address.component";

Modal.setAppElement("#root");

const SearchBar = ({
	city,
	country,
	guests,
	addresses,
	modalIsOpen,
	openModal,
	closeModal,
}) => (
	<section className="searchbar">
		<div className="searchbar__wrapper" onClick={openModal}>
			<div className="searchbar__city">
				<p>{`${city}, ${country}`}</p>
			</div>
			<div className="searchbar__guests">
				<p>{guests ? `${guests} guests` : "Add guests"}</p>
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
					<Button iconAsLabel="clear" variant="symbol" />
				</div>
				<div className="searchbar__collapsible-wrapper">
					<Input
						type="text"
						name="location"
						id="location"
						label="Location"
						placeholder="Add location"
						fullWidth
					/>
					<Input
						type="text"
						name="guests"
						id="guests"
						label="Guests"
						placeholder="Add Guests"
						fullWidth
					/>
					<div className="searchbar__button-container">
						<Button startIcon="search" label="Search" />
					</div>
				</div>
				<div className="searchbar__options">
					<section className="searchbar__location-list">
						<List items={addresses} itemRenderer={Address} />
					</section>
					<section className="searchbar__guests-type">
						<div>
							<p className="searchbar__guests-title">Adults</p>
							<p className="searchbar__guests-subtitle">
								Ages 13 or above
							</p>
							<div className="searchbar__guest-adult">
								<Button
									className="btn--remove"
									iconAsLabel="remove"
									variant="symbol"
								/>
								<Input
									type="number"
									name="adult"
									value={0}
									id="adult"
									variant="numbered"
									fullWidth
								/>
								<Button
									className="btn--add"
									iconAsLabel="add"
									variant="symbol"
								/>
							</div>
						</div>
						<div>
							<p className="searchbar__guests-title">Children</p>
							<p className="searchbar__guests-subtitle">
								Ages 2 - 12
							</p>
							<div className="searchbar__guest-children">
								<Button
									className="btn--remove"
									iconAsLabel="remove"
									variant="symbol"
								/>
								<Input
									type="number"
									name="children"
									value={0}
									id="children"
									variant="numbered"
									fullWidth
								/>
								<Button
									className="btn--add"
									iconAsLabel="add"
									variant="symbol"
								/>
							</div>
						</div>
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
	modalIsOpen: true,
	openModal: () => {},
	closeModal: () => {},
};

// const SearchBar = ({ city, country, guests, addresses, isClick }) => (
// 	<section className="searchbar">
// 		{!isClick ? (
// 			<div className="searchbar__wrapper">
// 				<div className="searchbar__city">
// 					<p>{`${city}, ${country}`}</p>
// 				</div>
// 				<div className="searchbar__guests">
// 					<p>{guests ? `${guests} guests` : "Add guests"}</p>
// 				</div>
// 				<div className="searchbar__icon-wrapper">
// 					<i className="searchbar__icon material-icons">search</i>
// 				</div>
// 			</div>
// 		) : (
// 			<div className="searchbar__collapsible">
// 				<div className="searchbar__collapsible-wrapper">
// 					<Input
// 						type="text"
// 						name="location"
// 						id="location"
// 						label="Location"
// 						placeholder="Add location"
// 						fullWidth
// 					/>
// 					<Input
// 						type="text"
// 						name="guests"
// 						id="guests"
// 						label="Guests"
// 						placeholder="Add Guests"
// 						fullWidth
// 					/>
// 					<div className="searchbar__button-container">
// 						<Button startIcon="search" label="Search" />
// 					</div>
// 				</div>
// 				<div className="searchbar__options">
// 					<section className="searchbar__location-list">
// 						<List items={addresses} itemRenderer={Address} />
// 					</section>
// 					<section className="searchbar__guests-type">
// 						<div>
// 							<p className="searchbar__guests-title">Adults</p>
// 							<p className="searchbar__guests-subtitle">
// 								Ages 13 or above
// 							</p>
// 							<div className="searchbar__guest-adult">
// 								<Button
// 									className="btn--remove"
// 									iconAsLabel="remove"
// 									variant="symbol"
// 								/>
// 								<Input
// 									type="number"
// 									name="adult"
// 									value={0}
// 									id="adult"
// 									variant="numbered"
// 									fullWidth
// 								/>
// 								<Button
// 									className="btn--add"
// 									iconAsLabel="add"
// 									variant="symbol"
// 								/>
// 							</div>
// 						</div>
// 						<div>
// 							<p className="searchbar__guests-title">Children</p>
// 							<p className="searchbar__guests-subtitle">
// 								Ages 2 - 12
// 							</p>
// 							<div className="searchbar__guest-children">
// 								<Button
// 									className="btn--remove"
// 									iconAsLabel="remove"
// 									variant="symbol"
// 								/>
// 								<Input
// 									type="number"
// 									name="children"
// 									value={0}
// 									id="children"
// 									variant="numbered"
// 									fullWidth
// 								/>
// 								<Button
// 									className="btn--add"
// 									iconAsLabel="add"
// 									variant="symbol"
// 								/>
// 							</div>
// 						</div>
// 					</section>
// 				</div>
// 			</div>
// 		)}
// 	</section>
// );
