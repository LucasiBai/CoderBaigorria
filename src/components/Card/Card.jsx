import { Link } from "react-router-dom";

import "./Card.css";

export default function Card({ id, title, img, description, price }) {
	const productURL = `/item/${id}`;
	return (
		<article className="card">
			<Link to={productURL}>
				<img src={img} alt={title} className="card--img card--item" />
				<h3 className="card--title card--item">{title}</h3>
				<h4 className="card--item card--price">${price}</h4>
				<p className="card--description card--item">{description}</p>
			</Link>
		</article>
	);
}
