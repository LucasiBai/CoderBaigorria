import { useState, useEffect } from "react";

const useCarousel = (images, ref, pixels) => {
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

	const imgsContainer = ref;

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
			direction === "left" ? pixels : `-${pixels}`
		}px)`;

		const endTrigger = () => {
			changeCurrentImgs(direction);
			imgsContainer.current.removeEventListener("transitionend", endTrigger);
		};

		imgsContainer.current.addEventListener("transitionend", endTrigger);
	};

	useEffect(() => {
		imgsContainer.current.style.transition = "none";
		imgsContainer.current.style.transform = "translateX(0)";
	}, [currentImgs, currentIdx, imgsContainer]);

	return [currentImgs, changeImg];
};

export default useCarousel;
