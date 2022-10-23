import PromotionalCard from "../PromotionalCard/PromotionalCard";
import "./PromotionalCardsContainer.css";

const PromotionalCardsContainer = ({ greeting, firstCard, secondCard }) => {
	return (
		<section className="promotional-cards__box">
			<h3>{greeting}</h3>
			<section
				style={
					firstCard && secondCard
						? { gridTemplateColumns: `${firstCard}fr ${secondCard}fr` }
						: {}
				}
			>
				<PromotionalCard />
				<PromotionalCard />
			</section>
		</section>
	);
};

export default PromotionalCardsContainer;
