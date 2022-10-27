import "./CategoryTitle.css";

const CategoryTitle = ({ greeting, img }) => {
	return (
		<div
			className="category-title__box"
			style={{ backgroundImage: `url(${img})` }}
		>
			<h2>{greeting}</h2>
		</div>
	);
};

export default CategoryTitle;
