import { useState } from "react";

import "./ImgContainer.css";

const ImgContainer = ({ imgs, alt }) => {
	const [currentImg, setCurrentImg] = useState(imgs[0]);

	return (
		<div className="img-container__box">
			<div></div>
			<div>
				<img src={currentImg} alt={alt} className="main-img" />
			</div>
		</div>
	);
};

export default ImgContainer;
