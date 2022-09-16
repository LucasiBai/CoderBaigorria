import Card from "../Card/Card";

const ItemList = ({ datos }) => {
	return (
		<div className="list--items">
			{datos.map((data) => (
				<Card
					key={data.id}
					title={data.title}
					description={data.description}
					price={data.price}
					img={data.img}
				/>
			))}
		</div>
	);
};

export default ItemList;
