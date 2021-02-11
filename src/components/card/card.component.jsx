import React from "react";

import "./card.styles.css";

const Card = ({ stay }) => (
	<section className="card">
		<img className="card__image" src={stay.photo} alt={stay.title} />
		<div className="card__properties">
			<div className="card__column">
				{stay.superHost && (
					<p className="card__superhost">super host</p>
				)}
				<p className="card__stay-type">{stay.type}</p>
			</div>
			<div className="card__rating-wrapper">
				<i className="material-icons">star_rate</i>
				<p className="card__rating">{stay.rating}</p>
			</div>
		</div>
		<h2 className="card__title">{stay.title}</h2>
	</section>
);

export default Card;
