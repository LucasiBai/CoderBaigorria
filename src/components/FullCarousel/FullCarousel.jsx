import FullCarouselImg from "../FullCarouselImg/FullCarouselImg";
import MoveButton from "../MoveButton/MoveButton";

import "./FullCarousel.css";
const FullCarousel = ({ images }) => {
	return (
		<section className="full-carousel__box">
			<div className="full-carousel">
				<MoveButton
					direction="left"
					className={"carousel-left"}
					handleSlide={""}
				/>
				<FullCarouselImg images={images} />
				<MoveButton
					direction="right"
					className={"carousel-right"}
					handleSlide={""}
				/>
			</div>
		</section>
	);
};

export default FullCarousel;
