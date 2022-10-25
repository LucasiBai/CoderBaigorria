import { useState } from "react";
import ImgSlide from "../ImgSlide/ImgSlide";

import "./ImgContainer.css";

const ImgContainer = ({ imgs, alt }) => {
	const [currentImg, setCurrentImg] = useState(imgs[0]);

	return (
		<div className="img-container__box">
			<ImgSlide imgs={imgs} alt={alt} handleMouseOver={setCurrentImg} />
			<div className="main-img__container">
				<img src={currentImg} alt={alt} className="main-img" />
			</div>
		</div>
	);
};

export default ImgContainer;
