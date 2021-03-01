import React, { createElement } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./list.styles.css";

import Card from "../card/card.component";

const List = ({ items, itemRenderer, className, ...props }) => (
	<article className={classNames("list", className)}>
		{items.map((item, index) => {
			// Set the new props for the item renderer
			let newProps = Object.assign({ key: index }, item, { ...props });
			// Assign the new props to the item renderer
			return createElement(itemRenderer, newProps);
		})}
	</article>
);

export default List;

List.propTypes = {
	items: PropTypes.array,
	itemRenderer: PropTypes.func,
};

List.defaultProps = {
	items: [],
	itemRenderer: Card,
};

// const List = ({ stays }) => (
// 	<article className="list">
// 		{stays.map((stay, index) => (
// 			<Card key={index} stay={stay} />
// 		))}
// 	</article>
// );
