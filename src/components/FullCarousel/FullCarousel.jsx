import { useState, useEffect, useRef } from "react";

import FullCarouselImg from "../FullCarouselImg/FullCarouselImg";
import MoveButton from "../MoveButton/MoveButton";

import "./FullCarousel.css";
const FullCarousel = ({ images }) => {
	const [currentIdx, setCurrentIdx] = useState({
		previous: images.length - 1,
		center: 0,
		next: 1,
	});

	const [currentImgs, setCurrentImgs] = useState([
		images[currentIdx.previous],
		images[currentIdx.center],
		images[currentIdx.next],
	]);

	const imgsContainer = useRef(null);

	const changeCurrentImgs = (direction) => {
		const nextImgs = { ...currentIdx };
		if (direction === "left") {
			const setLeft = (key) => {
				nextImgs[key] =
					nextImgs[key] > 0 ? nextImgs[key] - 1 : images.length - 1;
			};
			setLeft("previous");
			setLeft("center");
			setLeft("next");
		} else {
			const setRight = (key) => {
				nextImgs[key] =
					nextImgs[key] !== images.length - 1 ? nextImgs[key] + 1 : 0;
			};
			setRight("previous");
			setRight("center");
			setRight("next");
		}

		setCurrentIdx(nextImgs);
		setCurrentImgs([
			images[nextImgs.previous],
			images[nextImgs.center],
			images[nextImgs.next],
		]);
	};

	const changeImg = (direction) => {
		imgsContainer.current.style.transition = "350ms ease transform";
		imgsContainer.current.style.transform = `translateX(${
			direction === "left" ? "" : "-"
		}1150px)`;

		const endTrigger = () => {
			changeCurrentImgs(direction);
			imgsContainer.current.removeEventListener("transitionend", endTrigger);
		};

		imgsContainer.current.addEventListener("transitionend", endTrigger);
	};

	useEffect(() => {
		imgsContainer.current.style.transition = "none";
		imgsContainer.current.style.transform = "translateX(0)";

		console.log(currentIdx);
	}, [currentImgs]);

	return (
		<section className="full-carousel__box">
			<div className="full-carousel">
				<MoveButton
					direction="left"
					className={"carousel-left"}
					handleSlide={() => changeImg("left")}
				/>
				<MoveButton
					direction="right"
					className={"carousel-right"}
					handleSlide={() => changeImg("right")}
				/>
				<FullCarouselImg images={currentImgs} reference={imgsContainer} />
			</div>
		</section>
	);
};

export default FullCarousel;
