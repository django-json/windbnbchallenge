import React, { Component } from "react";
import _ from "lodash";
import debounce from "lodash/debounce";

import "./App.css";

import List from "./components/list/list.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import { extractDistinctAddress, isGreaterThanZero } from "./utils/utils";

import stays from "./stays.json";

class App extends Component {
	constructor() {
		super();

		this.state = {
			stays: [...stays],
			modalIsOpen: false,
			location: "",
			guests: {
				adult: 0,
				children: 0,
				total: 0,
			},
			isClick: false,
			showCaret: false,
			addresses: [],
		};

		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleLocationClick = this.handleLocationClick.bind(this);
		this.toggleIsClick = this.toggleIsClick.bind(this);
		this.toggleCaret = this.toggleCaret.bind(this);
		this.addGuest = this.addGuest.bind(this);
		this.removeGuest = this.removeGuest.bind(this);
		this.filterStays = this.filterStays.bind(this);
		this.updateTotalGuests = this.updateTotalGuests.bind(this);
	}

	componentDidMount() {
		this.setState({
			addresses: extractDistinctAddress(stays),
		});
	}

	openModal() {
		this.setState({ modalIsOpen: true });
	}

	closeModal() {
		this.setState({ modalIsOpen: false }, () =>
			this.setState({ isClick: false })
		);
	}

	// Debounce function
	debounceCaret = debounce(() => this.toggleCaret(true), 1000);

	// To handle both location and guests changes.
	handleChange(event) {
		const value = event.target.value;

		switch (event.target.id) {
			case "location":
				this.setState({ location: value }, () =>
					this.setState({ isClick: false })
				);
				this.debounceCaret();
				break;
			case "adult":
				this.setState({
					guests: {
						...this.state.guests,
						adult: Number(value.replace(/\D/, "")),
					},
				});
				break;
			case "children":
				this.setState({
					guests: {
						...this.state.guests,
						children: Number(value.replace(/\D/, "")),
					},
				});
				break;
			default:
				break;
		}

		this.updateTotalGuests();
	}

	toggleCaret(booleanValue) {
		if (booleanValue) {
			const { location } = this.state;

			if (location.trim()) {
				this.setState({
					showCaret: true,
				});
			} else {
				this.setState({ showCaret: false });
			}
		} else {
			this.setState({ showCaret: false });
		}
	}

	// To handle location on click from the given input suggestion
	handleLocationClick(city, country) {
		this.setState({ location: `${city}, ${country}` });

		this.toggleCaret(false);
	}

	toggleIsClick() {
		this.setState({ isClick: !this.state.isClick });
	}

	addGuest(id) {
		switch (id) {
			case "adult":
				this.setState({
					guests: {
						...this.state.guests,
						adult: this.state.guests.adult + 1,
					},
				});
				break;
			case "children":
				this.setState({
					guests: {
						...this.state.guests,
						children: this.state.guests.children + 1,
					},
				});
				break;
			default:
				break;
		}

		this.updateTotalGuests();
	}

	removeGuest(id) {
		switch (id) {
			case "adult":
				this.setState({
					guests: {
						...this.state.guests,
						adult: isGreaterThanZero(this.state.guests.adult)
							? this.state.guests.adult - 1
							: this.state.guests.adult,
					},
				});
				break;
			case "children":
				this.setState({
					guests: {
						...this.state.guests,
						children: isGreaterThanZero(this.state.guests.children)
							? this.state.guests.children - 1
							: this.state.guests.children,
					},
				});
				break;
			default:
				break;
		}

		this.updateTotalGuests();
	}

	updateTotalGuests() {
		this.setState((state) => ({
			guests: {
				...state.guests,
				total: state.guests.adult + state.guests.children,
			},
		}));
	}

	handleSearchSubmit(event) {
		this.closeModal();
		event.preventDefault();
	}

	filterStays(stays) {
		const { location, guests } = this.state;
		const [city, country] = [...location.split(", ")];

		if (
			(!_.isEmpty(city) && !_.isEmpty(country)) ||
			(!_.isUndefined(city) && !_.isUndefined(country))
		) {
			return stays.filter(
				(stay) =>
					stay.city.toLowerCase().includes(city.toLowerCase()) &&
					stay.country
						.toLowerCase()
						.includes(country.toLowerCase()) &&
					stay.maxGuests >= guests.total
			);
		} else if (guests.total > 0) {
			return stays.filter((stay) => stay.maxGuests >= guests.total);
		} else {
			return stays;
		}
	}

	render() {
		const { stays, addresses, location, ...states } = this.state;
		const filteredAddresses = addresses.filter(
			(address) =>
				address.city.toLowerCase().includes(location.toLowerCase()) ||
				address.country.toLowerCase().includes(location.toLowerCase())
		);

		const filteredStays = this.filterStays(stays);

		return (
			<div className="App">
				<Header
					openModal={this.openModal}
					closeModal={this.closeModal}
					toggleIsClick={this.toggleIsClick}
					handleChange={this.handleChange}
					handleSearchSubmit={this.handleSearchSubmit}
					handleLocationClick={this.handleLocationClick}
					addGuest={this.addGuest}
					removeGuest={this.removeGuest}
					location={location}
					addresses={filteredAddresses}
					{...states}
				/>
				<main className="stays">
					<div className="stays__heading">
						<h1 className="stays__place">Stays in Finland</h1>
						<p className="stays__total">{`${filteredStays.length} stays`}</p>
					</div>
					{filteredStays.length > 0 ? (
						<List
							className="App__card-list"
							items={filteredStays}
						/>
					) : (
						<p className="stays__unavailable">Unavailable ...</p>
					)}
				</main>
				<Footer />
			</div>
		);
	}
}

export default App;
