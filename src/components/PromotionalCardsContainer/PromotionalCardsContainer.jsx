import PromotionalCard from "../PromotionalCard/PromotionalCard";
import "./PromotionalCardsContainer.css";

const PromotionalCardsContainer = ({ greeting, items, width }) => {
	return (
		<section className="promotional-cards__box">
			<h3>{greeting}</h3>
			<section
				style={{
					gridTemplateColumns: `${width}`,
				}}
			>
				{items &&
					items.map((item) => <PromotionalCard key={item.id} item={item} />)}
			</section>
		</section>
	);
};

export default PromotionalCardsContainer;
