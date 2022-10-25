import { useState } from "react";
import ImgSlideItem from "../ImgSlideItem/ImgSlideItem";

import "./ImgSlide.css";

const ImgSlide = ({ imgs, alt, handleMouseOver }) => {
	const [selectedItem, setSelectedItem] = useState(0);
	const maxImgs = imgs.length > 6 ? imgs.slice(0, 6) : imgs;

	const changeImg = (idx) => {
		handleMouseOver(imgs[idx]);
		setSelectedItem(idx);
	};

	return (
		<div className="select-imgs__container">
			{maxImgs.map((img, idx) => (
				<ImgSlideItem
					img={img}
					idx={idx}
					handleMouseOver={changeImg}
					selected={selectedItem === idx}
				/>
			))}
			{imgs.length > 6 && (
				<ImgSlideItem
					img={imgs[6]}
					idx={6}
					handleMouseOver={changeImg}
					selected={selectedItem === 6}
					rest={imgs.slice(8, imgs.length).length}
				/>
			)}
		</div>
	);
};

export default ImgSlide;
