import { useRef } from "react";

import useCarousel from "../../hooks/useCarousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faX,
	faAngleRight,
	faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

import "./ImgPreview.css";

const ImgPreview = ({ imgs, currentIdx, alt, handleClosePreview }) => {
	const previewImg = useRef(null);

	const reorderedImgs = [
		...imgs.slice(currentIdx),
		...imgs.slice(0, currentIdx),
	];

	const [currentImgs, changeImg] = useCarousel(reorderedImgs, previewImg, 1592);

	return (
		<div className="img-preview">
			<button className="left-button" onClick={() => changeImg("left")}>
				<FontAwesomeIcon icon={faAngleLeft} />
			</button>
			<button className="right-button" onClick={changeImg}>
				<FontAwesomeIcon icon={faAngleRight} />
			</button>
			<button
				onClick={() => handleClosePreview(false)}
				className="close-button"
			>
				<FontAwesomeIcon icon={faX} />
			</button>

			<span ref={previewImg} onClick={() => handleClosePreview(false)}>
				<img src={currentImgs[0]} alt={alt} />
				<img src={currentImgs[1]} alt={alt} />
				<img src={currentImgs[2]} alt={alt} />
			</span>
		</div>
	);
};

export default ImgPreview;
