import { useState } from "react";
import ImgSlideItem from "../ImgSlideItem/ImgSlideItem";

import "./ImgSlide.css";

const ImgSlide = ({ imgs, alt, handleMouseOver, handleOpenPreview }) => {
	const [selectedItem, setSelectedItem] = useState(0);
	const maxImgs = imgs.length > 6 ? imgs.slice(0, 6) : imgs;

	const changeImg = (idx) => {
		handleMouseOver({ img: imgs[idx], id: idx });
		setSelectedItem(idx);
	};

	return (
		<div className="select-imgs__container">
			{maxImgs.map((img, idx) => (
				<ImgSlideItem
					key={idx}
					img={img}
					idx={idx}
					alt={alt}
					handleMouseOver={changeImg}
					selected={selectedItem === idx}
				/>
			))}
			{imgs.length > 6 && (
				<ImgSlideItem
					img={imgs[6]}
					idx={6}
					alt={alt}
					handleMouseOver={changeImg}
					handleOnClick={handleOpenPreview}
					selected={selectedItem === 6}
					rest={imgs.slice(7, imgs.length).length}
				/>
			)}
		</div>
	);
};

export default ImgSlide;
