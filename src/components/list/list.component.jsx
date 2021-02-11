import React from "react";

import "./list.styles.css";

import Card from "../card/card.component";

const List = ({ stays }) => (
	<article className="list">
		{stays.map((stay, index) => (
			<Card key={index} stay={stay} />
		))}
	</article>
);

export default List;
