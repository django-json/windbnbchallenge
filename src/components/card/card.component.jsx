import React from "react";

import "./card.styles.css";

const Card = ({ photo, title, superHost, type, rating }) => (
	<section className="card">
		<img className="card__image" src={photo} alt={title} />
		<div className="card__properties">
			<div className="card__column">
				{superHost && <p className="card__superhost">super host</p>}
				<p className="card__stay-type">{type}</p>
			</div>
			<div className="card__rating-wrapper">
				<i className="material-icons">star_rate</i>
				<p className="card__rating">{rating}</p>
			</div>
		</div>
		<h2 className="card__title">{title}</h2>
	</section>
);

export default Card;
