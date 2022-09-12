import "./Card.css";

export default function Card({ title, img, description, price }) {
	return (
		<article className="card">
			<img src={img} alt={title} className="card--img card--item" />
			<h3 className="card--title card--item">{title}</h3>
			<h4 className="card--item card--price">${price}</h4>
			<p className="card--description card--item">{description}</p>
		</article>
	);
}
