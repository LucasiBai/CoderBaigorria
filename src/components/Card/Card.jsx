import { useState } from "react";

import { Link } from "react-router-dom";

import "./Card.css";

export default function Card({ id, title, img, description, price }) {
	const [overCard, setOverCard] = useState(false);
	const productURL = `/item/${id}`;

	return (
		<article
			className="card"
			onMouseOver={() => setOverCard(true)}
			onMouseLeave={() => setOverCard(false)}
		>
			<Link to={productURL}>
				<img src={img} alt={title} className="card--img card--item" />
				<h3 className="card--title card--item">{title}</h3>
				<h4 className="card--item card--price">${price}</h4>
				{overCard && (
					<p className="card--description card--item">{description}</p>
				)}
			</Link>
		</article>
	);
}
