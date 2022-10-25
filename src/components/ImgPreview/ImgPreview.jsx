import { useRef } from "react";

import useCarousel from "../../hooks/useCarousel";

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
			<button
				onClick={() => handleClosePreview(false)}
				className="close-button"
			>
				X
			</button>
			<button className="left-button" onClick={() => changeImg("left")}>
				{"<"}
			</button>
			<button className="right-button" onClick={changeImg}>
				{">"}
			</button>
			<span ref={previewImg}>
				<img src={currentImgs[0]} alt={alt} />
				<img src={currentImgs[1]} alt={alt} />
				<img src={currentImgs[2]} alt={alt} />
			</span>
		</div>
	);
};

export default ImgPreview;
