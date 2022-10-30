import { useEffect, useRef, useState } from "react";

import useCarousel from "../../hooks/useCarousel";
import CarouselDots from "../CarouselDots/CarouselDots";

import FullCarouselImg from "../FullCarouselImg/FullCarouselImg";
import MoveButton from "../MoveButton/MoveButton";

import "./FullCarousel.css";
const FullCarousel = ({ images, autoPlay }) => {
	const [autoMove, setAutoMove] = useState(autoPlay);

	const imgsContainer = useRef(null);
	const [currentImgs, changeImg] = useCarousel(images, imgsContainer, 1400);

	useEffect(() => {
		if (autoMove) {
			const interval = setInterval(() => {
				changeImg();
			}, 5500);
			return () => clearInterval(interval);
		}
	});

	return (
		<section
			className="full-carousel__box"
			onMouseEnter={() => autoPlay && setAutoMove(false)}
			onMouseLeave={() => autoPlay && setAutoMove(true)}
		>
			<div className="full-carousel">
				<MoveButton
					direction="left"
					className={"carousel-left"}
					handleSlide={() => changeImg("left")}
				/>
				<MoveButton
					direction="right"
					className={"carousel-right"}
					handleSlide={changeImg}
				/>
				<CarouselDots images={images} currentImgs={currentImgs} />
				<FullCarouselImg images={currentImgs} reference={imgsContainer} />
			</div>
		</section>
	);
};

export default FullCarousel;
