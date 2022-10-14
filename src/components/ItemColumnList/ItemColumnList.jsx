import LandscapeCard from "../LandscapeCard/LandscapeCard";

const ItemColumnList = ({ items }) => {
	return (
		<section
			style={{
				display: "flex",
				flexDirection: "column",
				width: "90%",
			}}
		>
			{items.map((item) => (
				<LandscapeCard key={item.id} item={item} mode="cart" />
			))}
		</section>
	);
};

export default ItemColumnList;
