import MoveButton from "../MoveButton/MoveButton";

import Card from "../Card/Card";

import "./ItemList.css";

const ItemList = ({ datos, greeting }) => {
	const slideCards = (direction) => {
		const slider = document.getElementById("slider");

		direction === "right"
			? (slider.scrollLeft += 617)
			: (slider.scrollLeft -= 617);
	};

	return (
		<section className="list--box">
			<h2 className="greeting">{greeting}</h2>

			<div className="list--slider--box">
				<MoveButton
					className={`slider-left-button `}
					direction={"left"}
					handleSlide={() => slideCards("left")}
				/>
				<div className="list--items" id="slider">
					{datos.map((data) => (
						<Card
							key={data.id}
							id={data.id}
							title={data.title}
							description={data.description}
							price={data.price}
							img={data.img}
						/>
					))}
				</div>
				<MoveButton
					className={"slider-right-button"}
					direction={"right"}
					handleSlide={() => slideCards("right")}
				/>
			</div>
		</section>
	);
};

export default ItemList;
