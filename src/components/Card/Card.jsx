import { useState } from "react";

import { Link } from "react-router-dom";
import CardDescription from "../CardDescription/CardDescription";

import "./Card.css";

export default function Card({ id, title, img, description, price }) {
	const [overCard, setOverCard] = useState(false);
	const productURL = `/item/${id}`;

	return (
		<article
			className="card"
			onMouseOver={() => setOverCard(true)}
			onMouseLeave={() => setOverCard(false)}
			style={{ height: overCard && 243 }}
		>
			<Link to={productURL}>
				<img src={img} alt={title} className="card--img card--item" />

				<h4 className="card--item card--price">${price}</h4>
				{overCard && <CardDescription text={description} />}
			</Link>
		</article>
	);
}
